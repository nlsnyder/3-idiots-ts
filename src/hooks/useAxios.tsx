import { useState, useCallback } from "react";
import axios from "axios";

import { BaseAxiosRequest } from "../models/interfaces/http-interfaces";
import { ApiRequestError } from "../models/interfaces/form-interfaces";

axios.defaults.baseURL = "https://localhost:4000";

const useAxios = (): {
  isLoading: boolean;
  errors: ApiRequestError[];
  sendRequest: (req: BaseAxiosRequest) => Promise<any>;
  clearError: () => void;
} => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setError] = useState<ApiRequestError[]>([]);

  const clearError = useCallback(() => {
    setError([]);
  }, []);

  const sendRequest = useCallback(async (req: BaseAxiosRequest) => {
    //display loader while http request is made
    setIsLoading(true);

    try {
      //make request with req params passed in
      const res = await axios.request(req);
      setIsLoading(false);
      setError([]);
      return res.data;
    } catch (err: any) {
      const errors = err?.response?.data?.errors;
      if (errors) {
        setError(errors);
      } else {
        setError([{ msg: "An unexpected error occurred." }]);
      }
      setIsLoading(false);
      return { status: "failed" };
    }
  }, []);

  return { isLoading, errors, sendRequest, clearError };
};

export default useAxios;
