import { useState, useEffect } from "react";
import axios from "axios";

const useFetchActions = (action: () => Promise<any>) => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await action();
      setData(res);
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

export default useFetchActions;
