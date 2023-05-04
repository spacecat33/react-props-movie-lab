import React, { Component } from 'react';

export default class CardFront extends Component {

 

  render() {
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
        {/* /* /* this is where the poster goes */ }
        {/* // <img src={this.props.poster === "goldeneye" ? `../assets/poster-imgs/${this.props.poster}.jpg` : `../assets/poster-imgs/${this.props.poster}.png`} alt={this.props.title} /> */}
      </div>
    )
  }
}
