import axios from "axios";

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
});

const api = {
  get: app.get,
  post: app.post,
  put: app.put,
  delete: app.delete,
};

export default api;
