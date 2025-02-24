import React from "react";
import search from "../../../../assets/img/search.png";
import "./index.css";

const Search = () => {
  return (
    <div class="how-do-search">
      <a href="" class="how-do-search-link">
        <img src={search} alt="" class="how-do-search__img" />
      </a>
      <input
        type="text"
        placeholder="Find Questions"
        class="how-do-search__text"
      />
    </div>
  );
};

export default Search;
