import React, { Component } from 'react'
import '../App.css'
// api key = 3a79ec96030e4890aedcee302ece0ce3

export class NewsItem extends Component {
  render() {
   let {title , description, imgUrl, newsUrl} = this.props
    return (
      <div>
        <div className='card newsItem-container' style={{width:"18rem"}}>
         <img src={imgUrl} className='card-img-top' alt='...'/>
         <div className='card-body'>
          <h5 className='card-title'>{title}...</h5>
          <p className='card-text'>{description}...</p>
          <a href={newsUrl} target='_blank' className='btn btn-primary'>Read More</a>
         </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
