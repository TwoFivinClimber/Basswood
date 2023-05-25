import axios from 'axios';

const dbUrl = 'https://basswood-b5622-default-rtdb.firebaseio.com';

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

export { getVeggies, getSingleVeg, getBasketVeg };
