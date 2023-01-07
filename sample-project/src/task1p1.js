import React from "react";
import'./task1p1.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export function Task1pg1(){
    return(
        <div className="container-fluid p-5">
            <div className="row">
                <div className="col-lg-12">
                    <div className="col-lg-12">
                        <div className="col-lg-4 ">
                          <h4>Student Management System</h4>
                        </div>
                    </div>
                    <div className="col-lg-12 row">
                        <div className="col-lg-8 ">
                            <div className="searchbar d-flex">
                                 <input type={'text'} className="inp col-lg-4" placeholder="Search"></input><FontAwesomeIcon icon={faSearch} className="searchpg1"/>
                           </div>
                        </div>
                        <div className="col-lg-1 col-md-4 col-sm-4 row">   
                           <button className="btn btn-dark butpg1">Add</button>
                        </div>
                    </div>
                    <div className="col-lg-12 mt-5">
                        <table border={'1'} className="col-lg-12 ">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Location</th>
                                    <th>Email</th>
                                    <th>DOB</th>
                                    <th>Education</th>
                                    <th>Action</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody id="tb">

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>    




    );
}