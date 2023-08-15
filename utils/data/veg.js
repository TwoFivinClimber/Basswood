/* eslint-disable object-curly-newline */
import axios from 'axios';
import { clientCredentials, firebase } from '../client';

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

const getBasketVeg = (bsktId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/bsktVeg.json?orderBy="basket"&equalTo="${bsktId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const updateVeg = (input) => new Promise((resolve, reject) => {
  const loggedUser = firebase.auth().currentUser;
  loggedUser.getIdToken().then((data) => {
    axios.patch(`${dbUrl}/veg/${input.id}.json?auth=${data}`, input)
      .then(resolve)
      .catch(reject);
  });
});

const createVeg = (input) => new Promise((resolve, reject) => {
  const loggedUser = firebase.auth().currentUser;
  loggedUser.getIdToken().then((data) => {
    axios.post(`${dbUrl}/veg.json?auth=${data}`, input)
      .then((response) => {
        const id = response.data.name;
        const update = { id };
        axios.patch(`${dbUrl}/veg/${id}.json?auth=${data}`, update)
          .then(resolve);
      })
      .catch((error) => reject((error)));
  });
});

const deleteVeg = (id) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/veg/${id}.json`)
    .then(resolve)
    .catch(reject);
});

export { getVeggies, getSingleVeg, getBasketVeg, createVeg, updateVeg, deleteVeg };
