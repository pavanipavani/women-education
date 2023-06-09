import React from 'react';
import './login.css';
function Login()
{
    return(
        <div>
            
            <div className='loginpage'>
                <img className='size' src ="resources/login.png" alt="image" />
                <div className='title'><b>Login</b></div>
                <div className='margin'>
                    <div className='text'><b>Username</b></div>
                    <input type="text" placeholder="Username" />
                    <div className='text'><b>Password</b></div>
                    <input type="password" placeholder="Password" />
                    <button className='button'>Login</button>
                    <div className='pass'>
                        <a className='forgot'  href="">forgot password?</a>
                        <div className='user'>New user? 
                            <a className='signup' href=""> Signup</a>
                        </div>
                        <div className='connect'><b>___Or Connect With___</b></div>
                        <div className='display'>
                            <img className='imagesize' src="resources/Google.png" alt="image" />
                            <img className='imagesize' src="resources/Linkedin.png" alt="image" />
                            <img className='imagesize' src="resources/twitter.png" alt="image" />
                            <img className='imagesize' src="resources/facebook.png" alt="image" />
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}
export default Login;