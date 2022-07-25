import React from "react";
import { Link } from "react-router-dom";


const Navbar =()=>{
    return(
    <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact ">Contact</Link>
        <Link to="/login ">Login</Link>
        <Link to="/user ">User</Link>
     
    </div>
    )
}
export default Navbar;