import React, { Component } from 'react'
import Newslist from './Newslist'
import Loading, { loading } from './Loading'
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultprops = {
    pageSize:  5,
    country:  'us',
    category:'science'
  }
  static props = {
    pageSize:  PropTypes.number,
    country:  PropTypes.string,
    category: PropTypes.string,
  }
  constructor() {
    super();
    // console.log('This is a constructor')
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }


  // async componentDidMount() {
  //   let data = await fetch("https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2f88cd33c794463483df613cfdae11d7")
  //   let response = (await data).json()
  //   response.then((value) => {
  //     console.log(value)
  //   })
  //   // this.setState({article: response.article})
  //   // console.log(this.state)
  // }

  async componentDidMount() {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2f88cd33c794463483df613cfdae11d7&page=1&pageSize=${this.props.pageSize}`;
      const res = await fetch(url);
      const data = await res.json();
      this.setState({
        articles: data.articles, totalResults: data.totalResults
      });
    }
    catch (e) {
      console.log("something is not working");
    }
  }

  Nextbtn = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 10))) {

      console.log('next btn')
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2f88cd33c794463483df613cfdae11d7&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({
        loading: true
      })
      const res = await fetch(url);
      const data = await res.json();
      this.setState({
        page: this.state.page + 1,
        articles: data.articles,
        loading: false
      })
    }


  }
  Previousbtn = async () => {
    console.log('previous btn')
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2f88cd33c794463483df613cfdae11d7&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    })
    const res = await fetch(url);
    const data = await res.json();
    this.setState({
      page: this.state.page - 1,
      articles: data.articles,
      loading: false
    })


  }

  render() {
    return (
      <div>
        <div className='row-container' >
          <h2>NewsMonkey | There For You</h2>
          {this.state.loading && <Loading />}
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {

              return <div className="cards" key={element.url}>
                <Newslist title={element.title ? element.title.slice(0, 44) : ''} description={element.description ? element.description.slice(0, 88) : ''} newsUrl={element.urlToImage} newsID={element.url} />
              </div>
            })}



          </div>

          <div className="btncontainer">
            <button disabled={this.state.page <= 1} onClick={this.Previousbtn}>Previous</button>
            <button onClick={this.Nextbtn}>Next</button>
          </div>

        </div>
      </div>
    )
  }
}

export default News
