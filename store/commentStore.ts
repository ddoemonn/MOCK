import { create } from 'zustand';

import { createClient } from '@/utils/supabase/client';

const supabase = createClient();

interface CommentStore {
  comments: Comment[];
  postId: number | null;
  isLoading: boolean;
  fetchComments: (postId: number | null) => Promise<void>;
  addComment: (comment: Comment) => void;
  setPostId: (postId: number) => void;
}

export const useCommentStore = create<CommentStore>((set, get) => ({
  comments: [],
  isLoading: false,
  postId: null,
  fetchComments: async (postId: number | null) => {
    if (postId === null) return;
    const { data, error } = await supabase.from('comments').select('*').eq('postId', postId);
    console.log(data);
    if (error) {
      console.error('Error fetching posts:', error);
    } else {
      set({ comments: data });
    }
  },
  setPostId: async (postId: number) => {
    set({ postId });
    set({ isLoading: true });
    await get().fetchComments(postId);
    set({ isLoading: false });
  },
  addComment: comment => set(state => ({ comments: [...state.comments, comment] })),
}));

const commentStore = useCommentStore.getState();
