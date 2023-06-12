import axios from 'axios';

const dbUrl = 'https://basswood-b5622-default-rtdb.firebaseio.com';

const getBasket = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/basket/${id}.json`)
    .then(resolve)
    .catch(reject);
});

// const getBasketByWeek = (week) => new Promise((resolve, reject) => {
//   axios.get(`${dbUrl}/basket.json?orderBy="week"&equalTo=${week}`)
//     .then((data) => resolve(data))
//     .catch(reject);
// });

const getActiveBasket = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/basket.json?orderBy="active"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)[0]))
    .catch(reject);
});

// eslint-disable-next-line import/prefer-default-export
export { getActiveBasket, getBasket };
