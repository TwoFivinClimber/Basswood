import axios from 'axios';

const dbUrl = 'https://basswood-b5622-default-rtdb.firebaseio.com';

const createBasketVeg = (bsktVeg) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/bsktVeg.json`, bsktVeg)
    .then((response) => {
      const id = response.data.name;
      const update = { id };
      axios.patch(`${dbUrl}/bsktVeg/${id}.json`, update)
        .then(resolve);
    })
    .catch(reject);
});

const deleteBasketVeg = (id) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/bsktVeg/${id}.json`)
    .then(resolve)
    .catch(reject);
});

// eslint-disable-next-line import/prefer-default-export
export { createBasketVeg, deleteBasketVeg };
