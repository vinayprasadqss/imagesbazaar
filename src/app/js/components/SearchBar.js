import React, {useEffect, useState} from 'react';
import axios from "axios";

const SearchBar =({setSearchTerm,setImagesList, searchTerm})=>{
    const [searchValue, setSearchValue] =useState("");

    const onChangeSearch=(event)=>{
       /* setImagesList([])*/
        setSearchValue(event.target.value);
    }
    const onSearchSubmit=(event)=>{
        event.preventDefault();
        if(searchValue){
            setImagesList([])
            setSearchTerm(searchValue);
        }else {
            alert("Please type in Search Field")
        }

    }

    return(
        <section className={"mainSearch"}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="mainArea">
                            <form onSubmit={onSearchSubmit}>
                            <span className="icon" onClick={onSearchSubmit} style={{cursor:"pointer"}}>
                                <i className="fa fa-search"></i>
                            </span>
                                <input
                                    type="text"
                                    placeholder={"Search the world's largest collection of Indian images"}
                                    onChange={onChangeSearch}
                                />
                                <div className="rightSearchDrop">
                                    <div className="dropdown">
                                        <span className="dropdown-toggle" type="button" data-toggle="dropdown" id="drpdwnTxt">
                                        Images
                                    </span>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a href="">Image</a>
                                                <a href="">Video</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchBar;