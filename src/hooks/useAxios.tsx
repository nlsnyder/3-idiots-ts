import { useState, useCallback } from "react";
import axios from "axios";

import { BaseAxiosRequest } from "../models/interfaces/http-interfaces";

axios.defaults.baseURL = "https://localhost:3000";

const useAxios = (): {
  isLoading: boolean;
  error: Error | null;
  sendRequest: (req: any) => Promise<any>;
} => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (req: BaseAxiosRequest) => {
      
      //display loader while http request is made
      setIsLoading(true);

      try {
        //make request with req params passed in
        const res = await axios.request(req);
        setIsLoading(false);
        return res.data;
      } catch (err) {
        const resError: any = new Error("Oh no! Something went wrong. Please try again.");
        setError(resError);
        setIsLoading(false);
      }
    },
    []
  );

  return { isLoading, error, sendRequest };
};

export default useAxios;
