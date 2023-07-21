import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Next Home Page</title>
        <meta
          name="home page"
          description="this website is created by nextJs"
        />
      </Head>
      <h1>This is index</h1>{" "}
    </div>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};