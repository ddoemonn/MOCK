import { create } from 'zustand';

import { createClient } from '@/utils/supabase/client';

const supabase = createClient();

interface TagStore {
  tags: Tag[];
  fetchTags: () => Promise<void>;
}

export const useTagStore = create<TagStore>(set => ({
  tags: [],
  fetchTags: async () => {
    const { data, error } = await supabase.from('tags').select('*');
    if (error) {
      console.error('Error fetching posts:', error);
    } else {
      set({ tags: data });
    }
  },
}));

const tagStore = useTagStore.getState();
tagStore.fetchTags();
