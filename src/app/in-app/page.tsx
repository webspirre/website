import InAppLayout from "@/componet/browse_designs/InAppLayout";
import { createClient } from "@/libs/supabase/server";

async function page() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <div>
      <div className="mt-20">
        <InAppLayout user={user} />
      </div>
    </div>
  );
}

export default page;
