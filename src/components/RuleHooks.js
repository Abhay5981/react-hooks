//1 Always writ it inside the component or function
//2 components Name should be in PascalCase
//3 we can directly import or we can directly write it using React.hookName
// 4 Dont call Hooks inside loop, conditions or nested function


import React, { useState } from 'react'

const RuleHooks = () => {

    const [title, SetTitle] = useState("Rule of Hooks")

    const handleChange = () => {
        SetTitle("Hello World")

        let val = title;
        (val ==="Rule of Hooks")? SetTitle("Hello World") : SetTitle("Rule of Hooks");

    }

    
    

  return (
    <div>
      <h1>{title}</h1>
      <button className='btn' onClick={handleChange}>Click Me</button>
    </div>
  )
}

export default RuleHooks
