import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { faArrowAltCircleRight, faArrowRight, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import com from './com.jpeg';
import Nav from "./nav";
export function Userlogin(){
    return(
     
        <div className="body col-lg-12 row">
          <Nav/>
          <div className="col-lg-4">
            <img src={com} className="img col-lg-4"/>
          </div>
          <div className="info col-lg-4">
            <form className="col-lg-12">
              <h4 className="h4">Member Login</h4><br></br>
              <FontAwesomeIcon icon={faEnvelope} className="mail"/>
              <input className="inp" type={'text'} placeholder="   Email"/><br></br><br></br>
              <FontAwesomeIcon icon={faLock} className="lock"/>
              <input className="inp" type={'password'}placeholder="   Password"/><br></br><br></br>
              <input className="but" type={'button'} value="Login"/><br></br><br></br>
              <p className="p2">Forgot<span className="p1"> username / password?</span></p>
              <p className="p1 p2">Create your Account <FontAwesomeIcon icon={faArrowRight} className="arrow"/></p>
            </form>
        
        </div>
        </div>
        
    );
}