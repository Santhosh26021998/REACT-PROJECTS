import React from "react";
import './App.css';
import Nav from "./nav";
export function Buttons(){
    return(
        <div className="aa">
            <Nav/>
       
            <h1 className="hh">Social Buttons</h1>
            <div className="cc">
            <button className="like">Like</button>
            <button className="comment">Comment</button>
            <button className="share">Share</button>
            </div>
        
        </div>
    );
}