import Link from 'next/link';

import { Exo, Inter } from 'next/font/google';

const roboto = Inter({
  subsets: ['latin'],
});

const exo = Exo({
  weight: '900',
  subsets: ['latin'],
});

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import './globals.css';
import AuthButton from '@/components/AuthButton';
import { Input } from '@/components/ui/input';
import { createClient } from '@/utils/supabase/server';

import { CiCoffeeCup } from 'react-icons/ci';

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
        <nav className="w-full text-md gap-4 items-center  flex py-4 px-8 fixed top-0 bg-white z-50 text-md ">
          <Link
            href="/"
            className={`flex items-center gap-1 flex-1 text-4xl ${exo.className} `}
          >
            <h1 className="inline-flex border-b-4 border-black">MOCK.</h1>
          </Link>

          <Input
            placeholder="Search..."
            className="w-1/5"
          />

          <Link
            href="/explore"
            className="hover:underline cursor-pointer decoration-2 underline-offset-[6px]"
          >
            Explore
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="hover:underline decoration-2 outline-0 underline-offset-[6px]">More</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="cursor-pointer flex justify-between gap-2">
                <p>Buy me a coffee!</p>
                <CiCoffeeCup className="w-5 h-5" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {isSupabaseConnected && <AuthButton />}
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
