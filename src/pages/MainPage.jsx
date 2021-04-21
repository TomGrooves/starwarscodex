import React, { useContext, useEffect, useState } from 'react'
import { EntryComponent } from '../components/EntryComponent'
import { PaginationComponent } from '../components/PaginationComponent'
import {doFetch} from '../helpers/fetch'
import { AppContext } from '../context/ContextProvider'
import Style from '../assets/styles/mainpage.module.scss'

export function MainPage() {
    // Import global states from AppContext
    const {page, category, searchResult} = useContext(AppContext)
    
    // States needed by component
    let [data, setData] = useState([])

    // useEffect hook to fetch data by category and page number when page or category changes
    useEffect(() => {
        let getStarWarsData = async () => {
            let url = `https://swapi.dev/api/${category}/?page=${page}`
            let res = await doFetch(url)
            setData(res)
        }
 
        getStarWarsData()
    },[page, category])
    
    // Create array of EntryComponents when data.results is present
    const entries = data.results && data.results.map((item, i) => {
        return (
            <EntryComponent key={i} data={item}></EntryComponent>
        )
    })

    // Create array of EntryComponents from searchResults when searchResult is not a string and is preset
    const searchEntries = typeof(searchResult) !== "string" && searchResult.length > 0 ? 
        searchResult.map((item, i) => {
            return (
                <EntryComponent key={i} data={item}></EntryComponent>
            )
        }) 
    : searchResult

    // Conditional rendering which shows either searchEntries or entries from page and category
    return (
    
      <div className={Style.mainpage}>
          {searchEntries.length <= 0 ? 
          <>
          {entries} 
            <PaginationComponent total={Math.ceil(data.count/10+1)}/>
          </>
          : searchEntries}
      </div>

    
    )
}