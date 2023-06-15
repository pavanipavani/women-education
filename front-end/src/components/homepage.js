import React from "react";
import './homepage.css';
function Homepage()
{
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
                    </span>
                    <span className="a">
                        <button className="signup">signup</button>
                        <button className="login">Login</button>
                    </span>
           </div>
           </nav>
           <div id="small"></div>
           <div className="titletext"><b>Dive in and start learning</b></div>
            <div className="text1"><b>The education of the women is the best </b></div>
            <div className="text2"><b> way to educate the society</b></div>
           <div className="box">
            <button className="button">Learn More</button>
           </div>
           <div className="quotesbox">
                <div className="quotes"><b>Enjoying learning is as important as breathing while running.</b></div>
           </div>
           <div className="border">
           <div className="flex">
                <div class="c">
                <div className="b"><b>Women education</b></div>
                <div className="text4">Women's education is very important because it helps girls
                 and women learn <br />and grow. When girls go to school and study, they become 
                 knowledgeable and skilled. Education gives them the power to make choices in
                  their lives and pursue their dreams. It helps them become independent and 
                  confident. When women are educated, they can have better jobs and earn money,
                   which can improve their lives and the lives of their families. Education also 
                   helps women understand their rights and stand up for themselves. It allows them 
                   to contribute to their communities and make a positive difference in the world. 
                   That's why women's education is really valuable and should be supported.</div>
                   </div>
                   <div className="d">
                  <img className="image" src="resources/laptop.jpg" alt="" />  
                 </div>
            </div>
           </div>
           <div className="border1">
                <div className="select"><b>Select your category</b></div>
            </div>
            <div className="border2">
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
                    <img className="classsize" src="resources/exam2.jpg" alt="img" />
                    <div className="video"><b>Assignments</b></div>
                   </div>
                 
            </div>
            </div>
            <footer className="footer">
                 <div className="display">
                 <img className="titleimage1" src="resources/women.jpeg" alt="img" />
                     <div class="title1">
                        <div className="text5"><b>videos</b></div>
                        <div className="text5"><b>Material</b></div>
                        <div className="text5"><b>Assignment</b></div>
                    </div>
                </div>
                <div className="display1">
                    <div className="footersignup"><b>Signup</b></div>
                    <div className="footersignup"><b>Login</b></div>
                </div>  
                <div className="line"><b>_______________________________________________________________________________________________________________________________________________</b></div> 
                <div className="connectus"><b>__ connect us __</b></div>
                <div className="another">
                        <img className='googlesize' src="resources/Google.png" alt="img" />
                        <img className='googlesize' src="resources/Linkedin.png" alt="img" />
                        <img className='googlesize' src="resources/twitter.png" alt="img" />
                        <img className='googlesize' src="resources/facebook.png" alt="img" />
                </div>
            </footer>
        </div>
    )
}
export default Homepage;