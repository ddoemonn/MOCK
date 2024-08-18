import { HeartIcon } from 'lucide-react';
import { BiComment } from 'react-icons/bi';
import { RxLoop } from 'react-icons/rx';

import { Button } from '@/components/ui/button';

export default function PostActions() {
  return (
    <div className="w-full flex items-center justify-end space-x-2">
      <Button
        variant="ghost"
        className="hover:bg-transparent"
      >
        <BiComment className="w-3  h-3 font-bold hover:text-blue-600" />
      </Button>
      <Button
        variant="ghost"
        className="hover:bg-transparent"
      >
        <RxLoop className="w-3 h-3 font-extralight hover:text-indigo-700" />
      </Button>
      <Button
        variant="ghost"
        className="hover:bg-transparent"
      >
        <HeartIcon className="w-3 h-3 font-extrabold hover:text-red-500" />
      </Button>
    </div>
  );
}
