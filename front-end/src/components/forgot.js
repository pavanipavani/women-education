import React from "react";
import './forgot.css'
function Forgot()
{
    return(
        <div>
            <div class="flex">
                <div className="a">
                    <img className="loginimg" src="resources/educate.jpg" alt="" />
                </div>
            <div class="forgotpage">
           
               <img className="girlimage" src="resources/login.png" alt="img" /> 
           
                <div className="title"><b>Forgot Password</b></div>
                <div className="margin">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="New Password" />
                    <input type="password" placeholder="conform password" />
                    <button className="button">Update</button>
                    <div className="login">
                        <a href="google.com"><b>Login</b></a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Forgot;