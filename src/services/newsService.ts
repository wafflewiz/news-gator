import axios from 'axios';

// Define types for the news response
interface NewsArticle {
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface NewsAPIResponse {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
}

// Set up the NewsAPI base URL and key
const API_KEY = '04e2bbd321a24d13ba49f4a2c4aa71b2';
const BASE_URL = 'https://newsapi.org/v2';

// Fetch the latest news based on category or topic
export const fetchNews = async (category: string = 'general', query: string = ''): Promise<NewsArticle[]> => {
  try {
    const response = await axios.get<NewsAPIResponse>(`${BASE_URL}/top-headlines`, {
      params: {
        apiKey: API_KEY,
        category,
        q: query,
        language: 'en',
      },
    });
    
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
