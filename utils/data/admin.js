import axios from 'axios';
import { clientCredentials } from '../client';

const dbUrl = clientCredentials.databaseUrl;

const getAdminPersonnel = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/admin.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

export default getAdminPersonnel;
