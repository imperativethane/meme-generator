import React from 'react';
import './input-field.css'


export class InputField extends React.Component {
  constructor(props) {
      super(props);

      this.handleTopChange = this.handleTopChange.bind(this);
      this.handleBottomChange = this.handleBottomChange.bind(this);
  }

  handleTopChange(e) {
    this.props.onTopCaptionChange(e.target.value)
  }

  handleBottomChange(e) {
    this.props.onBottomCaptionChange(e.target.value)
  }

  render() {
        return (
            <div className="input-field">
                <div className="content">
                    <h2>User Verified!</h2>
                    <h1>Hi imperativethane</h1>
                    <h2>Fill out the text for your meme</h2>
                    <p>Top Caption</p>
                    <textarea className="textbox" onChange={this.handleTopChange}/>
                    <p>Bottom Caption</p>
                    <textarea className="textbox" onChange={this.handleBottomChange}/>
                </div>
        </div>
        )
    }
}