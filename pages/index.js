import Head from "next/head";
import Hero from "../components/Hero";
export default function Home() {
  return (
    <>
      <Head>
        <title>Medblocks</title>
        <meta
          name="description"
          content="The stack for modern healthcare applications"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
    </>
  );
}
