/* eslint-disable camelcase */
/* eslint-disable no-useless-catch */
/* eslint-disable object-curly-newline */
import axios from 'axios';
import { clientCredentials } from '../client';
import { getUserToken } from '../auth';
import { uploadVeg } from './ cloudinary';

const dbUrl = clientCredentials.databaseUrl;

const getVeggies = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/veg.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getSingleVeg = (vegId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/veg/${vegId}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const updateVeg = (input) => new Promise((resolve, reject) => {
  getUserToken().then((data) => {
    axios.patch(`${dbUrl}/veg/${input.id}.json?auth=${data}`, input)
      .then(resolve)
      .catch(reject);
  });
});

// const createVeg = (input, file) => new Promise((resolve, reject) => {
//   getUserToken().then((data) => {
//     axios.post(`${dbUrl}/veg.json?auth=${data}`, input)
//       .then((response) => {
//         const id = response.data.name;
//         const update = { id };
//         axios.patch(`${dbUrl}/veg/${id}.json?auth=${data}`, update)
//           .then(resolve);
//       })
//       .catch((error) => reject((error)));
//   });
// });

const createVeg = async (input, file) => {
  if (file) {
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
  }
};

const deleteVeg = async (id) => {
  try {
    const token = await getUserToken();
    return axios.delete(`${dbUrl}/veg/${id}.json?auth=${token}`);
  } catch (error) {
    throw error;
  }
};

export { getVeggies, getSingleVeg, createVeg, updateVeg, deleteVeg };
