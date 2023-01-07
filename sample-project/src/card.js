import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import img1 from './man.jpeg';
import Nav from "./nav";
export function Card(){
    return(
    <div className="a1 container"> 
    <Nav/>
    <div className="head col-lg-12 col-md-12 col-sm-12 row">
        <div className="d2 col-lg-12 col-md-12 col-sm-12 text-center">
            <h1 className="h1 col-lg-12 col-md-12 col-sm-12">Learn 4.0 Technologies</h1>
            <h6 className="h6 col-lg-12 col-md-12 col-sm-12">Get Trained by alumini of iits and top companies like amazon,microsoft,intel,qualcomm,etc.learn directly from professionals involved in prodeuct development.</h6>
        </div>
        <div className="d3 col-lg-5 bg-light">
            <h2 className="h2">Data Scientist</h2>
            <p className="p2">Data Scientists gather and analyze large lets of structured and unstructured data.</p>
            <img className="i2" src={img1}/>
        </div>
        <div className="d4 col-lg-5 bg-light">
            <h2 className="h3">Data Scientist</h2>
            <p className="p3">Data Scientists gather and analyze large lets of structured and unstructured data.</p>
            <img className="i2" src={img1}/>
        </div>
        <div className="d5 col-lg-5 bg-light">
            <h2 className="h4">Data Scientist</h2>
            <p className="p4">Data Scientists gather and analyze large lets of structured and unstructured data.</p>
            <img className="i2" src={img1}/>
        </div>
        <div className="d6 col-lg-5 bg-light">
            <h2 className="h5">Data Scientist</h2>
            <p className="p5">Data Scientists gather and analyze large lets of structured and unstructured data.</p>
            <img className="i2" src={img1}/>
        </div>
    </div>
    </div>   
    );
}