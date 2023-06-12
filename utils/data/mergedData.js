import { getActiveBasket } from './basket';
import { getBasketVeg, getSingleVeg, deleteBasketVeg } from './veg';

const getCurrentBasket = () => new Promise((resolve, reject) => {
  getActiveBasket().then((basket) => {
    getBasketVeg(basket.id).then((bsktArr) => {
      const getTheVeggies = bsktArr.map((i) => getSingleVeg(i.veg));
      Promise.all(getTheVeggies).then((vegArr) => {
        resolve({ ...basket, veg: vegArr });
      });
    });
  }).catch(reject);
});

const deleteThisBasketVeg = (bsktId, vegId) => new Promise((resolve, reject) => {
  getBasketVeg(bsktId).then((vegArr) => {
    const deleteVeg = vegArr.find((i) => i.veg === vegId);
    deleteBasketVeg(deleteVeg.id).then(resolve);
  })
    .catch(reject);
});

// eslint-disable-next-line import/prefer-default-export
export { getCurrentBasket, deleteThisBasketVeg };
