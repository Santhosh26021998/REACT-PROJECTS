import React from "react";
import { Link } from "react-router-dom";
import { Reslayout1 } from "./reslayout1";
import { Reslayout2 } from "./reslayout2";
import { Reslayout3 } from "./reslayout3";
import { Reslayout4 } from "./reslayout4";
import './finallayout.css';
import Nav from "./nav";
export function Finallayout(){
    return(
        <div>
            <Nav/> 
            <Reslayout1/>
            <Reslayout2/>
            <Reslayout3/>
            <Reslayout4/>
        </div>
    );

}