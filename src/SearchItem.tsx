import React from "react";

type PropsType = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchItem = ({ search, setSearch }: PropsType) => {
  return (
    <form action="" className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        role="searchbox"
        placeholder="Search Items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
