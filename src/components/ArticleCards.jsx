import React from 'react';

import '../css/Article.css'

const ArticleCards = (props) => {

  const { title, description, img, url, author } = props;

  return (
    <div className='mx-3 my-2'>
        <div className="card article">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title"><a href={url}>{title}</a></h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="author m-3">
                <i>-{author?author:'Unknown'}</i>
            </div>
        </div>
    </div>
  )
}

export default ArticleCards;