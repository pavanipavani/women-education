import React from "react";
import './homepage.css';
function Homepage()
{
    return(
        <div>
           <nav className="navbar">
                <div className="display">
                    <img className="titleimage" src="resources/women.jpeg" alt="img" />
                    <div class="title">
                        <span className="text"><b>HOME</b></span>
                        <span className="text"><b>VIDEOS</b></span>
                        <span className="text"><b>MATERIAL</b></span>
                        <span className="text"><b>ASSIGNMENT</b></span>
                        <span className="text"><b>SIGNUP</b></span>
                    </div>
                </div>
           </nav>
           <div className="margin">
                <div classname="flex">
                <img className="imagesize" src="resources/a.jpeg" alt="img"/>
                
            </div>
            <div className="education"><b>The education of the women is the best</b></div>
            <div className="education1"><b>way to educate the society</b></div>
           
            <button className="box">LEARN MORE</button>
           </div>
           <div className="website">
                <div className="about"><b>About Website</b></div>
            </div>
            <div className="flex">
                <div class="a">
                <div className="text1">Women's education is very important because it helps girls
                 and women learn and grow. When girls go to school and study, they become 
                 knowledgeable and skilled. Education gives them the power to make choices in
                  their lives and pursue their dreams. It helps them become independent and 
                  confident. When women are educated, they can have better jobs and earn money,
                   which can improve their lives and the lives of their families. Education also 
                   helps women understand their rights and stand up for themselves. It allows them 
                   to contribute to their communities and make a positive difference in the world. 
                   That's why women's education is really valuable and should be supported.</div>
                   </div>
                   <div className="a">
                  <img className="image" src="resources/Untitled.jpeg" alt="" />  
                 </div>
            </div>
            <div className="divTag">
                <div className="catagory"><b>Select Your Category</b></div>
            </div>
            <div className="flex1">
                <div className="totalbox">
                    <div className="classes">
                       <img className="videosize" src="resources/c-programming.png" alt="img" />  
                       <div className="video"><b>Videos</b></div>             
                    </div>
                    <div className="Material">
                    <img className="classsize" src="resources/material.jpeg" alt="img" />   
                        <div className="video"><b>Material</b></div>
                    </div>
                   <div className="Assignment">
                    <img className="classsize" src="resources/exam1.jpg" alt="img" />
                    <div className="video"><b>Assignments</b></div>
                   </div>
                 </div>
            </div>
            <footer className="footer">
                {/* <div className="logo"> */}
                    <img className="titleimage1" src="resources/women.jpeg" alt="" />
                {/* </div> */}
            </footer>
            </div>
    )
}
export default Homepage;