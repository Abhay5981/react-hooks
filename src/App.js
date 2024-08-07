import React, { useState } from 'react'
import './App.css';
import RuleHooks from './components/RuleHooks';
import UseStateArray from './components/UseStateArray';
import UseStateObj from './components/UseStateObj';
import ShortCirEval from './components/ShortCirEval';
import BasicForm from './components/Form/BasicForm';
import UseEffect from './components/UseEffect/UseEffect';
import UseEffectAPI from './components/UseEffect/UseEffectAPI';

const App = () => {

//   //useState hooks use //
// const [title, setTitle] = useState( "Hello react");


//   const changeTitle = () =>{
//     setTitle("Welcome to React!")
    
// // condition for changing the title while clicking on button//
//     let val = title;
//     // if(val === "Hello react"){
//     //   setTitle("Welcome to React!")
//     // }else{
//     //   setTitle("Hello react")
//     // }
// // * Ternary operators

//  (val ==="Hello react") ? setTitle("Welcome to React!") : setTitle("Hello react")

  // }


  return (
    <div>
      {/* <h1>{title}</h1>
      <button className='btn' onClick={changeTitle}>Click Me</button> */}
    {/* <RuleHooks/> */}

    {/* <UseStateArray/> */}
    {/* <UseStateObj/> */}
    {/* <ShortCirEval /> */}
    {/* <BasicForm/> */}
    {/* <UseEffect/> */}
    <UseEffectAPI/>
    </div>
  )
}

export default App

