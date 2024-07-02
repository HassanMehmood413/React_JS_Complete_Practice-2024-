import React, { Component } from 'react'

export class Newslist extends Component {

  render() {
    let { title, description, newsUrl, newsID } = this.props
    return (
      <div className="card-container">

        <div className="card">
          <img src={!newsUrl?'https://www.cnet.com/a/img/resize/8bd5d288c43ae92e9ca04afc4f6e58129957397f/hub/2024/04/30/5fbb5255-54e5-4315-a25d-4b1d13d980c6/word-games-connections-ny-times-9460.jpg?auto=webp&fit=crop&height=675&width=1200': newsUrl} alt="" />
          <div className="card-body">
            <h5>{title}.......</h5>
            <p>{description}.......</p>
            <a href={newsID}><button>More Details</button></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newslist

