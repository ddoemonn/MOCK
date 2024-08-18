'use client';

import { useTagStore } from '@/store/tagStore';

export default function Tags() {
  const tags = useTagStore(state => state.tags);

  const sortedTags = [...tags].sort((a, b) => b.count - a.count);

  return (
    <div className="flex w-1/5 flex-col flex-1 items-center justify-center fixed p-6 pt-2 gap-2 border-r-[1px] ml-8">
      {tags.length > 0 && (
        <>
          <h1 className="text-xl">Popular Tags</h1>
          <div className="flex flex-col gap-2 w-full">
            {sortedTags.map(tag => (
              <span
                key={tag.id}
                className="bg-blue-50 text-blue-500 px-2 py-1 text-sm rounded-2xl"
              >
                {tag.tag}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
