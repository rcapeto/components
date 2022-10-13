import { useState } from "react";
import useDidMount from "./hooks/useDidMount";

export default function App() {
  const [input, setInput] = useState('');

  function renderConsole() {
    console.log("Render Console")
  }

  useDidMount(renderConsole)

  return(
    <div>
      <h1>Master</h1>
      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
    </div>
  );
}