import { faBell, faCircleCheck, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Nav from "./nav";
export function Notass(){
    return(
       <div>
        <Nav/>
        <h1 className="h1 text-center">Notifications</h1>
        <div className="row ">
            <div className="info bg-primary col-sm-12 col-md-2 col-lg-2 d-flex">
              <FontAwesomeIcon icon={faCircleCheck} className="icon1"/>
              <p className="i1">Information Message</p>
            </div>
            <div className="info bg-success col-sm-12 col-md-2 col-lg-2 d-flex">
              <FontAwesomeIcon icon={faCircleCheck} className="icon1"/>
              <p className="i1">Success Message</p>
            </div>
            <div className="info bg-warning col-sm-12 col-md-2 col-lg-2 d-flex">
              <FontAwesomeIcon icon={faBell} className="icon1"/>
              <p className="i1">Warning Message</p>
            </div>
            <div className="info bg-danger col-sm-12 col-md-2 col-lg-2 d-flex">
              <FontAwesomeIcon icon={faWarning} className="icon1"/>
              <p className="i1">Error Message</p>
            </div>
          </div>

       </div>
    );
}