import React, { useState, useEffect } from "react";
import SongsList from "./SongsList";
import LoadingSpinner from './LoadingSpinner';
import useHttp from '../hooks/use-http';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { isLoading, sendRequest: fetchSongs, searchResults, setSearchResults } = useHttp();

  const searchInputHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (searchTerm === '') {
      setSearchResults(null);
      console.log('Empty search term!');
      return;
    }

    const timer = setTimeout(() => {
      fetchSongs({
        url: `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${searchTerm}`,
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, fetchSongs, setSearchResults]);

  const loadPreviousHandler = () => {
    fetchSongs({
      url: `https://cors-anywhere.herokuapp.com/${searchResults.prev}`,
    });
  };

  const loadNextHandler = () => {
    fetchSongs({
      url: `https://cors-anywhere.herokuapp.com/${searchResults.next}`,
    });
  };

  return (
    <React.Fragment>
      <div>
        <input type='text' onChange={searchInputHandler} />
      </div>
      {isLoading && <LoadingSpinner />}
      {!isLoading && searchTerm !== '' && searchResults && (
        <SongsList songs={searchResults.data} />
      )}
      {!isLoading && searchTerm !== '' && searchResults && searchResults.prev && (
        <button onClick={loadPreviousHandler}>Previous</button>
      )}
      {!isLoading && searchTerm !== '' && searchResults && searchResults.next && (
        <button onClick={loadNextHandler}>Next</button>
      )}
    </React.Fragment>
  );
};

export default Search;