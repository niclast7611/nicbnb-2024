import Banner from "@/components/Banner";
import Explore from "@/components/Explore";
import Header from "@/components/Header";
import LiveAnywhere from "@/components/LiveAnywhere";
import Head from "next/head";

export default function Home() {
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
        <Explore />

        <LiveAnywhere />
      </main>
    </div>
  );
}
