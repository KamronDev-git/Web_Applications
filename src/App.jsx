import { useState } from 'react'
import TailwindTest from './conponents/TailwindTest'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <TailwindTest/> */}
    <Home/>
    </>
  )
}

export default App
