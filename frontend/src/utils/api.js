import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Backend URL

export const registerUser = async (userData) => {
  return await axios.post(`${API_BASE_URL}/auth/register`, userData);
};

export const loginUser = async (credentials) => {
  return await axios.post(`${API_BASE_URL}/auth/login`, credentials);
};

export const fetchRecipes = async () => {
  return await axios.get(`${API_BASE_URL}/recipes`);
};
