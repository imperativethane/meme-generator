import React from 'react';
import './main-display.css';


export class MainDisplay extends React.Component {
  
  render() {
        return (
            <div className="main-display-container">
                <img src={this.props.memeUrl} alt="main display" className="main-display" />
            </div>

        )
    }
}