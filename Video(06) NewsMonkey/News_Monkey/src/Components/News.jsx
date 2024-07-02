import React, { Component } from 'react'
import Newslist from './Newslist'

export class News extends Component {
  constructor() {
    super();
    // console.log('This is a constructor')
    this.state = {
      articles: [],
      loading: false
    }
  }


  // async componentDidMount() {
  //   let data = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=2f88cd33c794463483df613cfdae11d7")
  //   let response = (await data).json()
  //   response.then((value) => {
  //     console.log(value)
  //   })
  //   // this.setState({article: response.article})
  //   // console.log(this.state)
  // }

  async componentDidMount() {
    try {
      let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2f88cd33c794463483df613cfdae11d7";
      const res = await fetch(url);
      const data = await res.json();
      this.setState({
        articles: data.articles
      });
    }
    catch (e) {
      console.log("something is not working");
    }
  }

  render() {
    return (
      <div>
        <div className='row-container' >
          <h2>NewsMonkey | There For You</h2>
          <div className="row">
            {this.state.articles.map((element) => {

              return <div className="cards" key={element.url}>
                <Newslist title={element.title ? element.title.slice(0, 44) : ''} description={element.description ? element.description.slice(0, 88) : ''} newsUrl={element.urlToImage} newsID={element.url} />
              </div>
            })}



          </div>
        </div>
      </div>
    )
  }
}

export default News
