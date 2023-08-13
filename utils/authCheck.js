/* eslint-disable react-hooks/rules-of-hooks */
import getAdminPersonnel from './data/admin';
import { signOut } from './auth';

const authCheck = (userId) => new Promise((resolve) => {
  getAdminPersonnel().then((adminObj) => {
    if (!Object.values(adminObj).includes(userId)) {
      signOut();
      resolve(false);
    } else {
      resolve(true);
    }
  });
});

export default authCheck;
