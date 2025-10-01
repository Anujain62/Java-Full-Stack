import React, { Component } from 'react'
import NewsItem from './NewsItem'
import '../App.css'
import temporaryImage from '../class based components/temporaryImage.png'
import Spinner from './Spinner'

export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }

  // static propTypes = {
  //   // country: propTypes.string,
  //   pageSize: propTypes.number,
  //   category: propTypes.string
  // }

  constructor() {
    super()
    this.state = {
      article: [],
      loading: false,
      page: 1
    }
  }

  // it runs after the renden
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a79ec96030e4890aedcee302ece0ce3&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData.articles)
    this.setState({ article: parsedData.articles, totalArticles: parsedData.totalResults })
  }

  handlePreClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a79ec96030e4890aedcee302ece0ce3&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      article: parsedData.articles,
      loading: false
    })
  }

  handleNextClick = async () => {
    if (!(this.state.page + 1 >= Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a79ec96030e4890aedcee302ece0ce3&pageSize=${this.props.pageSize}`
      this.setState({ loading: true })
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        article: parsedData.articles,
        loading: false
      })
    }
  }

  render() {

    return (
      <div className='news-container'>
        <h1>NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px'
        }}>
          {!this.state.loading && this.state.article.map((element) => {
            return <div className='news-col' key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 30) : ""} description={element.description ? element.description.slice(0, 50) : ""} imgUrl={!element.urlToImage ? temporaryImage : element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
        <div className='btn-container'>
          <button onClick={this.handlePreClick}>&larr; Previous</button>
          <button onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News





