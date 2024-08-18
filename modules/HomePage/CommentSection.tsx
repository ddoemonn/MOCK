'use client';

import { IoIosSend } from 'react-icons/io';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToggleCommentStore } from '@/store/toggleCommentStore';

import { createComment } from './actions';

export default function CommentSection() {
  const toggle = useToggleCommentStore(state => state.toggle);
  return (
    <>
      {toggle.isToggle && (
        <div className=" min-h-[70vh] overflow-scroll fixed flex flex-col  w-1/4 ml-10  right-10 top-0 mt-24">
          <form
            className="flex gap-1 p-2"
            action={async e => {
              if (toggle.postId != null) {
                await createComment(e, toggle.postId);
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
        </div>
      )}
    </>
  );
}
