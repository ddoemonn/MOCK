import { PostgrestSingleResponse } from '@supabase/supabase-js';

import UnauthorizedDialog from '@/modules/HomePage/UnauthorizedDialog';
import { createClient } from '@/utils/supabase/server';

import CreatePostDrawer from './CreatePostDrawer';
import Posts from './Posts';

export default async function HomePage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const posts: PostgrestSingleResponse<Post[]> = await supabase.from('posts').select('*');

  return (
    <>
      <div className="flex flex-col items-center mt-12">
        <Posts posts={posts} />
      </div>
      {user ? <CreatePostDrawer /> : <UnauthorizedDialog />}
    </>
  );
}
