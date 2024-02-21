import React, { useState } from "react";

const SearchForm = ({ searchUser }) => {
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    searchUser(e.target.value);
  };

  return (
    <div className="flex justify-center mt-6 ">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search"
        className="border border-blue-600 rounded-md w-[300px] p-3 "
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchForm;
