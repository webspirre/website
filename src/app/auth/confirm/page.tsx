import ConfirmLayout from "@/componet/browse_designs/ConfirmLayout";
import { createClient } from "@/libs/supabase/server";
import { redirect } from "next/navigation";

async function page() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  //   if (!user) {
  //     return redirect("/auth/login");
  //   }

  return (
    <div>
      <div className="mt-20">
        <ConfirmLayout user={user} />
      </div>
    </div>
  );
}

export default page;
