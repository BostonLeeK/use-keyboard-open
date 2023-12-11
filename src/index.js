import { useEffect, useState } from 'react';

const useKeyboardOpen = () => {
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    const onFocus = () => setIsKeyboardOpen(true);
    const onBlur = () => setIsKeyboardOpen(false);

    useEffect(() => {
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', onFocus);
            input.addEventListener('blur', onBlur);
        });

        return () => {
            inputs.forEach(input => {
                input.removeEventListener('focus', onFocus);
                input.removeEventListener('blur', onBlur);
            });
        };
    }, []);

    return isKeyboardOpen;
};

export default useKeyboardOpen;
