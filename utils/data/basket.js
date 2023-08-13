import axios from 'axios';
import { clientCredentials } from '../client';

const dbUrl = clientCredentials.databaseUrl;

const getBasket = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/basket/${id}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const getBasketHistory = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/basket.json?orderBy="active"&equalTo=false`)
    .then((baskets) => resolve(Object.values(baskets.data)))
    .catch(reject);
});

const createBasket = (basketObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/basket.json`, basketObj)
    .then((response) => {
      const id = response.data.name;
      axios.patch(`${dbUrl}/basket/${id}.json`, { id })
        .then(() => resolve(id));
    })
    .catch(reject);
});

const updateBasket = (update) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/basket/${update.id}.json`, update)
    .then(resolve)
    .catch(reject);
});

const getActiveBasket = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/basket.json?orderBy="active"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)[0]))
    .catch(reject);
});

const getActiveBaskets = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/basket.json?orderBy="active"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const disableBasket = (id) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/basket/${id}.json`, { active: false })
    .then(resolve)
    .catch(reject);
});

const getBasketByWeek = (week) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/basket.json?orderBy="week"&equalTo=${week}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// eslint-disable-next-line object-curly-newline
export { getActiveBasket, getBasket, updateBasket, createBasket, getActiveBaskets, disableBasket, getBasketByWeek, getBasketHistory };
