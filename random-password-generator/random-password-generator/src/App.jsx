import { useState , useCallback , useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [lengthAllowed , setlength] = useState(8) ; 
  const [numberAllowed , setnumber] = useState(false) ; 
  const [charallowed , setcharallowed] = useState(false) ; 
  const [password , setpassword] = useState("") ; 

  //ref hook 
  const passwordRef = useRef(null) ;  

  

  const passwordGenerator= useCallback(()=>{
    let pass = "" 
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str+= "0123456789" 
    if (charallowed) str+="!@#$%^&*"

    for (let i = 1 ; i<lengthAllowed ; i++)
    {
      let char = Math.floor(Math.random()* str.length + 1) ; 
      pass += str.charAt(char) ; 
    }

    setpassword(pass) 
    

  } , [lengthAllowed , numberAllowed, charallowed, setpassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select(); 
    //passwordRef.current?.setSelectionRange(0,3); 
    window.navigator.clipboard.writeText(password)
  }, [password])

useEffect(()=>{
  passwordGenerator();
 }, [lengthAllowed, numberAllowed,charallowed , passwordGenerator])

  return (
    <>

     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-black bg-gray-700 '>
      <h1 className='text-white text-center'> password generator </h1>
      <div className='flex shadow round-lg overflow-hidden mb-4 bg-amber-100 my-4'>
      <input 
      type = "text"
      value ={password}
      className='outline-none w-full py-1 px-3'
      ref = {passwordRef}
      placeholder='password'/>


      <button 
      onClick={copyPasswordToClipboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'> copy </button>
      </div>


     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
        type = "range"
        min = {6} 
        max = {100}
        value = {lengthAllowed}
        className='cursor-pointer'
        onChange={(e)=>{setlength(Number(e.target.value))}}
        />
        <label>Length : {lengthAllowed}</label>
      </div>



      <div className='flex items-center gap-x-1'>
        <label className='text-amber-300'>Numbers </label>
        <input
        type = "checkbox"
        defaultChecked= {numberAllowed} 
        id = "numberInput"
        onChange={()=>{setnumber((prev)=> !prev)}}/>
        

      </div>
       <div className='flex items-center gap-x-1'>
        <label className='text-amber-300'>Charachter </label>
        <input
        type = "checkbox"
        defaultChecked = {charallowed} 
        id = "charInput"
        onChange={()=>{setcharallowed((prev)=> !prev)}}/>
      </div>
     </div>

     </div>
    </>
  )
}

export default App
