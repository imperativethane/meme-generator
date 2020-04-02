import React from 'react';
import './meme-carousel.css'


export class MemeCarousel extends React.Component {
    constructor(props) {
        super(props);

        this.handleClickEvent = this.handleClickEvent.bind(this);
        this.handleClickEventUrl = this.handleClickEventUrl.bind(this);
        this.handleClickEventId = this.handleClickEventId.bind(this);

    }

    handleClickEventUrl(e) {
        console.log(e.target.src)
        this.props.selectMeme(e.target.src)
    }

    handleClickEventId(e) {
        console.log(e.target.id)
        this.props.setId(e.target.id, e.target.src)
    }

    handleClickEvent(e) {
        this.handleClickEventUrl(e);
        this.handleClickEventId(e)
    }

    render() {
        return (
            <div className="meme-carousel-container">
                {
                    this.props.memePhotos.map(meme => {
                        return <img src={meme.url} alt="anything else" key={meme.id} className="memes" onClick={this.handleClickEvent}  id={meme.id}/>
                    })
                }
            </div>
        )
    }
}