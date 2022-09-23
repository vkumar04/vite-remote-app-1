import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Remote App 1</h1>
      <Button name="Remote Button"></Button>
    </div>
  )
}

export default App
