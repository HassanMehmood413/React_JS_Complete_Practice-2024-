import React, { Component } from 'react'

export class Newslist extends Component {

  render() {
    let { title, description, newsUrl, newsID , author , publishedAt} = this.props
    let {full} = this.props
    return (
      <div className="card-container" style={full}>

        <div className="card"  >
          <img src={!newsUrl?'https://www.cnet.com/a/img/resize/8bd5d288c43ae92e9ca04afc4f6e58129957397f/hub/2024/04/30/5fbb5255-54e5-4315-a25d-4b1d13d980c6/word-games-connections-ny-times-9460.jpg?auto=webp&fit=crop&height=675&width=1200': newsUrl} alt="" />
          <div className="card-body" style={full}>
            <h5>{!title? 'hello':title}</h5>
            <p>{author}</p>
            <p>{description}</p>
            <p>{new Date(publishedAt).toDateString()}</p>
            <a href={newsID}><button>More Details</button></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newslist

