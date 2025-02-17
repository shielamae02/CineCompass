import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/shared/navbar";
import { PagesTopLoader } from "nextjs-toploader/pages";
import Head from "next/head";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=content-width initial-scale=1" />
        <meta name="description" content="A simple movie searching app." />
        <meta charSet="UTF-8" />
      </Head>
      <div
        className={`${poppins.variable} h-screen w-screen px-4  flex items-center justify-center overflow-auto`}
      >
        <PagesTopLoader color="#A35C7A" />
        <div className="max-w-4xl h-full w-full">
          <header>
            <Navbar />
          </header>
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </>
  );
}
