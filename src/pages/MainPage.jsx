import React, { useContext, useEffect, useState } from 'react'
import { EntryComponent } from '../components/EntryComponent'
import { PaginationComponent } from '../components/PaginationComponent'
import {doFetch} from '../helpers/fetch'
import { AppContext } from '../context/ContextProvider'
import Style from '../assets/styles/mainpage.module.scss'
export function MainPage() {

    const {page, category, searchResult} = useContext(AppContext)
    let [data, setData] = useState([])


    useEffect(() => {
        let getStarWarsData = async () => {
            let url = `https://swapi.dev/api/${category}/?page=${page}`
            let res = await doFetch(url)
            setData(res)
        }
 
        getStarWarsData()
    },[page, category])
    
    const entries = data.results && data.results.map((item, i) => {
        return (
            <EntryComponent key={i} data={item}></EntryComponent>
        )
    })

    const searchEntries = typeof(searchResult) !== "string" && searchResult.length > 0 ? 
        searchResult.map((item, i) => {
            return (
                <EntryComponent key={i} data={item}></EntryComponent>
            )
        }) 
    : searchResult

   // console.log(entries)

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