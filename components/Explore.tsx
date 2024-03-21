// pages/explore.js or pages/explore/index.js
import React from "react";
import SmallCard from "../components/SmallCard"; // Adjust the import path as necessary
import { Listing } from "@/public/utils/ApiTypes";

interface ExploreProps {
  exploreData: Listing[];
}

const Explore = ({ exploreData }: ExploreProps) => {
  return (
    <section className="pt-6">
      <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {exploreData?.map((location) => (
          <SmallCard
            city={location.listing.localizedCityName}
            name={location.listing.title}
            key={location.id}
            img={location.listing.contextualPictures[0].picture}
          />
        ))}
      </div>
    </section>
  );
};

export default Explore;
