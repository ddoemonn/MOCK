'use client';

import { useRef } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import dayjs from 'dayjs';
import { IoIosSend } from 'react-icons/io';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import PostActions from '@/modules/HomePage/PostActions';
import { useCommentStore } from '@/store/commentStore';
import { useToggleCommentStore } from '@/store/toggleCommentStore';

import { createComment } from './actions';

export default function CommentSection() {
  const toggle = useToggleCommentStore(state => state.toggle);
  const comments = useCommentStore(state => state.comments);
  const setPostId = useCommentStore(state => state.setPostId);

  const isLoading = useCommentStore(state => state.isLoading);

  const formRef = useRef<HTMLFormElement>(null);
  return (
    <>
      {toggle.isToggle && !isLoading && (
        <ScrollArea className="relative max-h-[50vh] flex flex-col items-start w-[45%]  mr-20 px-4 mb-2 border-l-4 border-black  shadow-md hover:shadow-lg cursor-pointer  rounded-sm overflow-y-scroll">
          <form
            ref={formRef}
            className="flex gap-1 p-2 w-full"
            action={async e => {
              if (toggle.postId != null) {
                await createComment(e, toggle.postId);
                setPostId(toggle.postId);
                if (formRef.current) {
                  formRef.current.reset();
                }
              }
            }}
          >
            <Input
              placeholder="Add a comment..."
              name="comment"
            />
            <Button
              variant="default"
              className="p-3"
            >
              <IoIosSend className="cursor-pointer w-5 h-5" />
            </Button>
          </form>
          {comments.map(comment => (
            <div
              key={comment.id}
              className="flex flex-col items-start w-full mr-20 p-4 pl-4 mb-2 cursor-pointer  rounded-sm"
            >
              <div className="flex gap-4 w-full">
                <Link href={`/profile/${comment.userName}`}>
                  <Image
                    src={comment.avatarUrl}
                    alt="avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </Link>
                <div className="w-3/4 flex-1 mt-1">
                  <div className="flex justify-end gap-2 items-center ">
                    <Link
                      href={`/profile/${comment.userName}`}
                      className=" hover:underline cursor-pointer text-md"
                    >
                      {comment.name}
                    </Link>
                    <div className="text-blue-500 text-sm">@{comment.userName}</div>
                    <div className="text-gray-500 text-xs flex-1 text-right"> {dayjs(comment.created_at).fromNow()} </div>
                  </div>
                  <div className="font-light">{comment.comment}</div>
                </div>
              </div>

              <PostActions
                retweet
                like
              />
            </div>
          ))}
        </ScrollArea>
      )}
    </>
  );
}
