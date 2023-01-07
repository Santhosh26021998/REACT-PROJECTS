import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import  Nav  from "./nav.js";
export  function Home(){
    return(
      <div >
        <Nav/>
         <h1>Home Page</h1>
         <FontAwesomeIcon icon={faPlay} className="icon"/>
      </div>
    );
}