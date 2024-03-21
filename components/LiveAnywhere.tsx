import React from "react";
import MediumCard from "./MediumCard";

type Props = {};

const LiveAnywhere = (props: Props) => {
  const data = [
    {
      title: "Outdoor getaways",
      image: "https://miro.medium.com/v2/resize:fit:1358/0*NChTo-XqLOxLabIW",
    },
    {
      title: "Unique stays",
      image: "https://miro.medium.com/v2/resize:fit:1358/0*NChTo-XqLOxLabIW",
    },
    {
      title: "Entire homes",
      image: "https://miro.medium.com/v2/resize:fit:1358/0*NChTo-XqLOxLabIW",
    },
    {
      title: "Pets allowed",
      image: "https://miro.medium.com/v2/resize:fit:1358/0*NChTo-XqLOxLabIW",
    },
    {
      title: "Pets allowed",
      image: "https://miro.medium.com/v2/resize:fit:1358/0*NChTo-XqLOxLabIW",
    },
    {
      title: "Pets allowed",
      image: "https://miro.medium.com/v2/resize:fit:1358/0*NChTo-XqLOxLabIW",
    },
  ];
  return (
    <section>
      <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
      <div className="flex space-x-3 overflow-x-scroll scrollbar-hide p-3 -ml-3">
        {data.map((item, index) => (
          <MediumCard key={index} image={item.image} title={item.title} />
        ))}
      </div>
    </section>
  );
};

export default LiveAnywhere;
