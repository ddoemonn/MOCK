'use client';

import { TbBrush } from 'react-icons/tb';

import { Button } from '@/components/ui/button';
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Textarea } from '@/components/ui/textarea';

import { createPost } from './actions';

export default function CreatePostDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="default"
          className="font-extrabold rounded-full m-5 fixed bottom-0 right-0"
        >
          <TbBrush className="w-4 h-4 font-extrabold" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div>
          <DrawerHeader>
            <DrawerTitle>Create a Post!</DrawerTitle>
          </DrawerHeader>

          <form
            action={createPost}
            className="px-4"
          >
            <Textarea
              name="content"
              placeholder="Type your message here."
              className="resize-none min-h-40"
              maxLength={500}
            />
            <div className="flex flex-row items-end justify-end p-4 pr-0">
              <DrawerClose asChild>
                <Button type="submit">Submit</Button>
              </DrawerClose>
            </div>
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
