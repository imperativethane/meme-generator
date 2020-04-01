import React from 'react';
import './login.css'


export class LogIn extends React.Component {
  
  render() {
        return (
            <div className="login">
                <div className="content">
                    <h1>Log In</h1>
                    <p>Username</p>
                    <input type="text" placeholder="Enter your username" className="display-info-input" />
                    <p>Password</p>
                    <input type="text" placeholder="Enter your password" className="display-info-input" />
                    <button className="login-button">Submit</button>
                </div>
            </div>
        )
    }
}