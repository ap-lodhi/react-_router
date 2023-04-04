import React, { useEffect ,useState } from "react";

const About =()=>{

    const [info ,setInfo]= useState([])


useEffect(()=>{

        fetch('https://reqres.in/api/users?page=2')
        .then((response) => response.json())
        .then((response) => setInfo(response.data))
        
   
    },[])
    console.log(info)
    return(
        <>
        <h2>About</h2>
       {info.map((ele)=>(
        <p>{ele.first_name}</p>
       ))}
        </>
    )
}
export default About;