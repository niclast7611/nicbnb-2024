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
      <h1>Welcome to NicBnB</h1>
    </div>
  );
}
