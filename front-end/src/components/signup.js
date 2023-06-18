import React from 'react';
import './signup.css';
function Signup(){
    return(
        <div>
            <div class="flex">
                <div className="a">
                  <img className="signupimg" src="resources/course.png" alt="" />
                </div>
                <div className="signupbox">
                        
                        <div className='margin'>
                        
                        <input type="text" placeholder="Name" />
                      
                        <input type="text" placeholder="Username" />
                       
                        <input type="text" placeholder="Email" />
                       
                        <input type="password" placeholder='password' />
                        
                       
                        <button class="button">Sign up</button>
                        <div className='login'>Already heve an account<a href="google.com">Login</a></div>
                        <div className='or'>OR</div>
                    
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
    )
}
export default Signup;