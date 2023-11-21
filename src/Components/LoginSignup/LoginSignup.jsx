import React, { useState } from 'react';
import './LoginSignup.css'
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { act } from 'react-dom/test-utils';


const LoginSignup = () => {

    //useState
    const [action, setAction] = useState("Login");



  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
        {action === "Login" ? <div></div> : 
        <div className='input'> <img src={user_icon} alt='user_icon' /><input type='text' placeholder='Name' /></div>}
            {/* INPUT 1 */}
            {/* <div className='input'> 
                    <img src={user_icon} alt='user_icon' />
                    <input type='text' placeholder='Name' />
                </div> */}
        
             {/* INPUT 2 */}
            <div className='input'>
                <img src={email_icon} alt='email_icon' />
                <input type='email' placeholder='Email ID' />
            </div>

            {/* INPUT 3 */}
            <div className='input'>
                <img src={password_icon} alt='password_icon' />
                <input type='password' placeholder='Password' />
            </div>
        </div>

        {action==="Sign Up" ? <div></div> : <div className='forgot-password'>Lost password?<span> Click here</span></div>}
        

        <div className='submit-container'>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login </div>
        </div>
    </div>
  )
}

export default LoginSignup;
