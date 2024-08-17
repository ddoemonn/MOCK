import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { Github } from 'lucide-react';

import { createClient } from '@/utils/supabase/server';

import { SubmitButton } from './submit-button';

export default function GithubSignIn() {
  const signInWithGitHub = async () => {
    'use server';

    const origin = headers().get('origin');

    const supabase = createClient();
    const { data } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
    });

    if (data.url) {
      redirect(data.url);
    }
  };

  return (
    <form className="flex-1 text-sm flex flex-col w-full justify-items-start  gap-2 text-foreground">
      <SubmitButton
        pendingText="Signing In..."
        formAction={signInWithGitHub}
        className="flex items-center justify-center bg-gray-700 text-white px-4 py-2 text-md rounded-md "
      >
        Sign in with GitHub
        <Github className="w-5 h-5 ml-2" />
      </SubmitButton>
    </form>
  );
}
