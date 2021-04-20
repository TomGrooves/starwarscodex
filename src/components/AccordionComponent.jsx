import React, {useContext, useEffect, useState} from 'react';
import Style from '../assets/styles/accordion.module.scss';
import {AppContext} from '../context/ContextProvider';

function Accordion(props) {

    
    /** Accordian accepts these props
     *    * title (deafult "Accordian")
     *    * child (required for content)
     */
    
    const { page, category } = useContext(AppContext)
    const [active, setActive] = useState(false)    
    
    const child = props.child || "No child content selected"
    const title = props.title || "Accordian"

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