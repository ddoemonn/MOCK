'use client';

import Image from 'next/image';
import Link from 'next/link';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import { cn } from '@/lib/utils';
import PostActions from '@/modules/HomePage/PostActions';
import { usePostStore } from '@/store/postStore';
import { useToggleCommentStore } from '@/store/toggleCommentStore';

export default function Posts() {
  const postsFromStore = usePostStore(state => state.posts);
  const setToggle = useToggleCommentStore(state => state.setToggle);
  const toggle = useToggleCommentStore(state => state.toggle);

  return (
    <>
      {postsFromStore.map(post => (
        <div
          onClick={() => setToggle({ postId: post.id, isToggle: true })}
          key={post.id}
          className={cn(
            'flex flex-col items-start w-[45%] mr-20 p-4 pl-4 mb-2 border-l-4  shadow-md hover:shadow-lg cursor-pointer  rounded-sm',
            `${toggle.postId === post.id ? 'border-blue-500' : 'border-black'}`
          )}
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
            <PostActions />
          </div>
        </div>
      ))}
    </>
  );
}
