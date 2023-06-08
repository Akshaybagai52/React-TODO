import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ToDoForm from './components/ToDoForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToDoForm />
    </>
  )
}

export default App
