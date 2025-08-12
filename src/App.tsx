import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import SwapBox from './components/SwapBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <SwapBox/>
    </>
  )
}

export default App
