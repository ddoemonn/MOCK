import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import {TbEdit, TbLogout2} from "react-icons/tb";
import {Button} from "@/components/ui/button";

export default async function ProfilePage() {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/");
    }

    return (
        <div
            className="flex-1 flex items-start m-20 mt-10 mx-10">
            <div className="relative border-r-2 p-10">
                <div className="relative">
                    <Image src={user.user_metadata.avatar_url} alt="avatar" width={150} height={150} className="rounded-full"/>
                    <Button variant="default" className="font-extrabold m-0 rounded-full absolute bottom-0 right-0">
                        <TbEdit className="w-4 h-4 font-extrabold"/>
                    </Button>
                </div>
            </div>

        </div>
    );
}
