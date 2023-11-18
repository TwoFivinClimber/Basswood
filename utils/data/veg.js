/* eslint-disable camelcase */
/* eslint-disable no-useless-catch */
/* eslint-disable object-curly-newline */
import axios from 'axios';
import { clientCredentials } from '../client';
import { getUserToken } from '../auth';
import { deleteCloudImage, uploadVeg } from './ cloudinary';

const dbUrl = clientCredentials.databaseUrl;

const getVeggies = async () => {
  try {
    const veggies = await axios.get(`${dbUrl}/veg.json`);
    const response = Object.values(veggies.data);
    return response;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};

const getSingleVeg = (vegId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/veg/${vegId}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const updateVeg = async (input, file) => {
  if (file) {
    const cloudResponse = await uploadVeg(file);
    const { public_id, url } = cloudResponse.data;
    const fullVeggieObj = {
      ...input,
      img: url,
      cloudId: public_id,
    };
    const fbToken = await getUserToken();
    return axios.patch(`${dbUrl}/veg/${fullVeggieObj.id}.json?auth=${fbToken}`, fullVeggieObj);
  }
  const fbToken = await getUserToken();
  return axios.patch(`${dbUrl}/veg/${input.id}.json?auth=${fbToken}`, input);
};

const createVeg = async (input, file) => {
  const cloudResponse = await uploadVeg(file);
  const { public_id, url } = cloudResponse.data;
  const fullVeggieObj = {
    ...input,
    img: url,
    cloudId: public_id,
  };
  const fbToken = await getUserToken();
  const createdVeg = await axios.post(`${dbUrl}/veg.json?auth=${fbToken}`, fullVeggieObj);
  const id = createdVeg.data.name;
  const update = { id };
  const response = await axios.patch(`${dbUrl}/veg/${id}.json?auth=${fbToken}`, update);
  return response;
};

const deleteVeg = async (id, cloudId) => {
  if (cloudId) {
    deleteCloudImage(cloudId);
  }
  try {
    const token = await getUserToken();
    return axios.delete(`${dbUrl}/veg/${id}.json?auth=${token}`);
  } catch (error) {
    throw error;
  }
};

export { getVeggies, getSingleVeg, createVeg, updateVeg, deleteVeg };
