import React from 'react';


const SuggestionsListComponent = ({filteredSuggestions, activeSuggestionIndex, setFilteredSuggestions, setInput, setActiveSuggestionIndex, setShowSuggestions, searchValue, setImagesList, setSearchTerm}) => {
    const onClick = (e) => {
        setFilteredSuggestions([]);
        setInput(e.target.innerText);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);

        if(e.target.innerText){
            setImagesList([])
            setSearchTerm(e.target.innerText);
        }else {
            alert("Please type in Search Field")
        }
    };
    return filteredSuggestions.length ? (
        <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
                let className;
                if (index === activeSuggestionIndex) {
                    className = "suggestion-active";
                }
                return (
                    <li className={className} key={suggestion} onClick={onClick}>
                        <p>{suggestion}</p>
                    </li>
                );
            })}
        </ul>
    ) : (
        ""
/*        <div className="no-suggestions">
            <em>No suggestions, you're on your own!</em>
        </div>*/
    );
};

export {SuggestionsListComponent};