import { HeartIcon } from 'lucide-react';
import { BiComment } from 'react-icons/bi';
import { RxLoop } from 'react-icons/rx';

import { Button } from '@/components/ui/button';

export default function PostActions() {
  return (
    <div className="w-full flex items-center justify-end space-x-2">
      <Button variant="ghost">
        <BiComment className="w-3  h-3 font-bold" />
      </Button>
      <Button variant="ghost">
        <RxLoop className="w-3 h-3 font-extralight " />
      </Button>
      <Button variant="ghost">
        <HeartIcon className="w-3 h-3 font-extrabold" />
      </Button>
    </div>
  );
}
