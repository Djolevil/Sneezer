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
    if (searchTerm === '') {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const timer = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${searchTerm}`
        );
        const resultsData = await response.json();
        console.log(resultsData);
        setSearchResults(resultsData);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  const loadNextHandler = async () => {
        try {
         const response = await fetch(`https://cors-anywhere.herokuapp.com/${searchResults.next}`);
         const resultsData = await response.json();
         console.log(resultsData);
         setSearchResults(resultsData);
        } catch (error) {
         console.log(error);
        }
      } 

  const loadPreviousHandler = async () => {
        try {
         const response = await fetch(`https://cors-anywhere.herokuapp.com/${searchResults.prev}`);
         const resultsData = await response.json();
         console.log(resultsData);
         setSearchResults(resultsData);
        } catch (error) {
         console.log(error);
        }
      } 

  return (
    <React.Fragment>
      <div>
        <input type='text' onChange={searchInputHandler} />
      </div>
      {isLoading && <LoadingSpinner />}
      {!isLoading && searchTerm !== '' && searchResults && <SongsList songs={searchResults.data} />}
      {<button onClick={loadPreviousHandler}>Previous</button>}
      {<button onClick={loadNextHandler}>Next</button>}
    </React.Fragment>
  );
};

export default SearchBar;
