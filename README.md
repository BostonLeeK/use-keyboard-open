# use-keyboard-open #

### install

`npm i use-keyboard-open`

### example

```
import useKeyboardOpen from "use-keyboard-open";
export default function App() {
  const isKeyboardOpen = useKeyboardOpen();
  return (
    <div>
      <h2>{`keyboard is ${isKeyboardOpen ? "open" : "close"}`}</h2>
      <input defaultValue="click here for open keyboard" />
    </div>
  );
}
```