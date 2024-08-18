export default function Tags() {
  return (
    <div className="flex w-1/5 flex-col flex-1 items-center justify-center fixed p-6 pt-2 gap-2  border-r-[1px]  ml-8">
      <h1 className="text-xl">Popular Tags</h1>
      <span className="bg-blue-50 text-blue-500 px-2 py-1 text-sm rounded-2xl w-full">React</span>
      <span className="bg-blue-50 text-blue-500 px-2 py-1 text-sm rounded-2xl w-full">Next.js</span>
      <span className="bg-blue-50 text-blue-500 px-2 py-1 text-sm rounded-2xl w-full">TypeScript</span>
    </div>
  );
}
