import axios from "axios";

const options = {
  baseURL:
    import.meta.env.VITE_NODE_ENV === "development"
      ? import.meta.env.VITE_BASE_URL
      : "https://ecommerce-ig4w.onrender.com",
  withCredentials: true,
};

const API = axios.create(options);

API.interceptors.response.use(
  (res) => res.data,
  (err) => {
    const { satus: statusCode, data } = err.response;
    return Promise.reject({ statusCode, ...data });
  }
);

export default API;
