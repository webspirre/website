import { createClient } from "../../libs/supbasedesign/client";

// const [designs, setDesigns] = useState([]);
// const [title, setTitle] = useState('');
// const [content, setContent] = useState('');

// useEffect(() => {
//   fetchDesigns();
// }, []);

export const fetchDesigns = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.from("website").select("*");
  if (error) console.error("Error fetching designs:", error);
  else return data;
};

// const handleCreateDesign = async () => {
//   const user = supabase.auth.user();
//   const { data, error } = await supabase.from('designs').insert([
//     {
//       user_id: user.id,
//       title,
//       content,
//     },
//   ]);

//   if (error) console.error('Error creating design:', error);
//   else fetchDesigns();
// };
