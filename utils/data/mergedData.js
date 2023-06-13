// eslint-disable-next-line object-curly-newline
import { createBasket, disableBasket, getActiveBasket, getActiveBaskets } from './basket';
import { getBasketVeg, getSingleVeg } from './veg';
import { createBasketVeg, deleteBasketVeg } from './basketVeg';

const getCurrentBasket = () => new Promise((resolve, reject) => {
  getActiveBasket().then((basket) => {
    if (basket) {
      getBasketVeg(basket.id).then((bsktArr) => {
        const getTheVeggies = bsktArr.map((i) => getSingleVeg(i.veg));
        Promise.all(getTheVeggies).then((vegArr) => {
          resolve({ ...basket, veg: vegArr });
        });
      });
    } else {
      resolve({});
    }
  }).catch(reject);
});

const deleteThisBasketVeg = (bsktId, vegId) => new Promise((resolve, reject) => {
  getBasketVeg(bsktId).then((vegArr) => {
    const deleteVeg = vegArr.find((i) => i.veg === vegId);
    deleteBasketVeg(deleteVeg.id).then(resolve);
  })
    .catch(reject);
});

const createNewWeekBasket = (basketObj, vegArr) => new Promise((resolve, reject) => {
  getActiveBaskets().then((basketsArr) => {
    const disable = basketsArr.map((bskt) => disableBasket(bskt.id));
    Promise.all(disable).then(() => {
      createBasket(basketObj).then((bsktId) => {
        const createVeggies = vegArr.map((veg) => createBasketVeg({ veg, basket: bsktId }));
        Promise.all(createVeggies).then(resolve);
      }).catch(reject);
    });
  });
});

// eslint-disable-next-line import/prefer-default-export
export { getCurrentBasket, deleteThisBasketVeg, createNewWeekBasket };
