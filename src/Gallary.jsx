import React, { useState } from 'react'

export default function Gallary() {

    let [count,setCount] =useState(0)
    let [name,SetName]=useState("Ali")

    function changeCount(){
        count = setCount(Math.random())
    }

    function changeName(){
        name = SetName("Abdo")
    }

  return (
    <div>
      <h3>Gallary componenet</h3>
      <h5>Count: {count}</h5>
      <h5>Name: {name}</h5>
      <button onClick={()=>changeCount()} className='btn btn-info'>Change</button>
      <button onClick={()=>changeName()} className='btn btn-info'>Change Name</button>
    </div>
  )
}
