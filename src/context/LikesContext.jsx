import { createContext, useContext, useState } from "react";

// 1. Buat Context
const LikesContext = createContext();

// 2. Buat Provider
export function LikesProvider({ children }) {
  const [likes, setLikes] = useState({});
  const [views, setViews] = useState({});

  const addLike = (articleId) => {
    setLikes((prev) => ({
      ...prev,
      [articleId]: (prev[articleId] || 0) + 1,
    }));
  };

  const addView = (articleId) => {
    if (!views[articleId]) {
      setViews((prev) => ({
        ...prev,
        [articleId]: 1,
      }));
    }
  };

  return (
    <LikesContext.Provider value={{ likes, views, addLike, addView }}>
      {children}
    </LikesContext.Provider>
  );
}

// 3. Buat Custom Hook untuk Menggunakan Context
export function useLikes() {
  return useContext(LikesContext);
}
