import UnauthorizedDialog from '@/modules/HomePage/UnauthorizedDialog';
import { createClient } from '@/utils/supabase/server';

import CommentSection from './CommentSection';
import CreatePostDrawer from './CreatePostDrawer';
import Posts from './Posts';
import Tags from './Tags';

export default async function HomePage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="relative">
      <Tags />
      <div className="flex flex-col items-center mt-24 gap-4 ">
        <Posts />
      </div>
      <CommentSection />

      {user ? <CreatePostDrawer /> : <UnauthorizedDialog />}
    </div>
  );
}
