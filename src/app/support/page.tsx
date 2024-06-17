import ConatactLayout from "@/componet/browse_designs/ContactLayout";
import { createClient } from "@/libs/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <ConatactLayout user={user} />
    </>
  );
}
