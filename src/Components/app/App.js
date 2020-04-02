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
      username: '',
      password: '',
      text0: '',
      text1: '',
      memePhotos: [],
      mainMemeUrl: '',
      resetMemeUrl: '',
      mainMemeId: '',
    }

    this.displayInfo = this.displayInfo.bind(this);
    this.selectMainMeme = this.selectMainMeme.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.logIn = this.logIn.bind(this);
    this.changeTopCaption = this.changeTopCaption.bind(this);
    this.changeBottomCaption = this.changeBottomCaption.bind(this);
    this.setId = this.setId.bind(this)
  }
  
  selectMainMeme(memeUrl) {
    this.setState({
      mainMemeUrl: memeUrl,
    })
  }

  setId(memeId, memeUrl) {
    this.setState({
      mainMemeId: memeId,
      resetMemeUrl: memeUrl
    })

    if (this.state.loggedIn && (this.state.text0 || this.state.text1)) {
      Imgflip.createMeme(this.state.username, this.state.password, memeId, this.state.text0, this.state.text1)
      .then(createdMeme => {
        this.selectMainMeme(createdMeme.data.url);
      })
    }
  }
  
  displayInfo() {
    if (this.state.loggedIn) {
      return <InputField onTopCaptionChange={this.changeTopCaption} onBottomCaptionChange={this.changeBottomCaption} /> 
    } else {
      return <LogIn onUsernameChange={this.changeUsername} onPasswordChange={this.changePassword} logIn={this.logIn} />
    }
  }

  logIn() {
    if(!this.state.username || !this.state.password) {
      return alert('Please enter username and password')
    }

    Imgflip.createMeme(this.state.username, this.state.password, this.state.mainMemeId, 'test', 'test')
    .then(createdMeme => {
      if (!createdMeme.success) {
        return alert('Username or password is incorrect, please try again')
      } else {
        this.setState({
          loggedIn: true
        })
      }
    })

  }

  changeUsername(username) {
    this.setState({
      username: username
    })
  }

  changePassword(password) {
    this.setState({
      password: password
    })
  }

  changeTopCaption(topCaption) {
      this.setState({
      text0: topCaption
    })

    if (!topCaption && !this.state.text1) {
      this.setState({
        mainMemeUrl: this.state.resetMemeUrl
      })
      return;
    }

    Imgflip.createMeme(this.state.username, this.state.password, this.state.mainMemeId, topCaption, this.state.text1)
    .then(createdMeme => {
      this.selectMainMeme(createdMeme.data.url);
    })
  }

  changeBottomCaption(bottomCaption) {
      this.setState({
      text1: bottomCaption
    })

    if (!bottomCaption && !this.state.text0) {
      this.setState({
        mainMemeUrl: this.state.resetMemeUrl
      })
      return;
    }

    Imgflip.createMeme(this.state.username, this.state.password, this.state.mainMemeId, this.state.text0, bottomCaption)
    .then(createdMeme => {
      this.selectMainMeme(createdMeme.data.url);
    })
  }

  componentDidMount() {
    Imgflip.getMemes()
    .then(memeResults => {
      console.log(memeResults)
      this.setState({
        memePhotos: memeResults,
        mainMemeUrl: memeResults[0].url,
        mainMemeId: memeResults[0].id
      })
    })
  }

  render() {
    return (
      <div className="App">
        <img alt='imperativethanelogo' className="header"/>
          <div className="main-container">
          <MemeCarousel memePhotos={this.state.memePhotos} selectMeme={this.selectMainMeme} setId={this.setId} />
          <div className="main-meme-container">
            <MainDisplay memeUrl={this.state.mainMemeUrl}/>
            <MainUrl memeUrl={this.state.mainMemeUrl}/>
          </div>
          {this.displayInfo()}
        </div>
        <Footer />
      </div>
    )
  }
}

