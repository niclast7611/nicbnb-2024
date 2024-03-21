import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  img: string;
  city: string;
};

const SmallCard = ({ name, city, img }: Props) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image src={img} alt={name} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2>{city}</h2>
        <h3 className="text-gray-500">{name}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
