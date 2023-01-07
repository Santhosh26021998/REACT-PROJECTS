import { faCircle, faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './reslayout4.css';
export function Reslayout4(){
    return(
       <div className="res4 container-fluid col-lg-12">
         <div className="row res4body">
           <div className="samp1 col-lg-2">
              <h4 className="res4h4"><b>Logo</b><span className="res4sam">Sample</span></h4>
              <h4 className="res4h4"><FontAwesomeIcon icon={faCircle} className="circle"/><FontAwesomeIcon icon={faCircle} className="circle1"/><FontAwesomeIcon icon={faCircle} className="circle1"/></h4>
           </div>
           <div className="samp1 col-lg-2">
              <h4 className="">Sample Menu</h4>
              <p className="">Sample Menu</p>
              <p className="">Sample Menu</p>
              <p className="">Menu</p>
              <p className="">Menu</p>
           </div>
           <div className="samp1 col-lg-2">
              <h4 className="">Sample Menu</h4>
              <p className="">Sample Menu</p>
              <p className="">Sample Menu</p>
              <p className="">Menu</p>
              <p className="">Menu</p>
           </div>
           <div className="samp1 col-lg-2">
            <div className="col-lg-12 d-flex">
              <div className="row"> 
                 <div className="col-lg-2">
                   <FontAwesomeIcon icon={faHome} className="home"/>
                 </div> 
                 <div className="col-lg-8">
                    <p>Sample address</p>
                 </div>
              </div>
            </div>
            <div className="col-lg-12 d-flex">
              <div className="row"> 
                 <div className="col-lg-2">
                   <FontAwesomeIcon icon={faEnvelope} className="home"/>
                 </div> 
                 <div className="col-lg-8">
                    <p>Sample Mail</p>
                 </div>
              </div>
            </div>
            <div className="col-lg-12 d-flex">
              <div className="row"> 
                 <div className="col-lg-2">
                   <FontAwesomeIcon icon={faPhone} className="home"/>
                 </div> 
                 <div className="col-lg-8">
                    <p>Sample address</p>
                 </div>
              </div>
            </div>
           </div>
         </div>

       </div>

    );
}