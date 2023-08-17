import axios from 'axios';
import { clientCredentials } from '../client';
import { getUserToken } from '../auth';

const dbUrl = clientCredentials.databaseUrl;

const createBasketVeg = (bsktVeg) => new Promise((resolve, reject) => {
  getUserToken().then((data) => {
    axios.post(`${dbUrl}/bsktVeg.json?auth=${data}`, bsktVeg)
      .then((response) => {
        const id = response.data.name;
        const update = { id };
        axios.patch(`${dbUrl}/bsktVeg/${id}.json?auth=${data}`, update)
          .then(resolve);
      })
      .catch(reject);
  });
});

const deleteBasketVeg = (id) => new Promise((resolve, reject) => {
  getUserToken().then((data) => {
    axios.delete(`${dbUrl}/bsktVeg/${id}.json?auth=${data}`)
      .then(resolve)
      .catch(reject);
  });
});

const getBasketVeg = (bsktId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/bsktVeg.json?orderBy="basket"&equalTo="${bsktId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// eslint-disable-next-line import/prefer-default-export
export { createBasketVeg, deleteBasketVeg, getBasketVeg };
