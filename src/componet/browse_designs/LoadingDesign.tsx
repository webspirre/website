import React from "react";
import { Carter_One } from "next/font/google";

const carterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function LoadingDesign() {
      const cards = Array.from({ length: 10 });

 return (
   <div className="flex justify-center w-full items-center max-w-[1000p]">
     <div className=" p-4 pt-8 sm:mx-2 mb-[0px] sm:max-w-[1320px] mx-auto w-full ">

       <div className="mt-[px]">
         

         <div className="mt-[14px]">
           <div className="grid sm:grid-cols-4 grid-cols-1 gap-4 animate-pulse">
             {cards.map((_, index) => (
               <div key={index} className="w-full">
                 {/* Card */}
                 <div className="h-[507px] w-full bg-[#F5F5F5] p-2 rounded-[24px]">
                   <div className="h-full w-full bg-[#F0F0F0] rounded-[24px] pulse-light-dark"></div>
                 </div>
                 <div className="mt-[20px] w-full mb-[30px] flex justify-between">
                   <div className="flex items-center gap-2">
                     <div className="bg-[#F0F0F0] rounded-[10px] h-[37px] w-[37px]"></div>
                     <div className="bg-[#] rounded-[10px] h-[37px] w-[200px] flex flex-col gap-1">
                       <div className="bg-[#F0F0F0] rounded-[4px] h-full w-[80px]"></div>
                       <div className="bg-[#F0F0F0] rounded-[4px] h-full w-[167px]"></div>
                     </div>
                   </div>
                   <div className="flex gap-1">
                     {/* <div className="bg-[#F0F0F0] rounded-[10px] h-[37px] w-[37px]"></div> */}
                     <div className="bg-[#F0F0F0] rounded-[10px] h-[37px] w-[37px]"></div>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>
     </div>
   </div>
 );}

export default LoadingDesign;
