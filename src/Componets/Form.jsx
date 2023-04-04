import React, { useState } from 'react'
import "./form.css"

export const Form = () => {
const [name, setName]= useState("")
const [age, setAge]= useState("")
console.log(name)


  return (
   <>
   <h1>Login form </h1>
   <div className='box'>

<label>Name 

   <input type="text" placeholder='enter  name ' value={name} onChange={ (e)=>setName(e.target.value)}/>

</label>
<br />
<br />

<label>
    Age
   <input type="text" placeholder='enter  age '  value={age} onChange={ (e)=>setAge(e.target.value)} />
</label>
<br />
<br />
<label>
   College
   <input type="nember" placeholder='enter  college ' />

</label>
<br />
<br />
<label>
    Number
   <input type="number" placeholder='enter  no. ' />

</label>
   </div>
   <button>submit </button>
   </>
  )
}
