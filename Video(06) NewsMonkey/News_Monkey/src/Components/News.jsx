import React, { useState,useEffect } from 'react'
import Newslist from './Newslist'
import Loading from './Loading'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  //Refactoring all the code and making it fast and short
  const updatepage = async () => {
    
    const url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`
    setloading(true)
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    setarticles(data.articles)
    settotalResults(data.totalResults)
    setloading(false)
  }

  useEffect(() => {
    setpage(page+1)
    updatepage()
  }, [])



  const Nextbtn = async () => {
    setpage(page+1)
    updatepage()


  }
  const Previousbtn = async () => {
    setpage(page - 1)
    updatepage()
  }


  const fetchMoreData = async () => {
    props.setprogress(10)
    setpage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`
    props.setprogress(30)
    setloading(true)
    const res = await fetch(url);
    const data = await res.json();
    props.setprogress(50)
    setarticles(articles.concat(data.articles))
    settotalResults(data.totalResults)
    setloading(false)
    props.setprogress(100)
  };

    const { full, btnclr, progress } = props
    return (
      <div style={full}>
        <div className='row-container' >
          <h2 style={full} >NewsMonkey | There For You</h2>
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={loading && <Loading />}
          >
            <div className="row">
              {articles.map((element) => {

                return <div className="cards" key={element.url}>
                  <Newslist full={props.full} title={element.title} description={element.description} newsUrl={element.urlToImage} newsID={element.url} author={element.author} publishedAt={element.publishedAt} />
                </div>
              })}
            </div>
          </InfiniteScroll>

        </div>
      </div>
    )
}

export default News

News.defaultprops = {
  pageSize: 5,
  country: 'us',
  category: 'science',
  // full: this.full,
  // btnclr: this.btnclr,
  totalResults: 70,
}
News.props = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
}
