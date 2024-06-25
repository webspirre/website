import React from 'react'

function CardLoader() {
  return (
    <div>
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
  );
}

export default CardLoader
