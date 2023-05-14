import React, { useState, useEffect } from "react";
import SongsList from "./SongsList";
import LoadingSpinner from './LoadingSpinner';
import useHttp from '../hooks/use-http';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { isLoading, sendRequest: fetchSongs, results, setResults } = useHttp();

  const searchInputHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (searchTerm === '') {
      setResults(null);
      console.log('Empty search term!');
      return;
    }

    const timer = setTimeout(() => {
      fetchSongs({
        url: `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${searchTerm}`,
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, fetchSongs, setResults]);

  const loadPreviousHandler = () => {
    fetchSongs({
      url: `https://cors-anywhere.herokuapp.com/${results.prev}`,
    });
  };

  const loadNextHandler = () => {
    fetchSongs({
      url: `https://cors-anywhere.herokuapp.com/${results.next}`,
    });
  };

  return (
    <React.Fragment>
      <div>
        <input type='text' onChange={searchInputHandler} />
      </div>
      {isLoading && <LoadingSpinner />}
      {!isLoading && searchTerm !== '' && results && (
        <SongsList songs={results.data} />
      )}
      {!isLoading && searchTerm !== '' && results && results.prev && (
        <button onClick={loadPreviousHandler}>Previous</button>
      )}
      {!isLoading && searchTerm !== '' && results && results.next && (
        <button onClick={loadNextHandler}>Next</button>
      )}
    </React.Fragment>
  );
};

export default Search;