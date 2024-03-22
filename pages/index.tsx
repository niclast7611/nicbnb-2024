import Banner from "@/components/Banner";
import Explore from "@/components/Explore";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LargeCard from "@/components/LargeCard";
import LiveAnywhere from "@/components/LiveAnywhere";
import { CategoryData, Listing } from "@/public/utils/ApiTypes";
import { GetServerSideProps } from "next";
import Head from "next/head";

type Props = {
  exploreData: Listing[];
  categoryData: CategoryData[];
};

export default function Home({ exploreData, categoryData }: Props) {
  return (
    <div>
      <Head>
        <title>NicBnB</title>
        <meta
          name="description"
          content="An Airbnb clone built with Next.js and Tailwind CSS"
        />
        {/* <link rel="stylesheet" href="" /> */}
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* <Explore exploreData={exploreData} />

        <LiveAnywhere categoryData={categoryData} /> */}

        <LargeCard
          image="https://miro.medium.com/v2/resize:fit:1358/0*NChTo-XqLOxLabIW"
          title="The Greatest Outdoors"
          description="Wishlist curated by Nicbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
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

//   const categoryResponse = await fetch(
//     `${process.env.NEXT_PUBLIC_RAPID_API_BASE_URL}v1/getCategory`,
//     {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY as string,
//         "X-RapidAPI-Host": "airbnb45.p.rapidapi.com",
//       },
//     }
//   );
//   const dataCategoryResponse = await categoryResponse.json();
//   const categoryData = dataCategoryResponse?.data || [];

//   return {
//     props: {
//       exploreData,
//       categoryData,
//     },
//   };
// };
