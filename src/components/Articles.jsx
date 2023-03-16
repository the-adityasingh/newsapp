import React, { useEffect, useState } from 'react';
import ArticleCards from './ArticleCards';
import axios from 'axios';

const Articles = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {

        let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=97c9b1bf095b4a8ba8f7fb25ead61f13';

        axios.get(url)
        .then((res) => setArticles(res.data.articles));

    },[]);  

    return (
        <>
            <div className='d-flex justify-content-center flex-wrap mt-2 mx-1'>
                { articles.map((element) => {
                    return <ArticleCards title={element.title} description={element.description} img={element.urlToImage} url={element.url} author={element.author}/>
                })}
            </div>
        </>
    )
}

export default Articles;