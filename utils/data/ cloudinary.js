import axios from 'axios';
import sha1 from 'sha1';
import { clientCredentials } from '../client';

const cloudUrl = clientCredentials.cloudinaryUrl;
const cloudApiKey = clientCredentials.cloudinaryApiKey;
const cloudSecret = clientCredentials.cloudinarySecret;

const uploadVeg = async (file) => {
  const payload = new FormData();
  payload.append('file', file);
  payload.append('upload_preset', 'veggies');
  payload.append('cloud_name', 'basswood');
  const response = await axios.post(`${cloudUrl}/upload`, payload);
  return response;
};

const uploadBasketPhoto = async (file) => {
  const payload = new FormData();
  payload.append('file', file);
  payload.append('upload_preset', 'basket');
  payload.append('cloud_name', 'basswood');
  const response = await axios.post(`${cloudUrl}/upload`, payload);
  return response;
};

const uploadProductPhoto = async (file) => {
  const payload = new FormData();
  payload.append('file', file);
  payload.append('upload_preset', 'products');
  payload.append('cloud_name', 'basswood');
  const response = await axios.post(`${cloudUrl}/upload`, payload);
  return response;
};

const deleteCloudImage = async (imageId) => {
  const timeStamp = Math.round((new Date().getTime() / 1000));
  const data = new FormData();
  data.append('public_id', imageId);
  data.append('timestamp', timeStamp);
  data.append('api_key', cloudApiKey);
  data.append('signature', sha1(`public_id=${imageId}&timestamp=${timeStamp}${cloudSecret}`));
  return axios.post(`${cloudUrl}/image/destroy`, data);
};

// const deletePhoto = (imageObj) => new Promise((resolve, reject) => {
//   const timeStamp = Math.round((new Date().getTime() / 1000));
//   const data = new FormData();
//   data.append('public_id', imageObj.publicId);
//   data.append('timestamp', timeStamp);
//   data.append('api_key', cloudApiKey);
//   data.append('signature', sha1(`public_id=${imageObj.publicId}&timestamp=${timeStamp}${cloudSecret}`));
//   axios.post(`${cloudUrl}/destroy`, data)
//     .then(resolve)
//     .catch(reject);
// });

export {
  uploadVeg, uploadBasketPhoto, deleteCloudImage, uploadProductPhoto,
};
