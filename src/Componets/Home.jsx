import React, { useState } from "react";
const Home =()=>{
const [info ,setInfo]= useState([])
    const fetched=()=>{

        fetch('https://reqres.in/api/users?page=2')
        .then((response) => response.json())
        .then((response) => setInfo(response.data))
        
   
    }
    console.log(info)
    return(
        <>
        <h2>Home</h2>
       <button  onClick={fetched}>fetch</button>

       {
       info.map((ele)=>(
            <p>{ele.id}</p>

       ))
       }
        </>
    )
}
export default Home;