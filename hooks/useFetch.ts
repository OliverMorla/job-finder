import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (query: JobResponseQuery) => {
  const [data, setData] = useState<Job[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: {
      ...query,
    },
    headers: {
      "X-RapidAPI-Key": "c6faa0ff1emshf882d674dac5b88p15a947jsn005c5049ea02",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.request(options);
      const data = (await res.data) as JobResponse;
      setData(data.data);
      setIsLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setError("");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, reFetch };
};

export default useFetch;
