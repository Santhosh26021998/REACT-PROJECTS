import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './reslayout2.css';
export function Reslayout2(){
    return(
       <div className="res2 container-fluid">
         <div className="res2head col-lg-12 row">
            <div className="res2top col-lg-12 text-center"> 
              <h1 className="col-lg-12">LOREM IPSUM DOLOR SIT AMET</h1>
              <h4 className="res2text col-lg-12">Lorem ipsum dolor sit amet</h4>
            </div>
            <div className="res2body col-lg-3">
              <h4 className="res2col"><FontAwesomeIcon icon={faDollarSign} className="dollar"/>200</h4>
              <h4 className="res2h4">Lorem ipsum</h4>
              <p>Lorem ipsum dolor sit amet consection adipiscing elit,set do eiumod tempor indicididunt ut labore at dolore.</p>
              <input type={'button'} className="but bg-warning" value={"Get Now"}></input>
            </div>
            <div className="res2body col-lg-3">
              <h4 className="res2col"><FontAwesomeIcon icon={faDollarSign} className="dollar"/>300</h4>
              <h4 className="res2h4">Lorem ipsum</h4>
              <p>Lorem ipsum dolor sit amet consection adipiscing elit,set do eiumod tempor indicididunt ut labore at dolore.</p>
              <input type={'button'} className="but bg-warning" value={"Get Now"}></input>
            </div>
            <div className="res2body col-lg-3">
              <h4 className="res2col"><FontAwesomeIcon icon={faDollarSign} className="dollar"/>400</h4>
              <h4 className="res2h4">Lorem ipsum</h4>
              <p>Lorem ipsum dolor sit amet consection adipiscing elit,set do eiumod tempor indicididunt ut labore at dolore.</p>
              <input type={'button'} className="but bg-warning" value={"Get Now"}></input>
            </div>
         </div>
       </div>
    );
}