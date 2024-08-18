import UnauthorizedDialog from '@/modules/HomePage/UnauthorizedDialog';
import { createClient } from '@/utils/supabase/server';

import CreatePostDrawer from './CreatePostDrawer';
import Posts from './Posts';
import Tags from './Tags';

export default async function HomePage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <Tags />
      <div className="flex flex-col items-center mt-20  ">
        <Posts />
      </div>
      {user ? <CreatePostDrawer /> : <UnauthorizedDialog />}
    </>
  );
}
