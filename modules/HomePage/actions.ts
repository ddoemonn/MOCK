'use server';

import { createClient } from '@/utils/supabase/server';

export async function createPost(formData: FormData) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const content = formData.get('content') as string;
  if (!content) {
    throw new Error('Content is required');
  }

  if (!user) {
    throw new Error('User not authenticated');
  }

  const { error } = await supabase
    .from('posts')
    .insert({ content, userId: user.id, avatarUrl: user.user_metadata.avatar_url, userName: user.user_metadata.user_name, name: user.user_metadata.full_name });

  if (error) {
    throw new Error(error.message);
  }
}
