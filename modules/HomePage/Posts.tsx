'use client';

import Image from 'next/image';
import Link from 'next/link';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import PostActions from '@/modules/HomePage/PostActions';
import { usePostStore } from '@/store/postStore';

export default function Posts() {
  const postsFromStore = usePostStore(state => state.posts);
  const isPostsLoading = usePostStore(state => state.isPostsLoading);
  if (isPostsLoading) {
    return (
      <>
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-6 mb-2 border-l-4 border-black w-full shadow-md rounded-sm"
          >
            <div className="flex gap-4 w-full">
              <Skeleton className="w-16 h-16 rounded-full" />
              <div className="w-3/4 flex-1 mt-1">
                <div className="flex justify-between gap-2 items-center mb-4">
                  <div className="w-full flex gap-2 items-center">
                    <Skeleton className="h-4 w-1/5" />
                    <Skeleton className="h-4 w-1/5" />
                  </div>

                  <Skeleton className="h-4 w-1/5" />
                </div>
                <Skeleton className="h-4 w-full mt-2" />
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Skeleton className="h-4 w-20 rounded-2xl" />
              <Skeleton className="h-4 w-20 rounded-2xl" />
              <Skeleton className="h-4 w-20 rounded-2xl" />
            </div>
          </div>
        ))}
      </>
    );
  }
  return (
    <>
      {postsFromStore.map(post => (
        <>
          <Link
            href={`/post/${post.id}`}
            key={post.id}
            className="flex flex-col items-start p-4  mb-2 border-l-4 border-black w-full  shadow-md hover:shadow-lg cursor-pointer  rounded-sm"
          >
            <div className="flex gap-4 w-full">
              <Link href={`/profile/${post.userName}`}>
                <Image
                  src={post.avatarUrl}
                  alt="avatar"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </Link>
              <div className="w-3/4 flex-1 mt-1">
                <div className="flex justify-end gap-2 items-center ">
                  <Link
                    href={`/profile/${post.userName}`}
                    className=" hover:underline cursor-pointer text-lg"
                  >
                    {post.name}
                  </Link>
                  <div className="text-blue-500">@{post.userName}</div>
                  <div className="text-gray-500 text-sm flex-1 text-right"> {dayjs(post.created_at).fromNow()} </div>
                </div>
                <div className="font-light">{post.content}</div>
              </div>
            </div>
            <div className={cn(`flex justify-end items-center w-full ${post.tags.length > 0 ? 'mt-4' : 'mt-0'}`)}>
              {post.tags && (
                <div className="flex gap-2">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-blue-50 border-[1px] border-transparent hover:border-blue-500 cursor-pointer text-blue-500 px-2 py-1 text-sm rounded-2xl"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <PostActions
                comment
                like
                retweet
              />
            </div>
          </Link>
        </>
      ))}
    </>
  );
}
