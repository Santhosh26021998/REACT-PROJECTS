import React from 'react';
import './App.css';
import rcb from './rcb.jpeg';
import csk from './csk.jpeg';
import Nav from './nav';
export function Logo(){
      return(
         <div className='super container-fluid col-lg-12'>
             <Nav/>
            <h1>Super Over League</h1>
           
            <img src={rcb}/>
            <img src={csk}/>
            
         </div>
      );
}