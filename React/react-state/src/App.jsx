import { useState } from 'react'
import Counter from "./Counter.jsx";
import LikeButton from './LikeButton.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LikeButton />
      {/* <h1>States in React</h1> */}
      {/* <Counter/> */}
    </>
  )
}

export default App
