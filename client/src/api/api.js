import axios from 'axios';
// ---------------------
const api = axios.create({
  baseURL: 'http://localhost:3000',
});
// ------------------
export const getGroceries = async (database, collection) => {
  return api.get(`/find/${database}/${collection}`);
};
// -----------------
export const insertGrocery = async (database, collection, data) => {
  return api.post(`/insert/${database}/${collection}`, data);
};
// -----------------
export const updateGrocery = async (database, collection, id, data) => {
  return api.put(`/update/${database}/${collection}/${id}`, data);
};
// ------------------
export const deleteGrocery = async (database, collection, id) => {
  return api.delete(`/delete/${database}/${collection}/${id}`);
};
// -------Add other API methods as needed
