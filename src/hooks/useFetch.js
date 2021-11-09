import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalStorage';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const GLOBAL = useContext(GlobalContext);

  const request = React.useCallback(async (url) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setData(json);
      setLoading(false);
      GLOBAL.setResponseFetch(json);
    }
  }, [GLOBAL]);

  return { data, loading, error, request };
};

export default useFetch;
