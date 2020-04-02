import React from 'react';
import './login.css'


export class LogIn extends React.Component {
    constructor(props) {
        super(props);

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    
    handleUsernameChange(e) {
        this.props.onUsernameChange(e.target.value);
    }

    handlePasswordChange(e) {
        this.props.onPasswordChange(e.target.value);
    }


  render() {
        return (
            <div className="login">
                <div className="content-container">
                    <h1 className="login-header">Log In</h1>
                    <p>Username</p>
                    <input type="text" placeholder="Enter your username" className="display-info-input" onChange={this.handleUsernameChange} />
                    <p>Password</p>
                    <input type="password" placeholder="Enter your password" className="display-info-input" onChange={this.handlePasswordChange} />
                    <button className="login-button" onClick={this.props.logIn} >Submit</button>
                </div>
            </div>
        )
    }
}