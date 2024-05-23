import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  id: number;
  name: string;
  date?: string;
  imageUrl: string;
  logoUrl?: string;
}

function Card({ id, name, date, imageUrl, logoUrl }: CardProps) {
  const handleBookmarkButtonClick = () => {
    // Logic for handling bookmark button click
  };

  const handleMoreButtonClick = () => {
    // Logic for handling more button click
  };

  return (
    <div>
      <Link href={`/detail/${id}`} passHref className="bg-white rounded-md ">
        <div className=" bg-[#F0F0F0] p-4 rounded-md ">
          <img src={imageUrl} alt={name} className="mb-2 rounded-md" />
        </div>
      </Link>
      <div className="flex py-8 justify-between items-center">
        <div className="flex items-center mt-2 gap-2">
          <div>
            <p className="text-[12px] font-bold">{name}</p>
            {date && <p className="text-gray-700 mt-1 text-[11px] ">{date}</p>}
          </div>
        </div>
        <div className="flex  gap-2">
          {/* save to bookmark button */}
          <button className="flex text-[12px] font-medium items-center gap-2 border border-[#6E6E6E] p-2 rounded-lg">
            <img
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1707447029/utilities/Vector_10_d4gkez.svg"
              height={50}
              width={20}
            />
            Make a Figma moodboard
          </button>
        </div>
      </div>
    </div>
  );
}

const demoData: CardProps[] = [
  {
    id: 1,
    name: "This Bookmark Name",
    date: "11/01/2024",
    imageUrl:
      "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706040356/utilities/image_1_wzvqcv.svg",
    logoUrl: "https://example.com/logo1.png",
  },
  {
    id: 2,
    name: "This Bookmark Name",
    date: "11/01/2024",
    imageUrl:
      "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706040356/utilities/image_1_wzvqcv.svg",
    logoUrl: "https://example.com/logo2.png",
  },
  {
    id: 3,
    name: "This Bookmark Name",
    date: "11/01/2024",
    imageUrl:
      "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706040356/utilities/image_1_wzvqcv.svg",
    logoUrl: "https://example.com/logo3.png",
  },
  {
    id: 4,
    name: "This Bookmark Name",
    date: "11/01/2024",
    imageUrl:
      "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706040356/utilities/image_1_wzvqcv.svg",
    logoUrl: "https://example.com/logo4.png",
  },
  {
    id: 5,
    name: "This Bookmark Name",
    date: "11/01/2024",
    imageUrl:
      "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1706040356/utilities/image_1_wzvqcv.svg",
    logoUrl: "https://example.com/logo5.png",
  },
];

function CardList() {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-3 gap-4 mt-8 mx-6">
      {demoData.map((data) => (
        <Card
          key={data.id}
          id={data.id}
          name={data.name}
          date={data.date}
          imageUrl={data.imageUrl}
          logoUrl={data.logoUrl}
        />
      ))}
    </div>
  );
}

export default CardList;
