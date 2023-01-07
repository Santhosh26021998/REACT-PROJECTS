import React from 'react';
import './App.css';
import img1 from './congrats-card-profile-img.png';
import img2 from './download.jpeg';
import Nav from './nav';
export function Newcard(){
    return(
        
        <div>
        <Nav/>
        <div className='newdiv1'>
          
        <h1>Congratulations</h1>
        <div className='newcard'>
           <img src={img1}/>
           <h2>Kiran V</h2>
           <p className='newtext'>Vishnu Institute of Computer Education and Technology,<br/>Bhimavaram</p>
           <img src={img2} className='newimg'/>
        </div>
        </div>
        </div>
       
      
    

    );
}