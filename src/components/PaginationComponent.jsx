import React, {useContext} from 'react';
import { AppContext } from '../context/ContextProvider';
import Style from '../assets/styles/pagination.module.scss';

export function PaginationComponent(props) {

    // Import states from AppContext
    const { page, setPage } = useContext(AppContext);

    // Function to create pagination object with props.number
    function Pagination(props) {
        return (
            <button style={page === props.number ? {color:"#FFE81F"} : null} onClick={() => {setPage(props.number); window.scrollTo(0,0)}}>{props.number}</button>
        )
    }

    let pagination = []
    
    // Based on props.total number, push pagination component to empty array
    for (let x = 1; x < props.total; x++){
        pagination.push(
            <Pagination key={x} number={x}></Pagination>
        )
    }

    // return array with components
    return (
        <div className={Style.pagination}>
            {pagination}
        </div>
    )

}