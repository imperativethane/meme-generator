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
      memes: [],
      mainMemeUrl: '',
      resetMemeUrl: '',
      mainMemeId: '',
    }

    this.logIn = this.logIn.bind(this);
    this.changeMainMeme = this.changeMainMeme.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeTopCaption = this.changeTopCaption.bind(this);
    this.changeBottomCaption = this.changeBottomCaption.bind(this);
    this.changeId = this.changeId.bind(this);
    this.changeResetUrl = this.changeResetUrl.bind(this);
    this.renderMainMeme = this.renderMainMeme.bind(this);
    this.display = this.display.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
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

  changeMainMeme(memeUrl) {
    this.setState({
      mainMemeUrl: memeUrl,
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

    this.renderMainMeme(this.state.username, this.state.password, this.state.mainMemeId, topCaption, this.state.text1)
  }

  changeBottomCaption(bottomCaption) {
    this.setState({
      text1: bottomCaption
    })

    this.renderMainMeme(this.state.username, this.state.password, this.state.mainMemeId, this.state.text0, bottomCaption);
  }

  changeId(memeId) {
    this.setState({
      mainMemeId: memeId,

    })

    if (this.state.loggedIn && (this.state.text0 || this.state.text1)) {
      this.renderMainMeme(this.state.username, this.state.password, memeId, this.state.text0, this.state.text1)
    }
  }

  changeResetUrl(memeUrl) {
    this.setState({
      resetMemeUrl: memeUrl
    })
  }

  renderMainMeme(username, password, id, text0, text1) {
    if (!text0 && !text1) {
      this.setState({
        mainMemeUrl: this.state.resetMemeUrl
      })
      return;
    }
    Imgflip.createMeme(username, password, id, text0, text1)
    .then(createdMeme => {
      this.changeMainMeme(createdMeme.data.url);
    })
  }

  display() {
    if (this.state.loggedIn) {
      return <InputField onTopCaptionChange={this.changeTopCaption} onBottomCaptionChange={this.changeBottomCaption} /> 
    } else {
      return <LogIn onUsernameChange={this.changeUsername} onPasswordChange={this.changePassword} logIn={this.logIn} />
    }
  }

  componentDidMount() {
    Imgflip.getMemes()
    .then(memes => {
      this.setState({
        memes: memes,
        mainMemeUrl: memes[0].url,
        mainMemeId: memes[0].id,
        resetMemeUrl: memes[0].url
      })
    })
  }

  render() {
    return (
      <div className="App">
        <img alt='imperativethanelogo' className="header"/>
          <div className="main-container">
          <MemeCarousel memes={this.state.memes} onMainMemeChange={this.changeMainMeme} onIdChange={this.changeId} onResetUrlChange={this.changeResetUrl} />
          <div className="main-meme-container">
            <MainDisplay memeUrl={this.state.mainMemeUrl}/>
            <MainUrl memeUrl={this.state.mainMemeUrl}/>
          </div>
          {this.display()}
        </div>
        <Footer />
      </div>
    )
  }
}

