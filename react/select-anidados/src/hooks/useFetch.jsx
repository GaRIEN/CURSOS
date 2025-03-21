import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const fetcData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);
        if (!res.ok) {
          let err = new Error("error en la peticion Fetch");
          err.status = res.status || "OO";
          err.statusText = res.statusText || "ocurrio un error";
          throw err;
        }

        const json = await res.json();

        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (error) {
        if (!signal.aborted) {
          setData(null);
          setError(error);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetcData();
  }, [url]);

  return { data, error, loading };
};
