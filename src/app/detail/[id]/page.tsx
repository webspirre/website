import DetailLayout from "@/componet/browse_designs/DetailLayout";
import { createClient } from "@/libs/supabase/server";

async function Page({ params }: { params: { id: string } }) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <DetailLayout user={user} id={params.id} />
    </>
  );
}

export default Page;
