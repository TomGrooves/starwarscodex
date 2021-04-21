import React, { createContext, useState } from "react";

const AppContext = createContext();

// Create context for global variables and states
const AppContextProvider = ({ children }) => {

  let [page, setPage] = useState(1)
  let [category, setCategory] = useState('people')
  let [searchResult, setSearchResult] = useState([])
  
  // Return AppContext.provider with said states
  return (
    <AppContext.Provider value={{ 
      page,
      setPage,
      category,
      setCategory,
      searchResult,
      setSearchResult, 
      }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider }