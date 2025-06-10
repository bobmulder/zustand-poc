import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentOne from "./components/ComponentOne.js";
import ComponentTwo from "./components/ComponentTwo.js";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <hr/>
      <ComponentOne title={"This is component one"} />
      <hr/>
      <ComponentTwo title={"This is component two"} />
    </>
  )
}

export default App
