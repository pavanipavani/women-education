import React from "react";
import './exampage.css';
function Assignment(){
    return(
        <div>
                <nav className="navbar">
            <div className="display">
                <img className="titleimage" src="resources/women.jpeg" alt="img" />
                 <div className="search1"><b>Search here</b></div>
               <input  className="search" type="text" placeholder="Search Videos,Material" />
               <div className="searchbox">
                    <img className="searchsize" src="resources/search.jpg" alt="img"/>
               </div>
           </div>
           <div className="nav">
            <span className="margin">
                    <span className="text"><b>HOME</b></span>
                    <span className="text"><b>VIDEOS</b></span>
                    <span className="text"><b>MATERIAL</b></span>
                    <span className="text"><b>ASSIGNMENT</b></span>
                    <span className="text"><b>ABOUT US</b></span>
                    </span>
                    <span className="a">
                        <button className="signup">signup</button>
                        <button className="login">Login</button>
                    </span>
           </div>
           </nav>
           <div className="box">
                <div className="answer">
                    <div className="questiondetails"></div>
                </div>
                <div className="question"></div>
           </div>
        </div>
    )
}
export default Assignment;