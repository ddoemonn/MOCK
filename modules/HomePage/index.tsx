import { Exo } from 'next/font/google';
import { TbWorldWww } from 'react-icons/tb';

import { cn } from '@/lib/utils';
import UnauthorizedDialog from '@/modules/HomePage/UnauthorizedDialog';
import { createClient } from '@/utils/supabase/server';

import CreatePostDrawer from './CreatePostDrawer';
import Posts from './Posts';

const exo = Exo({
  weight: '400',
  subsets: ['latin'],
});

export default async function HomePage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="relative w-11/12 mt-24 mx-8">
      <p className="text-4xl mb-12 max-w-xl">
        Social media for <strong>developers</strong> who want to <strong className="text-blue-600">connect </strong> more!
      </p>
      <div className="w-full flex gap-20">
        <div className="flex flex-col items-start w-3/5  gap-4  ">
          <Posts />
        </div>
        <aside className="flex flex-col w-2/5 gap-8">
          <div className="w-full max-h-96 p-4 pt-4 rounded-sm shadow-lg border-l-4 border-black flex flex-col gap-2 items-start justify-items-start">
            <h1 className="text-lg font-bold"> Quote of the Day</h1>
            <p>“Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected.”</p>
            <h4 className="text-right w-full font-semibold">- Steve Jobs</h4>
          </div>
          <div
            className={cn(
              'w-full max-h-96 p-4 pt-4 pb-6 rounded-sm shadow-lg border-l-4 border-black flex flex-col gap-8 items-center justify-items-start',
              exo.className
            )}
          >
            <TbWorldWww className="w-32 h-32 text-black stroke-1" />
            <section className="text-center">
              <h1 className="text-2xl font-semibold">Total Users</h1>
              <h3 className="text-xl mb-6">2.018</h3>
              <h1 className="text-2xl font-semibold">Online Now</h1>
              <h3 className="text-xl">213</h3>
            </section>
          </div>
        </aside>
      </div>

      {user ? <CreatePostDrawer /> : <UnauthorizedDialog />}
    </div>
  );
}
