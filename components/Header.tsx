import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        {/* Need to come back and fill with new logo */}
        <Image
          src="https://miro.medium.com/v2/resize:fit:1358/0*NChTo-XqLOxLabIW"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="NicBnB"
        />
      </div>

      {/* Middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          className="flex-grow pl-5 bg-transparent outline-none placeholder-gray-400"
          placeholder="Start your search"
        />
        <FaSearch className="hidden md:inline-flex h-8 w-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <AiOutlineGlobal className="h-6 w-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <IoIosMenu className="h-6 w-6" />
          <FaCircleUser className="h-6 w-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
