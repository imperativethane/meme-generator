import React from 'react';
import './meme-carousel.css'


export class MemeCarousel extends React.Component {
    constructor(props) {
        super(props);

        this.handleClickEvent = this.handleClickEvent.bind(this);
    }

    handleClickEvent(e) {
        this.props.onMainMemeChange(e.target.src);
        this.props.onIdChange(e.target.id);
        this.props.onResetUrlChange(e.target.src);
    }

    render() {
        return (
            <div className="meme-carousel-container">
                {
                    this.props.memes.map(meme => {
                        return <img src={meme.url} alt={meme.url} key={meme.id} className="memes" onClick={this.handleClickEvent}  id={meme.id}/>
                    })
                }
            </div>
        )
    }
}