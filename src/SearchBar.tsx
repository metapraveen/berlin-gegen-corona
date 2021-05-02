import React from "react";

type Props = {
  onSearch: (search: string) => void;
};
const SearchBar: React.FC<Props> = ({ onSearch }) => {
  return (
    <div className="flex items-center w-full max-w-xl">
      <span className="absolute pl-1 pt-1 flex items-center">
        <svg
          className="h-7 w-7 left-y-0 inset-0 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>
      <input
        onChange={(changeEvent) =>
          onSearch(changeEvent.currentTarget.value.trim().toLocaleLowerCase())
        }
        placeholder="search using address, email or name of doctor/clinic"
        className="focus:bg-white pl-8 shadow-sm w-full border border-gray-400 h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
      />
    </div>
  );
};

export default SearchBar;
