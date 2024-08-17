'use client';

import { useState } from 'react';

import { TbBrush } from 'react-icons/tb';

import { Button } from '@/components/ui/button';
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { createPost } from './actions';

export default function CreatePostDrawer() {
  const [tagsList, setTagsList] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');
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
            action={e => createPost(e, tagsList)}
            className="px-4"
          >
            <Input
              name="tags"
              className="my-4 max-w-sm"
              onChange={e => setCurrentTag(e.target.value)}
              placeholder="Add tags..."
              value={currentTag}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  setTagsList([...tagsList, currentTag]);
                  setCurrentTag('');
                }
              }}
            />
            <div className="flex flex-row flex-wrap gap-2 mb-4">
              {tagsList.map(tag => (
                <span
                  key={tag}
                  className="bg-blue-50 text-blue-500 px-2 py-1 text-sm rounded-2xl"
                >
                  {tag}
                </span>
              ))}
            </div>
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
