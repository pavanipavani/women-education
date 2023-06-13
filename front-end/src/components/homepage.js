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
             <button className="box">LEARN MORE</button>
           </div>
           <div className="website">
                <div className="about"><b>About Website</b></div>
            </div>
            <div className="flex">
                <img className="size" src="resources/work.jpg" alt="img"/>
                <div className="border">
                    <div className="without"><b>Without Education</b></div>
                     <p className="text1">Women's education is a fundamental and critical aspect of societal progress and development, as it not only empowers women individually but also has broader positive implications for families, communities, and economies, by enabling women to acquire knowledge, skills, and opportunities that can help them break free from the cycles of poverty, discrimination, and inequality, allowing them to participate fully in social</p>
                </div>
            </div>
            <div className="flex">
                <div className="border1">
                <div className="without"><b>Importance Of Education</b></div>
                    <p className="text2">Empowerment and Individual Development: Education equips
                     women with knowledge, skills, and critical thinking abilities, enabling them 
                     to make informed decisions about their lives, health, and well-being. It enhances
                      their self-confidence, self-esteem, and agency, enabling them to actively 
                      participate in social, economic, and political spheres.Gender Equality: Education 
                      is a powerful tool for challenging </p>
                </div>
                <img className="size1" src="resources/Untitled.jpeg" alt="img"/>
                
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
                        <div className=""><b>Material</b></div>
                    </div>
                   <div className="">
                    <img src="examimage.jpeg" alt="img" />
                    <div className=""><b>Assignments</b></div>
                   </div>
                 </div>
            </div>
            </div>
    )
}
export default Homepage;