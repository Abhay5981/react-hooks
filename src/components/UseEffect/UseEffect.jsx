import React, { useEffect, useState } from 'react'

const UseEffect = () => {
const [count, setCount] = useState(0)

    useEffect( ()=>{
// console.log("Hello Count") 
        if(count>= 1){
           document.title = `chat (${count})`; 
        }else{
            document.title = `chat`; 
        }
                     
    })
    console.log("Hello outside")


  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Click Me</button>
    </>
  )
}

export default UseEffect
