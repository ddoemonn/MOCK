'use server';

import { createClient } from '@/utils/supabase/server';

export async function createPost(formData: FormData, tags: string[]) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const content = formData.get('content') as string;

  console.log(tags);
  if (!content) {
    throw new Error('Content is required');
  }

  if (!user) {
    throw new Error('User not authenticated');
  }

  const { data, error } = await supabase
    .from('posts')
    .insert({
      content,
      userId: user.id,
      avatarUrl: user.user_metadata.avatar_url,
      userName: user.user_metadata.user_name,
      name: user.user_metadata.full_name,
      tags,
    })
    .select()
    .returns<Post>();

  if (error) {
    throw new Error(error.message);
  }

  const { data: allTags } = await supabase.from('tags').select('*').returns<Tag[]>();

  for (const tag of tags) {
    const tagExists = allTags?.find(t => t.tag === tag);
    if (!tagExists) {
      await supabase.from('tags').insert({ tag, count: 1 });
    } else {
      await supabase
        .from('tags')
        .update({ count: tagExists.count + 1 })
        .eq('tag', tag);
    }
  }
}
