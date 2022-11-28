import { BaseAxiosRequest } from "../models/interfaces/http-interfaces";

//https://cay619pp1h.execute-api.us-east-1.amazonaws.com/production
export const defaultAxiosParams: BaseAxiosRequest = {
  url: 'https://cay619pp1h.execute-api.us-east-1.amazonaws.com/production',
  method: 'GET',
  data: {},
  headers: { 'Content-Type' : 'application/json' },
  params: {},
  timeout: 30000
};