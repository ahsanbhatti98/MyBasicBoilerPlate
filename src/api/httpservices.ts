import axios from 'axios';

const customAxios = (contentType = 'application/json') => {
  const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
      'Content-Type': contentType,
    },
    timeout: 1000,
  });

  // Add a request interceptor
  axios.interceptors.request.use(
    async config => {
      // Do something before request is sent
      const token = 'token';

      if (token) {
        config.headers.Authorization = `Beares ${token}`;
      }

      console.log('url=???=>>', config.url);
      console.log('url=???=>>', token);

      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    },
  );

  return instance;
};

export default customAxios;
