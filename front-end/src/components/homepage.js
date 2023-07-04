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
                    <span className="text"><b>ABOUT US</b></span>
                    </span>
                    <span className="a">
                        <button className="signup">signup</button>
                        <button className="login">Login</button>
                    </span>
           </div>
           </nav>
           <div id="small"></div>
           {/* <div className="titletext"><b>Dive in and start learning</b></div> */}
            <div className="text1">The education of the women is the best</div>
            <div className="text2"> way to educate the society</div>
            <div className="text3">Develop a passion for learning.if you do,</div>
            <div className="text6"> you will never cease to grow</div>
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
                <div className="text4">Women's education is very important because it helps girls and women learn .Education empowers them to make choices in their lives and pursue their dreams. This helps them to be independent and self-confident.
   In India, the literacy rate, including the female literacy rate, is very low in rural areas and in some urban areas. Literacy rate in rural India is 67.77% and in urban India is 84.11%. In rural areas many girls do not study after marriage because their family does not allow them to go to college.
Many women by providing online education on this website
Through this website they can complete their education in Open University.</div>
                   </div>
                   <div className="d">
                  <img className="image" src="resources/laptop.jpg" alt="" />  
                 </div>
            </div>
           </div>
           <div className="border1">
                <div className="select"><b>Select your category</b></div>
                <div className="totalbox">
                    <div className="classes">
                       <img className="videosize" src="resources/c-programming.png" alt="img" />  
                       <div className="video"><b>Videos</b></div>   
                       <div className="video1">Explore C language topics with helpful videos to boost your skills.</div>          
                    </div>
                    <div className="Material">
                    <img className="classsize" src="resources/material.jpeg" alt="img" />   
                        <div className="video"><b>Material</b></div>
                        <div className="video1">Read simplified materials to enhance your skills and understanding.</div>          
                    
                    </div>
                   <div className="Assignment">
                    <img className="classsize" src="resources/exam2.jpg" alt="img" />
                    <div className="video"><b>Assignments</b></div>
                    <div className="video1">Take an exam to assess and test your skills.</div>          
                    
                   </div>
            </div>
            
            </div>
            <div className="signupimg">
                <img className="imagesignup" src="resources/signupimage.png" alt="" />
                <div className="educate"><b>Anyone can learn for free on educate girls Sign-up now</b></div>
                <button className="signupbutton"><b>Sign-up Now for free</b></button>
            </div>
            <footer className="footer">
                 <div className="display">
                     <div class="title1">
                        <div className="text5"><b>videos</b></div>
                        <div className="text5"><b>Material</b></div>
                        <div className="text5"><b>Assignment</b></div>
                        <div className="text5"><b>About us</b></div>
                    </div>
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