import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Color, setColor] = useState("olive")

  return (
    <>
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: Color}}
    >
            <h1 className='text-4xl font-bold text-center p-4'>BG Changer App</h1>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-2 py-3 rounded-3xl'>
            
        <button 
        onClick={() => setColor("red")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
        style={{backgroundColor:"red"}}>RED</button>

      <button 
      onClick={() => setColor("blue")}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
                  style={{backgroundColor:"blue"}}
                  >Blue</button>

      <button 
      onClick={() => setColor("green")}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
                  style={{backgroundColor:"green"}}
                  >Green</button>

<button 
      onClick={() => setColor("yellow")}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
                  style={{backgroundColor:"yellow"}}
                  >Yellow</button>
      
      <button 
      onClick={() => setColor("pink")}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
                  style={{backgroundColor:"pink"}}
                  >Pink</button>

<button 
      onClick={() => setColor("darkkhaki")}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
                  style={{backgroundColor:"darkkhaki"}}
                  >Darkkhaki</button>
      
      <button 
      onClick={() => setColor("magenta")}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
                  style={{backgroundColor:"magenta"}}
                  >Magenta</button>
  
        </div>
      </div>
    </div>
    </>
  )
}

export default App
