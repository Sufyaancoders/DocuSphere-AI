import axios from "axios"


export const axiosInstance = axios.create({
  withCredentials: true, // Enable credentials for CORS
  timeout: 30000, // 30 second timeout
});

// Add interceptor to include JWT token in Authorization header if present
axiosInstance.interceptors.request.use(
  (config) => {
    if (config.skipAuth) {
      return config;
    }
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const apiConnector = (method, url, bodyData, headers, params, token, skipAuth = false) => {
    // If token is provided, add it to headers
    let finalHeaders = headers ? { ...headers } : {};
    if (token) {
        finalHeaders["Authorization"] = `Bearer ${token}`;
    }
    
    // Always include Content-Type for POST requests
    if (method.toUpperCase() === 'POST' && !finalHeaders['Content-Type']) {
        finalHeaders['Content-Type'] = 'application/json';
    }
    
    return axiosInstance({
        method: `${method}`,
        url: `${url}`,
        data: bodyData ? bodyData : null,
        headers: Object.keys(finalHeaders).length > 0 ? finalHeaders : null,
        params: params ? params : null,
        skipAuth,
    });
}