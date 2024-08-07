import React, { useState } from 'react'

const ShortCirEval = () => {

    const [demo, SetDemo] = useState("Abhay");
  return (
    <div>
      
     <h1 className='h1'>{demo || "Word"}</h1>
     <h2 className=''>{demo && "kumar"}</h2>
      
    </div>
  )
}

export default ShortCirEval
