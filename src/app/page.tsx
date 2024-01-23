import Image from "next/image";
import Link from "next/link";
import Browse from "../componet/browse_designs/Browse"
// 

export default function Home() {

  const backgroundImageUrl =
    'https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705724835/utilities/background_illustration_lcdskr.svg';

  return (
    <main >
     
       <div
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '650px', // Set the desired height
        position: 'relative', // Position relative to allow absolute positioning of child elements
      }}
      className="flex flex-col items-center justify-center w-full "
    >
      <Image
          height={650}
          width={650}
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705952595/utilities/hero_H1_and_vector_sy4fzl.svg"
          alt="rice"
          className="rounded-lg"
        />
        <h1 className="text-[24px] w-[600px] pt-4 text-center">Skip the stressful part. Get real and practical web design inspiration from the internet’s best designed and highest-converting websites.</h1>
        <div className="flex items-center justify-center gap-4 pt-8">
          <Link href="/" className="bg-black p-4 px-8 text-white rounded-lg border border-[#BBBBBB] font-bold text-[16px]">Get started now</Link>
          <Link href="/" className="bg-white p-4 px-8 text-black rounded-lg border border-[#BBBBBB] font-bold">Learn More</Link>
         
        </div>
        
        </div>
        <Browse />
    </main>
  );
}
