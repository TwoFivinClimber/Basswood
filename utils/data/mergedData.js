/* eslint-disable camelcase */
/* eslint-disable no-useless-catch */
// eslint-disable-next-line object-curly-newline
import { createBasket, deleteBasket, disableBasket, getActiveBasket, getActiveBaskets, getBasket } from './basket';
import { getSingleVeg } from './veg';
import { createBasketVeg, deleteBasketVeg, getBasketVeg } from './basketVeg';
import { uploadBasketPhoto } from './ cloudinary';

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

const getBasketById = (id) => new Promise((resolve, reject) => {
  getBasket(id).then((basket) => {
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

const createNewWeekBasket = async (basketObj, vegArr, photo) => {
  const activeBaskets = await getActiveBaskets();
  const disable = activeBaskets.map((bskt) => disableBasket(bskt.id));
  Promise.all(disable);
  const cloudResponse = await uploadBasketPhoto(photo);
  const { public_id, url } = cloudResponse.data;
  const fullBasketObj = {
    ...basketObj,
    photo: url,
    cloudId: public_id,
  };
  const bsktId = await createBasket(fullBasketObj);
  const createVeggies = vegArr.map((veg) => createBasketVeg({ veg, basket: bsktId }));
  const result = await Promise.all(createVeggies);
  return result;
};

const deleteFullBasket = async (bsktId) => {
  try {
    const vegArr = await getBasketVeg(bsktId);
    const deleteBsktVeg = vegArr.map((veg) => deleteBasketVeg(veg.id));
    await Promise.all(deleteBsktVeg);
    return deleteBasket(bsktId);
  } catch (error) {
    throw error;
  }
};

export {
  getCurrentBasket, deleteThisBasketVeg, createNewWeekBasket, getBasketById, deleteFullBasket,
};
