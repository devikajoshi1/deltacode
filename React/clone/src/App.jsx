import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductTab from './ProductTab'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Blockbuster Deals | Shop Now </h2>
      <ProductTab/>
    </>
  )
}

export default App
