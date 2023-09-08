import axios from 'axios';
import { clientCredentials } from '../client';

const cloudUrl = clientCredentials.cloudinaryUrl;

const uploadVeg = async (file) => {
  const payload = new FormData();
  payload.append('file', file);
  payload.append('upload_preset', 'veggies');
  payload.append('cloud_name', 'basswood');
  const response = await axios.post(`${cloudUrl}/upload`, payload);
  return response;
};

// eslint-disable-next-line import/prefer-default-export
export { uploadVeg };
