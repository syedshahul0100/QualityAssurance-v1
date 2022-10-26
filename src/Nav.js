import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import Movies from "./Movies.js";

function Nav (){

const navigate = useNavigate();
const searchhandler=()=>{
navigate('/Movies' )
}



    return(

        <>
<div className="header">
            <div className="navButtonsArrangement">
            <Link to="/" className="navbutton">Home</Link>
            <Link to="/Movies" className="navbutton">Movies</Link>
            <Link to="/contact" className="navbutton">Contact</Link>
            <Link to="/about" className="navbutton">About</Link>
            </div>
        </div>
        
        </>
    )
}

export default Nav;