import { HeartIcon } from 'lucide-react';
import { BiComment } from 'react-icons/bi';
import { RxLoop } from 'react-icons/rx';

import { Button } from '@/components/ui/button';

interface PostActionsProps {
  comment?: boolean;
  retweet?: boolean;
  like?: boolean;
}

export default function PostActions({ comment, retweet, like }: PostActionsProps) {
  return (
    <div className="w-full flex items-center justify-end space-x-2">
      {comment && (
        <Button variant="ghost">
          <BiComment className="w-3  h-3 font-bold" />
        </Button>
      )}
      {retweet && (
        <Button variant="ghost">
          <RxLoop className="w-3 h-3 font-extralight " />
        </Button>
      )}
      {like && (
        <Button variant="ghost">
          <HeartIcon className="w-3 h-3 font-extrabold" />
        </Button>
      )}
    </div>
  );
}
