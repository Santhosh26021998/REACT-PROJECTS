import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './reslayout3.css';
export function Reslayout3(){
    return(
    <div className="res3 col-lg-12 contaniner-fluid">
        <div className="res3head col-lg-12 row">
            <div className="res3top col-lg-12 text-center">
              <h1 className="col-lg-12">LOREM IPSUM DOLOR SIT AMET</h1>
              <p className="res3text col-lg-12">Lorem ipsum dolor sit amet consection adipiscing elit,set do<br></br> eiumod tempor indicididunt ut labore at dolore.</p>
              <input type={'text'} placeholder="search product" className="search"></input><FontAwesomeIcon icon={faSearch} className="searchicon"/>
            </div>
        </div>
    </div>
    );
}   