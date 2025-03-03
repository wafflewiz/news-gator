import React, { useEffect, useState } from 'react';
import { fetchNews } from '../../services/newsService';

// Define types
interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

const NewsList: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch news when component mounts
  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      const news = await fetchNews('general');
      setArticles(news);
      setLoading(false);
    };

    loadNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-4">
      {articles.map((article, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          <h2 className="text-xl font-semibold mt-2">{article.title}</h2>
          <p className="mt-1">{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 inline-block">
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
