import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import {TbLogin2, TbLogout2} from "react-icons/tb";
import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import GithubSignIn from "@/components/GithubSignIn";


export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/");
  };

  return user ? (
    <div className="flex items-center gap-4">
      <Link href={`/profile/${user.user_metadata.user_name}`}>
        Profile
      </Link>

      <form action={signOut}>
          <Button variant="secondary" className="font-extrabold">
              <TbLogout2 className="w-5 h-5 font-extrabold"/>
          </Button>
      </form>
    </div>
  ) : (
      <Dialog>
          <DialogTrigger asChild>
              <Button variant="secondary" className="font-extrabold">
                  <TbLogin2 className="w-5 h-5 font-extrabold"/>
              </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
              <DialogHeader>
                  <DialogTitle className="text-xl">Sign In</DialogTitle>
                  <DialogDescription className="text-md ">
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
