import axios from "axios";
const URL = "http://localhost:3000/products";

const getAllProduct = () => {
  return axios.get(URL);
};

const addProduct = (data) => {
  return axios.post(URL, data);
};

const deleteProduct = (id) => {
  return axios.delete(`${URL}/${id}`);
};

const getProductById = (id) => {
  return axios.get(`${URL}/${id}`);
};
const updateData = (id, data) => {
  return axios.put(`${URL}/${id}`, data);
};
export { getAllProduct, addProduct, deleteProduct, getProductById, updateData };
