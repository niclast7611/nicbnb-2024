"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file for date picker
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import { HiUsers } from "react-icons/hi";
import { useRouter } from "next/router";

type Props = {
  placeholder?: string;
};

const Header = ({ placeholder }: Props) => {
  const router = useRouter();

  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState<number | string>(1);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };

  const resetInput = () => {
    setSearchInput("");
    setNumberOfGuests(1);
    setStartDate(new Date());
    setEndDate(new Date());
  };

  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests: numberOfGuests,
      },
    });
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div
        className="relative flex items-center h-10 cursor-pointer my-auto"
        onClick={() => router.push("/")}
      >
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
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          type="text"
          className="flex-grow pl-5 bg-transparent outline-none placeholder-gray-400"
          placeholder={placeholder || "Start your search"}
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <HiUsers className="h-5 w-5" />
            <input
              type="number"
              value={numberOfGuests}
              className="w-12 pl-2 text-lg outline-none text-red-400"
              onChange={(e) => setNumberOfGuests(e.target.value)}
              min={1}
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button className="flex-grow text-gray-400" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
