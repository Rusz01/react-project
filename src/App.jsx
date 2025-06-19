import { useState } from 'react'
import './App.css'
import Buttons from './components/buttons.jsx'

function App() {
  const [color, setColor] = useState("orange")


  return (
    <>
    <div className='w-full h-screen'
      style={{ backgroundColor: color }}>
      <div className='flex justify-center'>
        <h1 className='text-5xl font-bold text-white'>Orange</h1>
      </div>
          <div className='p-5 bg-gray-200 rounded-2xl w-350 flex items-center justify-center mb-20'>
             <Buttons name="Grey" color={setColor}/>
             <Buttons name="Blue" color={setColor}/>
             <Buttons name="Orange" color={setColor}/>
             <Buttons name="Pink" color={setColor}/>
             <Buttons name="Purple" color={setColor}/>
             <Buttons name="Red" color={setColor}/>
             <Buttons name="Yellow" color={setColor}/>
          </div>
    </div>
    </>
  )



}


export default App
