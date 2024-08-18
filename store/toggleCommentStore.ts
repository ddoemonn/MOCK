import { create } from 'zustand';

interface ToggleComment {
  postId: number | null;
  isToggle: boolean;
}

interface ToggleCommentStore {
  toggle: ToggleComment;
  setToggle: (toggle: ToggleComment) => void;
}

export const useToggleCommentStore = create<ToggleCommentStore>(set => ({
  toggle: {
    postId: null,
    isToggle: false,
  },
  setToggle: toggle => set({ toggle }),
}));

const toggleCommentStore = useToggleCommentStore.getState();
