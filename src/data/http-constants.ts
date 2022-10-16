import { BaseAxiosRequest } from "../models/interfaces/http-interfaces";

export const defaultAxiosParams: BaseAxiosRequest = {
  url: 'http://localhost:4000',
  method: 'GET',
  data: {},
  headers: { 'Content-Type' : 'application/json' },
  params: {},
  timeout: 30000
};