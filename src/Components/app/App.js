import React from 'react';
import './App.css';
import { MemeCarousel } from '../meme-carousel/meme-carousel';
import { MainDisplay } from '../main-display/main-display';
import { MainUrl } from '../main-url/main-url';
import { LogIn } from '../login/login';
import { InputField } from '../input-field/input-field';
import { Footer } from '../footer/footer'



export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      memePhotos: [
        {url: 'https://i.imgflip.com/30b1gx.jpg', id: 1},
        {url: 'https://i.imgflip.com/1ur9b0.jpg', id: 2},
        {url: 'https://i.imgflip.com/1g8my4.jpg', id: 3},
        {url: 'https://i.imgflip.com/1otk96.jpg', id: 4},
        {url: 'https://i.imgflip.com/24y43o.jpg', id: 5},
        {url: 'https://i.imgflip.com/22bdq6.jpg', id: 6}
      ]
    }

    this.displayInfo = this.displayInfo.bind(this)
  }
  
  displayInfo() {
    if (this.state.loggedIn) {
      return <InputField /> 
    } else {
      return <LogIn />
    }
  }

  
  render() {
    return (
      <div className="App">
        <img alt='imperativethanelogo' className="header"/>
          <div className="main-container">
          <MemeCarousel memePhotos={this.state.memePhotos} />
          <div className="main-meme-container">
            <MainDisplay />
            <MainUrl />
          </div>
          {this.displayInfo()}
        </div>
        <Footer />
      </div>
    )
  }
}

