import { create } from "zustand";

const useLikesStore = create((set) => ({
  likes: {},
  views: {},
  addLike: (articleId) =>
    set((state) => ({
      likes: { ...state.likes, [articleId]: (state.likes[articleId] || 0) + 1 },
    })),
  addView: (articleId) =>
    set((state) => ({
      views: { ...state.views, [articleId]: 1 },
    })),
}));

export default useLikesStore;
