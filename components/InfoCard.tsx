import Image from "next/image";
import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";

type Props = {
  image: string;
  location: string;
  title: string;
  description: string;
  star: string;
  price?: string;
  discountedPrice?: string;
  total?: number | string;
  qualifier?: string;
};

const InfoCard = ({
  image,
  location,
  title,
  description,
  star,
  discountedPrice,
  price,
  total,
  qualifier,
}: Props) => {
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <FaRegHeart className="h-7 w-7 cursor-pointer" />
        </div>

        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <FaStar className="text-red-400 h-5 w-5" />{" "}
            <span className="pl-1">{star}</span>
          </p>

          <div>
            <div className="text-lg lg:text-2xl font-semibold pb-2 flex space-x-2">
              ${discountedPrice && <p>{discountedPrice}</p>}
              <p className={discountedPrice && "line-through text-gray-500"}>
                {price}
              </p>
              <p>/ {qualifier}</p>
            </div>
            <p className="text-right font-extralight">${total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
