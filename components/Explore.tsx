import React from "react";
import SmallCard from "./SmallCard";

type Props = {};

const Explore = (props: Props) => {
  const locationsArray = [
    {
      name: "Central Park",
      location: "New York City, NY",
      image: "https://example.com/central-park.jpg",
      distance: "15 minute walk",
    },
    {
      name: "Eiffel Tower",
      location: "Paris, France",
      image: "https://example.com/eiffel-tower.jpg",
      distance: "30 minute metro ride",
    },
    {
      name: "Great Barrier Reef",
      location: "Queensland, Australia",
      image: "https://example.com/great-barrier-reef.jpg",
      distance: "2 hour flight from Sydney",
    },
    {
      name: "Colosseum",
      location: "Rome, Italy",
      image: "https://example.com/colosseum.jpg",
      distance: "20 minute bus ride",
    },
    {
      name: "Mount Fuji",
      location: "Honshu Island, Japan",
      image: "https://example.com/mount-fuji.jpg",
      distance: "1 hour train ride",
    },
    {
      name: "Statue of Liberty",
      location: "New York City, NY",
      image: "https://example.com/statue-of-liberty.jpg",
      distance: "25 minute ferry ride",
    },
    {
      name: "Grand Canyon",
      location: "Arizona, USA",
      image: "https://example.com/grand-canyon.jpg",
      distance: "4 hour drive from Phoenix",
    },
    {
      name: "Pyramids of Giza",
      location: "Giza, Egypt",
      image: "https://example.com/pyramids-of-giza.jpg",
      distance: "1 hour drive from Cairo",
    },
  ];

  return (
    <section className="pt-6">
      <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {locationsArray?.map((location, index) => (
          <SmallCard
            name={location.name}
            key={index}
            location={location.location}
            img={location.image}
            distance={location.distance}
          />
        ))}
      </div>
    </section>
  );
};

export default Explore;
