"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../card/Card";
import { useFavorites } from "../../context/FavoriteContext";

const HomeSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToFavorites } = useFavorites();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://gnews.io/api/v4/top-headlines?apikey=${process.env.NEXT_PUBLIC_GNEWS_API_KEY}&lang=en&country=us`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) return <p className="text-white h-screen">Loading news...</p>;

  return (
    <div className="">
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
    </div>
  );
};

export default HomeSection;