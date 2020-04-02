import React from 'react';
import './main-display.css';


export class MainDisplay extends React.Component {
  
  render() {
        return (
            <div className="main-display-container">
                <img src={this.props.memeUrl} alt={this.props.memeUrl} className="main-display" />
            </div>

        )
    }
}