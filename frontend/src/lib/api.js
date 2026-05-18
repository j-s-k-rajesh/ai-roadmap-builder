import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://ai-roadmap-builder.onrender.com";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const encodeRouteParam = (value) => encodeURIComponent(value || "");

export const decodeRouteParam = (value) => decodeURIComponent(value || "");

export default api;
