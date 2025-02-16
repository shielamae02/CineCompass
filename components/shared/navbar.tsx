import { Moon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="py-6 flex justify-between" aria-label="Cine Finder">
      <h1 className="text-2xl font-semibold">CineCompass</h1>
      <button className="hover:bg-zinc-900/100 hover:border-zinc-700/50 size-10 place-items-center rounded-lg">
        <Moon className="size-5" />
      </button>
    </nav>
  );
};

export { Navbar };
