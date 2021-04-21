import React, {useContext, useEffect, useRef, useState} from 'react'
import {AppContext} from '../context/ContextProvider'
import { SearchComponent } from './SearchComponent';
import Style from '../assets/styles/navigation.module.scss'

export function NavigationComponent () {

    // Import states from AppContext 
    const {setCategory, category, setPage, setSearchResult} = useContext(AppContext)
    
    // State used to check if user scrolled past navbar
    let [stickyActive, setStickyActive] = useState(false)
   
    // Ref for navbar used to get offSetTop
    const navRef = useRef()
    
    // useEffect hook to set offsetTop once DOM has loaded and add eventlistener for scroll changes
    useEffect(()=>{
        
        const offSet = navRef.current ? navRef.current.offsetTop : null
    
        function checkSticky() {
            if (window.pageYOffset > offSet){
                setStickyActive(true)
            }
            else {
                setStickyActive(false)
            }
        }
      
        window.addEventListener("scroll", (e) => {
            checkSticky()
        });
    }, [])

    // Handler function to change category, reset page number and searchresult
    function navHandler(category) {
        setCategory(category); 
        setPage(1); 
        setSearchResult([])
        window.scrollTo(0,0)
    }

    // HTML for navbar with inline style for changing currently active navlink
    return (
        <nav ref={navRef} className={stickyActive ? `${Style.navigation} ${Style.fixed}` : Style.navigation}>
            <ul>
                <li style={category === "people" ? {fontSize: "1.3rem", textDecoration: "underline"} : null} onClick={() => {navHandler('people')}}>People</li>
                <li style={category === "planets" ? {fontSize: "1.3rem", textDecoration: "underline"} : null} onClick={() => {navHandler('planets')}}>Planets</li>
                <li style={category === "films" ? {fontSize: "1.3rem", textDecoration: "underline"} : null} onClick={() => {navHandler('films')}}>Films</li>
                <li style={category === "species" ? {fontSize: "1.3rem", textDecoration: "underline"} : null} onClick={() => {navHandler('species')}}>Species</li>
                <li style={category === "vehicles" ? {fontSize: "1.3rem", textDecoration: "underline"} : null} onClick={() => {navHandler('vehicles')}}>Vehicles</li>
                <li style={category === "starships" ? {fontSize: "1.3rem", textDecoration: "underline"} : null} onClick={() => {navHandler('starships')}}>Starships</li>
            </ul>
                <SearchComponent/>
        </nav>
    )
}