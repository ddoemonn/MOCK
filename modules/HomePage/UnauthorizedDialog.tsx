import { TbBrush } from 'react-icons/tb';

import GithubSignIn from '@/components/GithubSignIn';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export default function UnauthorizedDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="font-extrabold rounded-full m-5 fixed bottom-0 right-0"
        >
          <TbBrush className="w-4 h-4 font-extrabold" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Sign In</DialogTitle>
          <DialogDescription className="text-md">
            Sign in with Github. Start using <strong className="text-black underline">MOCK.</strong> fastly!
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <GithubSignIn />
        </div>
      </DialogContent>
    </Dialog>
  );
}
