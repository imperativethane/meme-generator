import React from 'react';
import './meme-carousel.css'


export class MemeCarousel extends React.Component {

  render() {
        return (
            <div className="meme-carousel-container">
                {
                    this.props.memePhotos.map(meme => {
                        return <img src={meme.url} alt="anything else" key={meme.id} className="memes"/>
                    })
                }
            </div>
        )
    }
}