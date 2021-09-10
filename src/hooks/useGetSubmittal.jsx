import { useState, useEffect } from "react";
import axios from "axios";

/*
 Custom hook to get data from backend
 fetching data with axios get
 return Boolean isLoading and isError 
*/

const useGetSubmittal = (url) => {
  const [apiData, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // async function to get data
    const getData = async () => {
      const endpoint = "/data";
      try {
        const response = await axios.get(`${url}${endpoint}`);
        setIsLoading(false);
        setData(response.data);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    getData();
  }, [url]);

  // returning object with loading, error and data
  return { isLoading, isError, apiData };
};

export default useGetSubmittal;
