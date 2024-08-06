import React, { useState } from 'react'

const UseStateObj = () => {

    const [myObj, setMyObj] = useState({
        myName:"Abhay", myAge: 28, rollNo:25
    })

    const updateObj = () =>{
        setMyObj({...myObj, myName: "Kumar"})
    }

  return (
    <div>
      <h1 className='h1'>Name: {myObj.myName} & Age: {myObj.myAge } & Roll no :{myObj.rollNo}</h1>
        <button className='btn' onClick={updateObj}>Update</button>
    </div>
  )
}

export default UseStateObj
