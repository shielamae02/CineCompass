import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { MovieData } from "@/lib/movie-data";
import type { Metadata } from "next";
import { Navbar } from "@/components/shared/navbar";

export const metadata: Metadata = MovieData({
  title: "CineFinder",
  description: "Movie Searching App",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${poppins.variable} h-screen w-screen flex items-center justify-center overflow-auto`}
    >
      <div className="max-w-6xl h-full w-full">
        <header>
          <Navbar />
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}
