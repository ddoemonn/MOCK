'use client';

import Image from 'next/image';
import Link from 'next/link';

import { PostgrestSingleResponse } from '@supabase/supabase-js';

interface PostsProps {
  posts: PostgrestSingleResponse<Post[]>;
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      {posts.data?.map(post => (
        <div
          key={post.id}
          className="flex items-start gap-4 w-2/4  p-2 mb-4 border-b-2"
        >
          <Link href={`/profile/${post.userName}`}>
            <Image
              src={post.avatarUrl}
              alt="avatar"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
          <div className="w-3/4 flex-1">
            <div className="flex gap-2 items-center ">
              <Link
                href={`/profile/${post.userName}`}
                className="font-bold hover:underline cursor-pointer text-lg"
              >
                {post.name}
              </Link>
              <div className="text-blue-500">@{post.userName}</div>
            </div>
            <div>{post.content}</div>
          </div>
        </div>
      ))}
    </>
  );
}
