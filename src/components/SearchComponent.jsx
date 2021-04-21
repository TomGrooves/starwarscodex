import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/ContextProvider";
import { doFetch } from "../helpers/fetch";
import Style from '../assets/styles/search.module.scss'
import {FiArrowRightCircle} from 'react-icons/fi'

export function SearchComponent() {

  // Import global states from AppContext
  const { setSearchResult} = useContext(AppContext);

  // fetch everything and store it in an array
  // take input from user and loop through array looking for matches

  // local states needed by component
  let [searchParam, setSearchParam] = useState("");
  let [allData, setAllData] = useState([]);

  // function to fetch all data from API
  // First gets all category keys and fetches each category from API
  // Then pushes all results from each category page number into innerData array
  // Then pushes all these resulst from each innerData.results array into data array
  // Finally flattens data array to create one big list of all entries in the API to search through
  async function getAllData() {
    let data = [];
    let innerData = [];
    let categories = [];
    let start_url = "https://swapi.dev/api/";
    let res = await doFetch(start_url);

    for (const [key,] of Object.entries(res)) {
      categories.push(key);
    }

    for (let x = 0; x < categories.length; x++) {
      let catUrl = `https://swapi.dev/api/${categories[x]}`;
      let res = await doFetch(`${catUrl}/`);
      for (let y = 1; y < res.count / 10 + 1; y++) {
        innerData.push(await doFetch(`${catUrl}/?page=${y}`));
      }
    }

    if (innerData) {
      for (let y = 0; y < innerData.length; y++) {
        data.push(innerData[y].results);
      }
    }

    let merged = data.flat(1);
    setAllData(merged);
  }

  // Search function to loop through allData and return results
  // Checks if searchParam is not empty, then loops through all entries in AllData
  // then checks each value in key, value pair of each entry for a match with searchParam
  // if the entry does not allready exist, pushes it to results array
  // otherwise sets searchResult to "no result found"
  function search() {
    setSearchResult([])
    
    let results = [];
    if (searchParam !== "") {
      for (let x = 0; x < allData.length; x++) {
        for (const [, value] of Object.entries(allData[x])) {
          if (typeof value == "string" && value.toLocaleLowerCase().includes(searchParam.toLowerCase())) {
            if (!results.includes(allData[x])) {
              results.push(allData[x]);
            }
          }
        }
      }

      setSearchResult(results);
      setSearchParam("")
      if (results.length <= 0) {
        setSearchResult(<h2>No results found</h2>);
      }
    } else {
        setSearchResult(<h2>No results found</h2>);
    }
  }

  // useEffect to run allData once component mounts
  useEffect(() => {
    if (allData.length === 0) {
      getAllData();
    }
  }, [allData.length]);

  return (
    <div className={Style.search}>
      <input value={searchParam} onChange={(e) => setSearchParam(e.target.value)} placeholder="Search"></input>
      <button onClick={() => {search();}}><FiArrowRightCircle/></button>
    </div>
  );
}
