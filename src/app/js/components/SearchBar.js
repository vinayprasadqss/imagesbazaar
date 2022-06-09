import React, { useState} from 'react';
import {SuggestionsListComponent} from "./AutoComplete";
import {suggestions} from './../Constant';


const SearchBar =({setSearchTerm,setImagesList})=>{
    const [searchValue, setSearchValue] =useState("");

    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);


    const onChangeSearch=(event)=>{
        setSearchValue(event.target.value);

        const userInput = event.target.value;
        const unLinked = suggestions.filter(
            (suggestion) =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
        setFilteredSuggestions(unLinked);
        setActiveSuggestionIndex(0);
        setShowSuggestions(true);
    }
    const onKeyDown = (key) => {
        if(key.keyCode === 13 || key.keyCode === 9){
            //setSearchValue(filteredSuggestions[activeSuggestionIndex])
            setFilteredSuggestions([])
        }
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
                                    onKeyDown={onKeyDown}
                                    value={searchValue}
                                />
                                <div className="rightSearchDrop">
                                    <div className="dropdown">
                                        <span className="dropdown-toggle" type="button" data-toggle="dropdown" id="drpdwnTxt">
                                        Images
                                    </span>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a>Image</a>
                                                <a>Video</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="searchDropdownValue">
                                    {showSuggestions && searchValue && <SuggestionsListComponent
                                        filteredSuggestions={filteredSuggestions}
                                        activeSuggestionIndex={activeSuggestionIndex}
                                        setFilteredSuggestions={setFilteredSuggestions}
                                        setInput={setSearchValue}
                                        searchValue={searchValue}
                                        setActiveSuggestionIndex={setActiveSuggestionIndex}
                                        setShowSuggestions={setShowSuggestions}
                                        onSearchSubmit={onSearchSubmit}
                                        setImagesList={setImagesList} setSearchTerm={setSearchTerm}
                                    />}
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