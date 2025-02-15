import Head from "next/head";
import FeatureCard from "@/components/landing/feature-card";
import { Feature } from "@/types/feature";
import { MoveRight } from "lucide-react";

const FEATURES: Feature[] = [
  {
    title: "Vast Library",
    description: "Access thousands of movies across all genres",
  },
  {
    title: "Smart Search",
    description: "Find exactly what you're looking for instantly",
  },
  {
    title: "Detailed Info",
    description: "Get comprehensive details about any film",
  },
];

export default function Landing() {
  return (
    <>
      <Head>
        <title>CineCompass - Find Your Favorite Movies</title>
        <meta name="description" content="A simple movie searching app" />
      </Head>
      <main className="min-h-screen flex flex-col items-center space-y-12 py-14">
        <div className="space-y-5 text-center py-5">
          <h1 className="text-6xl font-semibold">CineCompass</h1>
          <p className="text-2xl">
            Discover your next favorite film in a flash.
          </p>
        </div>
        <div className="w-full grid grid-rows-3 gap-5 place-items-center">
          {FEATURES.map(({ title, description }, index) => (
            <FeatureCard key={index} title={title} description={description} />
          ))}
        </div>
        <button className="bg-zinc-800 flex py-4 px-10 rounded-lg items-center">
          Start Exploring
          <MoveRight className="ml-3" />
        </button>
        <p>Join thousands of movie enthusiasts finding their perfect watch!</p>
      </main>
    </>
  );
}
