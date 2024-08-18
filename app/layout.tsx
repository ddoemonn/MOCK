import Link from 'next/link';

import { Exo, Inter } from 'next/font/google';

const roboto = Inter({
  subsets: ['latin'],
});

const exo = Exo({
  weight: '900',
  subsets: ['latin'],
});

import './globals.css';
import AuthButton from '@/components/AuthButton';
import { createClient } from '@/utils/supabase/server';

const defaultUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Next.js and Supabase Starter Kit',
  description: 'The fastest way to build apps with Next.js and Supabase',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();
  return (
    <html
      lang="en"
      className={roboto.className}
    >
      <body className="bg-background text-foreground font-light">
        <nav className="w-full text-md border-b flex py-4 px-8 fixed top-0 bg-white">
          <Link
            href="/"
            className={`flex items-center gap-1 flex-1 text-3xl ${exo.className} `}
          >
            MOCK.
          </Link>

          {isSupabaseConnected && <AuthButton />}
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
