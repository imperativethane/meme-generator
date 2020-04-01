import React from 'react';
import './App.css';
import { MemeCarousel } from '../meme-carousel/meme-carousel';
import { MainDisplay } from '../main-display/main-display';
import { MainUrl } from '../main-url/main-url';
import { LogIn } from '../login/login';
import { InputField } from '../input-field/input-field';
import { Footer } from '../footer/footer'
import { Imgflip } from '../../util/imgflip';



export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      memePhotos: []
    }

    this.displayInfo = this.displayInfo.bind(this)
  }

  getMemePhotos() {
      Imgflip.getMemes()
      .then(memeResults => {
        this.setState({
          memePhotos: memeResults
        })
      })
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
            {this.getMemePhotos()}
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

