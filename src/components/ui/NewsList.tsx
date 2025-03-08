import React, { useEffect, useState } from 'react';
import { fetchNews } from '../../services/newsService';

// Define types
interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
}

interface NewsListProps {
  categoryFilter: string;
}

const NewsList: React.FC<NewsListProps> = ({ categoryFilter }) => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      const news = await fetchNews(categoryFilter);
      setArticles(news);
      setLoading(false);
    };
    loadNews();
  }, [categoryFilter]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (articles.length === 0) {
    return (
      <h2 className="w-full text-2xl font-semibold">
        {`No news articles found in the category '${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1).toLowerCase()}'`}
      </h2>
    );
  }

  return (
    <div className="space-y-4">
      {articles.map((article, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
        >
          {/* Fallback image if article.urlToImage is falsy */}
          <img
            src={article.urlToImage || "/placeholder.png"}
            alt={article.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          <h2 className="text-xl font-semibold mt-2 text-gray-900 dark:text-gray-100">
            {article.title}
          </h2>
          <p className="mt-1 text-gray-700 dark:text-gray-300">
            {article.description}
          </p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-400 mt-2 inline-block"
          >
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
