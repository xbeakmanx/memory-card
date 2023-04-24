import { useState, useEffect } from "react";

export const useFetch = (url, shuffleArray) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        setIsFetching(true);
        const res = await fetch(url);
        const { entries } = await res.json();

        const getAllEntries = [...entries, ...entries];

        setData(shuffleArray ? shuffleArray(getAllEntries) : getAllEntries);
        setIsFetching(false);
      } catch (error) {
        setData([]);
        setIsFetching(false);
      } finally {
        setIsFetching(false);
      }
    })();
  }, [url, shuffleArray]);

  return { data, isFetching };
};
