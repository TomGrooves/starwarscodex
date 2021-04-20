import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {

  let [page, setPage] = useState(1)
  let [category, setCategory] = useState('people')
  let [searchResult, setSearchResult] = useState([])
  
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

// Først: import {AppContextProvider} from './context/ContextProvider'; i Top hierakiet (App.js)
// Herefter: import { AppContext } from "../../context/ContextProvider" indeni det component som skal subsribe 
// og deklarer værdierne med : const { testState, setTestState } = useContext(AppContext);

export { AppContext, AppContextProvider }