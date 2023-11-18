/* eslint-disable no-useless-catch */
/* eslint-disable camelcase */
import axios from 'axios';
import { clientCredentials } from '../client';
import { getUserToken } from '../auth';
import { deleteCloudImage, uploadProductPhoto, uploadVeg } from './ cloudinary';

const dbUrl = clientCredentials.databaseUrl;

const getProducts = async () => {
  const products = await axios.get(`${dbUrl}/product.json`);
  const response = Object.values(products.data);
  return response;
};

const getAvailableProducts = async () => {
  const response = await axios.get(`${dbUrl}/product.json?orderBy="available"&equalTo=true`);
  return Object.values(response.data);
};

const createProduct = async (input, file) => {
  const cloudResponse = await uploadProductPhoto(file);
  const { public_id, url } = cloudResponse.data;
  const fullProductObj = {
    ...input,
    img: url,
    cloudId: public_id,
  };
  const fbToken = await getUserToken();
  const createdProduct = await axios.post(`${dbUrl}/product.json?auth=${fbToken}`, fullProductObj);
  const id = createdProduct.data.name;
  const update = { id };
  const response = await axios.patch(`${dbUrl}/product/${id}.json?auth=${fbToken}`, update);
  return response;
};

const updateProduct = async (input, file) => {
  if (file) {
    const cloudResponse = await uploadVeg(file);
    const { public_id, url } = cloudResponse.data;
    const fullProductObj = {
      ...input,
      img: url,
      cloudId: public_id,
    };
    const fbToken = await getUserToken();
    return axios.patch(`${dbUrl}/product/${fullProductObj.id}.json?auth=${fbToken}`, fullProductObj);
  }
  const fbToken = await getUserToken();
  return axios.patch(`${dbUrl}/product/${input.id}.json?auth=${fbToken}`, input);
};

const deleteProduct = async (id, cloudId) => {
  if (cloudId) {
    deleteCloudImage(cloudId);
  }
  try {
    const token = await getUserToken();
    return axios.delete(`${dbUrl}/product/${id}.json?auth=${token}`);
  } catch (error) {
    throw error;
  }
};

export {
  getProducts, createProduct, updateProduct, deleteProduct, getAvailableProducts,
};
