import React, { useEffect, useReducer } from 'react';
import SongsList from './SongsList';
import LoadingSpinner from './LoadingSpinner';
import useHttp from '../hooks/use-http';

const defaultSearchState = {
  searchType: 'track',
  searchTerm: '',
};

const searchReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { searchType: state.searchType, searchTerm: action.userInput };
  }
  if (action.type === 'SEARCH_TRACKS') {
    return { searchType: 'track', searchTerm: state.searchTerm };
  }
  if (action.type === 'SEARCH_ALBUMS') {
    return { searchType: 'album', searchTerm: state.searchTerm };
  }
  if (action.type === 'SEARCH_ARTISTS') {
    return { searchType: 'artist', searchTerm: state.searchTerm };
  }

  return defaultSearchState;
};

const Search = () => {
  const [searchState, dispatch] = useReducer(searchReducer, defaultSearchState);
  const { isLoading, sendRequest: fetchData, results, setResults } = useHttp();

  const searchUrl = `https://api.deezer.com/search/${searchState.searchType}?q=${searchState.searchTerm}`;

  const searchInputHandler = (event) => {
    dispatch({ type: 'INPUT', userInput: event.target.value });
  };

  const tracksPressedHandler = (event) => {
    dispatch({ type: 'SEARCH_TRACKS' });
  };

  const albumsPressedHandler = (event) => {
    dispatch({ type: 'SEARCH_ALBUMS' });
  };

  const artistPressedHandler = (event) => {
    dispatch({ type: 'SEARCH_ARTISTS' });
  };

  useEffect(() => {
    if (searchState.searchTerm.trim() === '') {
      setResults(null);
      console.log('Empty search term!');
      return;
    }

    const timer = setTimeout(() => {
      fetchData({
        url: `https://cors-anywhere.herokuapp.com/${searchUrl}`
      });
      console.log(searchUrl);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchUrl, searchState.searchTerm, fetchData, setResults]);

  const loadPreviousHandler = () => {
    fetchData({
      url: `https://cors-anywhere.herokuapp.com/${results.prev}`,
    });
  };

  const loadNextHandler = () => {
    fetchData({
      url: `https://cors-anywhere.herokuapp.com/${results.next}`,
    });
  };

  return (
    <React.Fragment>
      <div>
        <button onClick={tracksPressedHandler}>Tracks</button>
        <button onClick={albumsPressedHandler}>Albums</button>
        <button onClick={artistPressedHandler}>Artists</button>
      </div>
      <div>
        <input type='text' onChange={searchInputHandler} />
      </div>
      {isLoading && <LoadingSpinner />}
      {!isLoading && searchState.searchTerm !== '' && searchState.searchType === 'track' && results && (
        <SongsList songs={results.data} />
      )}
      {!isLoading && searchState.searchTerm !== '' && results && results.prev && (
        <button onClick={loadPreviousHandler}>Previous</button>
      )}
      {!isLoading && searchState.searchTerm !== '' && results && results.next && (
        <button onClick={loadNextHandler}>Next</button>
      )}
    </React.Fragment>
  );
};

export default Search;