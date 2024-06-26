import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
};

const MediumCard = ({ image, title }: Props) => {
  return (
    <div className=" cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-40 w-40">
        <Image src={image} alt={title} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;
