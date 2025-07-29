import { useState } from 'react'
import './App.css'

function App() {

  let [counter , setscounter] = useState( 15 ); 
  
  //let counter = 5

  const addValue =()=>
  {
    if (counter <20)
    {counter = counter+1 ; 
    setscounter(counter); }
  
  }

   const removeValue =()=>
  {
    if (counter >0)
    {counter = counter-1 ; 
    setscounter(counter);} 
  
  }
 
//problem in ui updation
//data updation from hooks
  return (
    <>
    <h1> counter app </h1>
    <h2> you can only count upto 20 </h2> 
     <h3> count : {counter} </h3>

    <button 
    onClick ={addValue}> add value {counter} </button>
    <br/>
    <button
    onClick ={removeValue}> remove value {counter}</button>
    </>
  )
}

export default App
