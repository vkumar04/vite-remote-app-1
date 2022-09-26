import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { About } from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Remote App 1</h1>
      <Button name="Remote Button"></Button>
      <About />
    </div>
  )
}

export default App
