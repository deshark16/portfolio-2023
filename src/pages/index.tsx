import Head from "next/head";
import { Oswald } from "next/font/google";
import { GlobalStyle } from "../styles/global.styled";
import { Suspense } from "react";
import MainPage from "pages/mainPage";

const oswaldFont = Oswald({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio 2023 - Abdimuratov Abdulla</title>
        <meta name="description" content="Portfolio - Abdimuratov Abdulla" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <div className={oswaldFont.className}>
        {/* <LoadingScreen /> */}
        <Suspense fallback={<p>Loading...</p>}>
          <MainPage />
        </Suspense>
      </div>
    </>
  );
}
