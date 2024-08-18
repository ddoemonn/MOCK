import { create } from 'zustand';

import { createClient } from '@/utils/supabase/client';

const supabase = createClient();

interface PostStore {
  posts: Post[];
  fetchPosts: () => Promise<void>;
  addPost: (post: Post) => void;
}

export const usePostStore = create<PostStore>(set => ({
  posts: [],
  fetchPosts: async () => {
    const { data, error } = await supabase.from('posts').select('*');
    if (error) {
      console.error('Error fetching posts:', error);
    } else {
      set({ posts: data });
    }
  },
  addPost: post => set(state => ({ posts: [...state.posts, post] })),
}));

const postStore = usePostStore.getState();
postStore.fetchPosts();
