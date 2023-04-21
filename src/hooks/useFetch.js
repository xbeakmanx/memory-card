import React, { useState, useEffect } from "react";

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setIsFetching(true);
        const res = await fetch(
          "https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=10"
        );
        const { entries } = await res.json();
        console.log(entries, "entries");

        const getAllEntries = [...entries, ...entries];

        setData(getAllEntries);
        setIsFetching(false);
      } catch (error) {
        setData([]);
        setIsFetching(false);
      } finally {
        setIsFetching(false);
      }
    })();
  }, []);

  return { data, isFetching };
};
