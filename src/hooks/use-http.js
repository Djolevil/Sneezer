import { useState, useCallback } from 'react';

const useHttp = () => {
  const [results, setResults] = useState();
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
      setResults(resultsData);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    sendRequest,
    results,
    setResults,
  };
};

export default useHttp;