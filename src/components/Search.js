import React, { useState, useEffect } from 'react';
import SongsList from './SongsList';
import LoadingSpinner from './LoadingSpinner';

const SearchBar = () => {
const [searchTerm, setSearchTerm] = useState('');
const [searchResults, setSearchResults] = useState();
const [isLoading, setIsLoading] = useState(false);

const searchInputHandler = (event) => {
    setSearchTerm(event.target.value);
};

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(async () => {
            try {
                const response = await fetch(
                  `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${searchTerm}`
                );
                const resultsData = await response.json();
                console.log(resultsData);
                setSearchResults(resultsData);
                setIsLoading(false);
              } catch (error) {
                console.log(error);
              }
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [searchTerm]);

    return (
        <React.Fragment>
            <div>
                <input type='text' onChange={searchInputHandler}/>
            </div>
            {isLoading && <LoadingSpinner />}
            {!isLoading && searchResults && <SongsList songs={searchResults.data}/>}
        </React.Fragment>
    );
};

export default SearchBar;