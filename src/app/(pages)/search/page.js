'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Card from '@/components/card/Card';
export default function SearchPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  useEffect(() => {
    console.log('Query changed:', query);
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);
        const apiKey = '5d7f236d36ac03d07df91fa0d47cce7f';
        const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(
          query
        )}&apikey=${apiKey}&lang=en&country=us&t=${Date.now()}`;

        console.log('Fetching URL:', url);
        const response = await fetch(url);
        const data = await response.json();

        console.log('API response:', data);
        if (data.articles) {
          setArticles(data.articles);
        } else {
          setError('No articles found');
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to fetch news');
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchNews();
    } else {
      setError('No search term provided');
      setLoading(false);
    }
  }, [query]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4 text-center text-white py-2'>Search Results for: {query}</h1>
      {articles.length > 0 ? (
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
               {articles.map((article, index) => (
                 <div key={index}>
                   <Card
                     alt={article.title}
                     cardImage={article.image}
                     description={article.description}
                     heading={article.title}
                     href={article.url}
                     FavoriteHandler={() => addToFavorites(article)}
                   />
                 </div>
               ))}
             </div>
      ) : (
        <p>No results found for "{query}"</p>
      )}
    </div>
  );
}