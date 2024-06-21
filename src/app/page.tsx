import HomeLayout from "@/componet/browse_designs/Layout";
import { createClient } from "@/libs/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    return redirect("/in-app");
  }

  return (
    <>
      <HomeLayout user={user} />
    </>
  );
}
