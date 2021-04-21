import React, {useContext, useEffect, useState} from 'react';
import Style from '../assets/styles/accordion.module.scss';
import {AppContext} from '../context/ContextProvider';

function Accordion(props) {

    // Import needed states from AppContext
    const { page, category } = useContext(AppContext)

    // Set states used by component
    const [active, setActive] = useState(false)    
    
    // Prop destructuring with defaults if no props are provided
    const child = props.child || "No child content selected"
    const title = props.title || "Accordian"

    // useEffect to reset active accordion if page or category changes
    useEffect(() => {
        setActive(false)
    },[page, category])

    return (
    <section className={Style.wrapper}>
        <div style={active ? {fontSize: "2rem"} : null} className={Style.accordion} onClick={() => {active ? setActive(false): setActive(true)}} ><h3>{title}</h3></div>
        <div className={active ? Style.shown: Style.hidden}>{child}</div>
        <span className={Style.seperator}></span>
    </section>
    )
}

export default Accordion