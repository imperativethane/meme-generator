import React from 'react';
import './main-url.css';
import '../../util/clipboard';


export class MainUrl extends React.Component {
  
  render() {
        return (
            <div className="url-container">
                <div className="url-button">
                    <input id="url" value="https://i.imgflip.com/30b1gx.jpg" readOnly />
                    <button className="btn" data-clipboard-target="#url">
                        Copy URL
                    </button>
                </div>
            </div>
        )
    }
}