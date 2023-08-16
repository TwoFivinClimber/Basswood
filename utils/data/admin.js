import axios from 'axios';
import { clientCredentials } from '../client';
import { getUserToken } from '../auth';

const dbUrl = clientCredentials.databaseUrl;

const checkAdmin = () => new Promise((resolve) => {
  getUserToken().then((data) => {
    axios.get(`${dbUrl}/admin.json?auth=${data}`)
      .then((response) => resolve(response))
      .catch((error) => resolve(error));
  });
});

export default checkAdmin;
