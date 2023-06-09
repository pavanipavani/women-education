import React from 'react';
import './signup.css';
function Signup(){
    return(
        <div>
            <div class="flex">
                <div className="signupbox">
                        <img className="size" src="resources/login.png" alt="image"/>
                        <div class="title"><b>Signup</b></div>
                        <div className='margin'>
                        
                        <input type="text" placeholder="Name" />
                      
                        <input type="text" placeholder="Username" />
                       
                        <input type="text" placeholder="Email" />
                       
                        <input type="password" placeholder='password' />
                        
                        <input type="number" placeholder='Phone Number' />
                        <button class="button">Signup</button>
                        <div className='login'>already have an account 
                            <a className="loginpage"href="">Login</a>
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
export default Signup;