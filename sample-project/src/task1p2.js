import React from "react";
import'./task1p2.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
export function Task1pg2(){
    return(
       <div className="container-fluid p-5 ">
          <div className="row">
            <div className="col-lg-12">
                <div className="col-lg-4 d-flex">
                    <h4>Add Student Details</h4>
                </div>
                <div className="col-lg-12 mt-4 row d-flex">
                    <div className="col-lg-6 row">
                        <label className="col-lg-3">First Name:</label>
                        <input type={'text'} className="inpp1 col-lg-3" placeholder="Enter your First Name"/>
                    </div>
                    <div className="col-lg-6 row ">
                        <label className="col-lg-3">Last Name:</label>
                        <input type={'text'} className="inpp1 col-lg-3" placeholder="Enter your Last Name"/>
                    </div>
                </div>    
                <div className="col-lg-12 mt-4 row d-flex">
                    <div className="col-lg-6 row">
                        <label className="col-lg-3">Email:</label>
                        <input type={'text'} className="inpp1 col-lg-3" placeholder="Enter your Email"/>
                    </div>
                    <div className="col-lg-6 row ">
                        <label className="col-lg-3">DOB:</label>
                        <input type={'date'} className="inpp1 col-lg-3" placeholder="dd/mm/yyyy"/>
                    </div>
                </div> 
                <div className="col-lg-12 mt-4 row d-flex">
                    <div className="col-lg-6 row">
                        <label className="col-lg-3">Education:</label>
                        <input type={'text'} className="inpp1 col-lg-3" placeholder="Enter your Education"/>
                    </div>
                    <div className="col-lg-6 row ">
                        <label className="col-lg-3">Location:</label>
                        <input type={'text'} className="inpp1 col-lg-3" placeholder="Enter your Location"/>
                    </div>
                </div> 
                <div className="col-lg-12 mt-4 row d-flex">
                    <div className="col-lg-1">
                        <label className="">About:</label>
                    </div>
                    <div className="col-lg-11">
                        <textarea type={'text'} className="inp1" placeholder="Enter your details"/>
                    </div>
                </div> 
                <div className="col-lg-12 mt-4 row d-flex">
                    <div className="col-lg-8">
                        <button className="btn btn-dark but">Submit</button>
                    </div>
                </div> 
            </div> 
          </div>
       </div>
       


    );
}