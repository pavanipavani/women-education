import React from 'react';
import './login.css';
function Login()
{
    return(
        <div>
           <div class="flex">
                <div className="a">
                    <img className="loginimg" src="resources/educate.jpg" alt="" />
                </div>
            
            <div className='loginpage'>
                <img className='size' src ="resources/login.png" alt="img" />
                <div className='title'><b>Login</b></div>
                <div className='margin'>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button className='button'>Login</button>
                    <div className='pass'>
                        <a className='forgot'  href="google.com">forgot password?</a>
                        <div className='user'>New user? 
                            <a className='signup' href="google.com"> Signup</a>
                        </div>
                        <div className='connect'><b>___Or Connect With___</b></div>
                        <div className='display'>
                            <img className='imagesize' src="resources/Google.png" alt="img" />
                            <img className='imagesize' src="resources/Linkedin.png" alt="img" />
                            <img className='imagesize' src="resources/twitter.png" alt="img" />
                            <img className='imagesize' src="resources/facebook.png" alt="img" />
                        </div>
                    </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}
export default Login;