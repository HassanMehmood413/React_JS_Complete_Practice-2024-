import React, { Component } from 'react'
import Newslist from './Newslist'
import Loading, { loading } from './Loading'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultprops = {
    pageSize: 5,
    country: 'us',
    category: 'science',
    full: this.full,
    btnclr: this.btnclr,
    totalResults: 70
  }
  static props = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  }


  constructor() {
    super();
    // console.log('This is a constructor')
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
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


  //Refactoring all the code and making it fast and short
  async updatepage() {
    const url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=149ba2bd9a5a4385894253bcd6b574ed&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({
      loading: true
    })
    const res = await fetch(url);
    const data = await res.json();
    // data.totalResults
    console.log(data)
    this.setState({
      articles: data.articles,
      totalResults: data.totalResults,
      loading: false
    })
  }


  async componentDidMount() {
    // try {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2f88cd33c794463483df613cfdae11d7&page=1&pageSize=${this.props.pageSize}`;
    //   const res = await fetch(url);
    //   const data = await res.json();
    //   this.setState({
    //     articles: data.articles, totalResults: data.totalResults
    //   });
    // }
    // catch (e) {
    //   console.log("something is not working");
    // }
    this.updatepage()
    ///disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.pageSize)} 
  }

  Nextbtn = async () => {
    // console.log(data.totalResults)
    await this.setState({
      page: this.state.page + 1,
      // articles: data.articles,
    })
    this.updatepage()


  }
  Previousbtn = async () => {
    console.log('previous btn')
    await this.setState({
      page: this.state.page - 1,
      // articles: data.articles,
    })
    this.updatepage()
  }


  
  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})
    const url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=149ba2bd9a5a4385894253bcd6b574ed&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({
      loading: true
    })
    const res = await fetch(url);
    const data = await res.json();
    // data.totalResults
    console.log(data)
    this.setState({
      articles: this.state.articles.concat(data.articles),
      totalResults: data.totalResults,
    })
    
  };

  render() {
    const { full, btnclr } = this.props
    return (
      <div style={full}>
        <div className='row-container' >
          <h2 style={full} >NewsMonkey | There For You</h2>
          {this.state.loading && <Loading />}

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles !== this.state.totalResults}
            // loader={<Loading/>}
          >



            <div className="row">
              {this.state.articles.map((element) => {

                return <div className="cards" key={element.url}>
                  <Newslist full={this.props.full} title={element.title} description={element.description} newsUrl={element.urlToImage} newsID={element.url} author={element.author} publishedAt={element.publishedAt} />
                </div>
              })}



            </div>
          </InfiniteScroll>

        </div>
      </div>
    )
  }
}

export default News
