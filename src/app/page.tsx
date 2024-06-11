import HomeLayout from "@/componet/browse_designs/Layout";
import { createClient } from "@/libs/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <HomeLayout user={user} />
    </>
  );
}
