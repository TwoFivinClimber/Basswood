const dbUrl = 'https://basswood-b5622-default-rtdb.firebaseio.com';

const getVeggies = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/veg.json`)
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// eslint-disable-next-line import/prefer-default-export
export { getVeggies };
