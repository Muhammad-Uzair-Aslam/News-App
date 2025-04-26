"use client";

import React, { createContext, useContext, useState } from "react";

const FavoriteContext = createContext(undefined);

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (article) => {
    if (!favorites.some(item => item.title === article.title)) {
      setFavorites([...favorites, article]);
    }
  };

  const removeFromFavorites = (title) => {
    setFavorites((prev) => prev.filter((item) => item.title !== title));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoriteProvider");
  }
  return context;
};