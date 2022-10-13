import { useState, useCallback } from "react";
import axios from "axios";

import { BaseAxiosRequest } from "../models/interfaces/http-interfaces";

axios.defaults.baseURL = "https://localhost:3000";

const useAxios = (): {
  isLoading: boolean;
  data: object | null;
  error: any
  sendRequest: (req: any) => Promise<void>;
} => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (req: BaseAxiosRequest) => {

    setIsLoading(true);

    try {
      const res = await axios.request(req);
      setData(res.data);
    } catch (err) {
      const resError: any = new Error('Something went wrong');
      setError(resError);
    } finally {
      setIsLoading(false);
    }

  }, []);

  return { isLoading, data, error, sendRequest };
};

export default useAxios;
