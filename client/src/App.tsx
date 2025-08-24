import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AITutorSlidingAuth from './pages/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AITutorSlidingAuth/>
    </>
  )
}

export default App
