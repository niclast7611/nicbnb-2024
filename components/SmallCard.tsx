import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  distance: string;
  location: string;
  img: string;
};

const SmallCard = ({ name, distance, location, img }: Props) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image
          src="https://miro.medium.com/v2/resize:fit:1358/0*NChTo-XqLOxLabIW"
          alt="Location"
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <div>
        <h2>{name}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
