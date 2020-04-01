import React from 'react';
import './input-field.css'


export class InputField extends React.Component {
  
  render() {
        return (
            <div className="input-field">
                <div className="content">
                    <h2>User Verified!</h2>
                    <h1>Hi imperativethane</h1>
                    <h2>Fill out the text for your meme</h2>
                    <p>Top Caption</p>
                    <textarea className="textbox" />
                    <p>Bottom Caption</p>
                    <textarea className="textbox" />
                </div>
        </div>
        )
    }
}