import { useState } from "react";
import React from "react";
import DisplayDate from "./date"

function Header(props){

    const [searchtext, setSearchtext] = useState("");

    async function search(event){
     props.onSubmit(searchtext);
     event.preventDefault();
    }

    function handletextChange(event){
        setSearchtext(event.target.value) ;
    }

    return (
     <div className="header">
       <h1 className="logo">Only<span className="newsSpan"> News</span></h1>
       <div className="searchForm">
       <form  name="searchName" className="search" onSubmit={search}>
        <input className="search__input" type="text" placeholder="Type your text " onChange={handletextChange}></input>
        <button type="submit" className="search__button"><svg class="search__icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
        </svg>
        </button>
       </form>
       </div>
       <DisplayDate />
     </div>
    );
}

export default Header;

