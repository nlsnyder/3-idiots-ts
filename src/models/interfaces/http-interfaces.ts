export interface BaseAxiosRequest {
  url: string,
  method: string,
  data?: object,
  headers?: object,
  params?: string | object,
  timeout?: number
};

export interface BaseAxiosResponse {
  data: object,
  status: number,
  statusText: string,
  headers: object,
  request: XMLHttpRequest
}