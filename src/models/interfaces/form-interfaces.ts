export interface SelectOption {
  name: string;
  value: string;
}

export interface ContactInitValues {
  name: string;
  email: string;
  heardFrom: string;
  whereFrom: string;
  message: string;
}

export interface ApiRequestError {
  msg: string,
  value?: string,
  param?: string,
  location?: string
}
