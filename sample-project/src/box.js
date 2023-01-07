import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Nav from "./nav";
export function Box(){
    return(
        <div className="body col-lg-12 row">
            <Nav/>
            <h1 className="h2 col-lg-12 text-center">Boxes</h1>
            <div className="box col-lg-12 d-flex flex-row">
              <div className="s1 col-lg-2"><h5>Small</h5></div>
              <div className="m1 col-lg-2"><h5>Medium</h5></div>
              <div className="l1 col-lg-2"><h5>Large</h5></div>    
            </div>
        </div>
    );
}