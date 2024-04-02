import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
import { Listing } from "@/public/utils/ApiTypes";
import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";
import Map from "../components/Map";
import { fakeExploreData } from "@/public/utils/fakeApiData";
type Props = {
  // exploreData: Listing[];
};
const Search = () => {
  const exploreData = fakeExploreData;
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;

  const formattedStartDate =
    startDate && format(new Date(startDate as string), "dd MMMM yy");
  const formattedEndDate =
    endDate && format(new Date(endDate as string), "dd MMMM yy");

  const dateRange = `${formattedStartDate} - ${formattedEndDate}`;

  const numberOfDays = Math.round(
    (new Date(endDate as string).valueOf() -
      new Date(startDate as string).valueOf()) /
      (1000 * 60 * 60 * 24)
  );

  return (
    <div>
      <Header
        placeholder={`${location} | ${dateRange} | ${numberOfGuests} guests`}
      />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {dateRange} - for {numberOfGuests} of guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {exploreData?.map((item) => {
              const price =
                item.pricingQuote.structuredStayDisplayPrice.primaryLine.price?.replace(
                  "$",
                  ""
                ) ??
                item.pricingQuote.structuredStayDisplayPrice.primaryLine.originalPrice?.replace(
                  "$",
                  ""
                );

              const discountedPrice =
                item.pricingQuote.structuredStayDisplayPrice.primaryLine.discountedPrice?.replace(
                  "$",
                  ""
                );

              const total = Math.round(
                Number(discountedPrice || price) *
                  (numberOfDays === 0 ? 1 : numberOfDays)
              );
              return (
                <InfoCard
                  key={item.id}
                  image={item.listing.contextualPictures[0].picture}
                  location={item.listing.city}
                  title={item.listing.title}
                  description={item.listing.name}
                  star={item.listing.avgRatingLocalized}
                  price={price}
                  discountedPrice={discountedPrice}
                  total={total}
                  qualifier={
                    item.pricingQuote.structuredStayDisplayPrice.primaryLine
                      .qualifier
                  }
                />
              );
            })}
          </div>
        </section>

        {/* <section className="hidden xl:flex-inline xl:min-w-[600px]">
          <Map searchResults={exploreData} />
        </section> */}
      </main>

      <Footer />
    </div>
  );
};

export default Search;

// export async function getServerSideProps() {
//   const exploreResponse = await fetch(
//     `${process.env.NEXT_PUBLIC_RAPID_API_BASE_URL}v1/searchPropertyByLocation?location=Southern%20California`,
//     {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY as string,
//         "X-RapidAPI-Host": "airbnb45.p.rapidapi.com",
//       },
//     }
//   );
//   const dataExploreResponse = await exploreResponse.json();
//   const exploreData = dataExploreResponse?.data?.list || [];
//   return {
//     props: {
//       exploreData,
//     },
//   };
// }
