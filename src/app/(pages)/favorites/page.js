"use client";

import React from "react";
import { useFavorites } from "../../../context/FavoriteContext";
import { MdOutlineFavorite } from "react-icons/md";
import Button from "@/components/button/Button";

const Favorite = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  if (favorites.length === 0) {
    return <div className="text-white h-screen text-center mt-10">No favorites yet.</div>;
  }
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl text-white mb-6 text-center">Your Favorites</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {favorites.map((article, index) => (
          <div key={index} className="rounded-2xl bg-gray-800 max-w-96 md:max-w-none mx-auto">
            <div>
              <img
                alt={article.title}
                className="rounded-t-2xl w-full min-h-[200px] max-h-[200px]"
                src={article.image}
                width={400}
                height={400}
              />
            </div>
            <div className="flex flex-col justify-between min-h-[300px]">
              <div>
                <h2 className="px-2 pt-2 text-white py-1">{article.title}</h2>
              </div>
              <div>
                <p className="px-2 text-gray-400 text-sm">{article.description}</p>
              </div>
              <div className="pb-2 flex justify-between items-center mx-4">
                <Button href={article.url}/>
                <button onClick={() => removeFromFavorites(article.title)}>
                  <MdOutlineFavorite className="cursor-pointer text-black" size={25} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;