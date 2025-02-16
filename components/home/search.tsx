"use client";
import { SearchIcon } from "lucide-react";

interface SearchProps {
  onSearch: () => void;
  query: string;
  setQuery: (query: string) => void;
}

const Search = ({ onSearch, query, setQuery }: SearchProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch();
    }
  };

  return (
    <div className="flex space-x-2 w-full">
      <input
        type="text"
        className="bg-white rounded-lg px-3 w-full text-muted-foreground"
        placeholder="Search movies by name..."
        value={query}
        onKeyDown={handleKeyDown}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="bg-primary py-4 px-8 rounded-lg flex items-center"
        onClick={onSearch}
      >
        <SearchIcon className="mr-2 size-5" />
        Search
      </button>
    </div>
  );
};

export { Search };
