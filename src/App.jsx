import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const plus= () => {
    setCount((prev) => prev + 1)
  }

  function changeColor(count) {
    if (count <= 0) {
      return { backgroundColor: "blue" };
    } else if (count > 0 && count < 15) {
      return { backgroundColor: "green" };
    } else if (count >= 15 && count < 30) {
      return { backgroundColor: "yellow" };
    } else {
      return { backgroundColor: "red" };
    }
  }

  const minus = () => {
    setCount((prev) => prev - 1)
  }
  return (
    <div className="container">
      <div className="card">
        <div className="temperature" style={changeColor(count)}>{count}°C</div>
        <div className="control-container">
          <button className="controller plus" onClick={plus}>+</button>
          <button className="controller minus" onClick={minus}>-</button>
        </div>
      </div>
    </div>
  )
}
export default App