import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:1196/api/";

const responseBody = (response: AxiosResponse) => response.data;

//the equal function for the arrow function responseBody
function responseBodyFn(response: AxiosResponse) {
  return response.data;
}

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const Catalog = {
  list: () => requests.get("product"),
  details: (id: number) => requests.get(`product/${id}`),
};

const TestErrors = {
  get400Error: () => requests.get("buggy/bad-request"),
  get401Error: () => requests.get("buggy/unauthorised"),
  get404Error: () => requests.get("buggy/not-found"),
  get500Error: () => requests.get("buggy/server-error"),
  getValidationError: () => requests.get("buggy/validation-error"),
};

const agent = {
  Catalog,
  TestErrors,
};
export default agent;
