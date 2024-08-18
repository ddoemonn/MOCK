// store.ts
import { create } from 'zustand';

interface PostStore {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  addPost: (post: Post) => void;
}

export const usePostStore = create<PostStore>(set => ({
  posts: [],
  setPosts: posts => set({ posts }),
  addPost: post => set(state => ({ posts: [...state.posts, post] })),
}));
