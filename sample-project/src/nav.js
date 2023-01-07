import React from "react";
import { Link } from "react-router-dom";
import './nav.css';
import './finallayout.css';

export default function Nav(){
    return(
        <div>
            {/* <ul className="col-lg-12  d-flex xyz"> */}
               {/* <Link to='/'><li>Home</li></Link>
               <Link to='/logo'> <li>Logo</li></Link>
               <Link to='/buttons'> <li>Buttons</li></Link>
               <Link to='/newcard'> <li>Newcard</li></Link>
               <Link to='/notass'> <li>Notass</li></Link>
               <Link to='/userlogin'> <li>Userlogin</li></Link>
               <Link to='/box'> <li>Box</li></Link>
               <Link to='/card'> <li>Card</li></Link> */}
               <ul className="col-lg-12  d-flex final">
               <Link to='/'><li>reslayout1</li></Link>
               <Link to='/reslayout2'> <li>Reslayout2</li></Link>
               <Link to='/reslayout3'> <li>Reslayout3</li></Link>
               <Link to='/reslayout4'> <li>Reslayout4</li></Link>
            </ul>
               
        
        </div>
    );
}