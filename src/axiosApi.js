import axios from "axios";

const axiosApi = axios.create({
    baseURL:'https://restcountries.eu/rest/v2'
});

// axiosApi.interceptors.request.use(req => {
//     console.log('[request]',req);
//     return req;
// });
//
// axiosApi.interceptors.response.use(res => {
//     console.log('[response]',res);
//     throw res;
// });

export default axiosApi;