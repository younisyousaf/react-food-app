import React, { useEffect, useState } from "react";
import { API_KEY } from "../utils/envVar.env";
import { URL } from "../utils/envVar.env";
import { API_ID } from "../utils/envVar.env";
import { type } from "../utils/envVar.env";

const Search = ({ foodData, setFoodData }) => {
  //   useEffect: allows us to sync component with external system
  const [query, setQuery] = useState("");
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission and page refresh
    if (query === "") {
      alert("You must Write Some Recipe Name");
    }
    try {
      const response = await fetch(
        // Template Literal/String Interpolation
        `${URL}?q=${query}&type=${type}&app_id=${API_ID}&app_key=${API_KEY}`
      );
      const resData = await response.json();
      console.log(resData.hits);
      setFoodData(resData.hits);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //   useEffect(() => {
  //     // Move the API call inside the submit handler to avoid unnecessary calls on every query change
  //     if (query) {
  //       handleFormSubmit();
  //     }
  //   }, [query]);
  return (
    <div>
      {/* Hooks:
            Regular Functions, and called from react components
        */}
      <form onSubmit={handleFormSubmit} className="d-flex w-25 mt-2 m-auto">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="form-control me-2"
          type="search"
          placeholder="Search Food Recipe"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
