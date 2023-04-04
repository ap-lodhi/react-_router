import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {Link ,Navigate} from "react-router-dom"
const User =()=>{

    const [user, setUser]= useState([])

    useEffect(()=>{
        fetch(`https://reqres.in/api/users?page=2`)
        .then((res)=> res.json())
        .then((res)=> setUser(res.data))
        
        
    },[])
    const isAuth =true;
    // if(isAuth){
    //    return <Navigate to="/login"/>
    // }
    return(
        <>
        <h1>user page </h1>
            {user.map((user)=>(
                <p key={user.id}>{user.id}  -<Link to={`/user/${user.id}`} > {user.first_name}</Link> </p>
            ))}

            {/* {user.map((el)=>{
                
                return <p key={el.id}>{user.id}  -<Link to={`/user/${el.id}`} > {el.first_name}</Link> </p>
            })} */}
        </>
    )
}
export default User;