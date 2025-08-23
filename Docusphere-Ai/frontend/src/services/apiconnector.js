import axios from "axios"


export const axiosInstance = axios.create({});

// Add interceptor to include JWT token in Authorization header if present
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const apiConnector = (method, url, bodyData, headers, params, token) => {
    // If token is provided, add it to headers
    let finalHeaders = headers ? { ...headers } : {};
    if (token) {
        finalHeaders["Authorization"] = `Bearer ${token}`;
    }
    return axiosInstance({
        method: `${method}`,
        url: `${url}`,
        data: bodyData ? bodyData : null,
        headers: Object.keys(finalHeaders).length > 0 ? finalHeaders : null,
        params: params ? params : null,
    });
}