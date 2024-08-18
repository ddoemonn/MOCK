'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useTagStore } from '@/store/tagStore';

export default function Tags() {
  const tags = useTagStore(state => state.tags);

  const sortedTags = [...tags].sort((a, b) => b.count - a.count);

  return (
    <div className="fixed w-1/5 ml-10 pr-8 shadow-lg rounded-sm p-4 border-l-4 border-black">
      <Table>
        {tags.length > 0 && (
          <>
            <TableHeader>
              <h1 className="text-2xl my-3 font-semibold">Popular Tags</h1>
              <TableRow>
                <TableHead>Tag</TableHead>
                <TableHead className="text-right">Mentioned</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedTags.map(tag => (
                <TableRow
                  key={tag.id}
                  className="w-full mb-10 cursor-pointer"
                >
                  <TableCell className="font-semibold text-slate-700">{tag.tag}</TableCell>
                  <TableCell className="text-right">{tag.count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        )}
      </Table>
    </div>
  );
}
