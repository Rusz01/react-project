import { useState } from 'react'
import './App.css'
import Buttons from './components/buttons.jsx'

function App() {
  const [color, setColor] = useState("orange")

  const [nameM, setName] = useState("Grey")

  const [textColor, setTextColor] = useState("white")




  return (
    <>
    <div className='w-full h-screen'
      style={{ backgroundColor: color }}>
      <div className='flex justify-center'>
        <h1 className='text-5xl font-bold absolute top-100' style={{color: textColor}}>{nameM}</h1>
      </div>
          <div className='p-5 bg-gray-200 rounded-2xl w-350 flex items-center justify-center absolute inset-x-30 bottom-0 mb-20'>
             <Buttons name="Grey" color={setColor} nameMm={setName} txtColor={setTextColor}/>
             <Buttons name="Blue" color={setColor} nameMm={setName} txtColor={setTextColor}/>
             <Buttons name="Orange" color={setColor} nameMm={setName} txtColor={setTextColor}/>
             <Buttons name="Pink" color={setColor} nameMm={setName} txtColor={setTextColor}/>
             <Buttons name="Purple" color={setColor} nameMm={setName} txtColor={setTextColor}/>
             <Buttons name="Red" color={setColor} nameMm={setName} txtColor={setTextColor}/>
             <Buttons name="Yellow" color={setColor} nameMm={setName} txtColor={setTextColor}/>
          </div>
    </div>
    </>
  )



}


export default App
