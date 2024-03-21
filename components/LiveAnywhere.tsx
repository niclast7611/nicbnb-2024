import React from "react";
import MediumCard from "./MediumCard";
import { CategoryData } from "@/public/utils/ApiTypes";

type Props = {
  categoryData: CategoryData[];
};

const LiveAnywhere = ({ categoryData }: Props) => {
  return (
    <section>
      <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
      <div className="flex space-x-3 overflow-x-scroll scrollbar-hide p-3 -ml-3">
        {categoryData?.map((category) => (
          <MediumCard
            key={category.key}
            image={category.image}
            title={category.title}
          />
        ))}
      </div>
    </section>
  );
};

export default LiveAnywhere;
