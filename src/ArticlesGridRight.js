import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NBAArticles.css';

const NBAArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNBAArticles = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://nba-latest-news.p.rapidapi.com/articles?limit=4',
          headers: {
            'X-RapidAPI-Key': '7286b10c02mshfc53e95c22d6351p1ec242jsn6a77af17266e',
            'X-RapidAPI-Host': 'nba-latest-news.p.rapidapi.com',
          },
        };
        const response = await axios.request(options);
        console.log(response.data);
        setArticles(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchNBAArticles();
  }, []);

  return (
    <div className="article-container"> 
      {articles.map((article) => (
        <div key={article.id} className="article-box"> 
          <h3 className="article-title">{article.title}</h3> 
          <p className="article-description">{article.description}</p> 
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="article-link"> 
            Click to read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default NBAArticles;