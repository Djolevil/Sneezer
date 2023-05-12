import { useState, useCallback } from 'react';

const useHttp = () => {
  const [searchResults, setSearchResults] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(async (requestConfig) => {
    setIsLoading(true);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      const resultsData = await response.json();
      console.log(resultsData);
      setSearchResults(resultsData);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    sendRequest,
    searchResults,
    setSearchResults,
  };
};

export default useHttp;