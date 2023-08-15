import axios from 'axios';
import { clientCredentials, firebase } from '../client';

const dbUrl = clientCredentials.databaseUrl;

const checkAdmin = () => new Promise((resolve) => {
  const loggedUser = firebase.auth().currentUser;
  loggedUser.getIdToken().then((data) => {
    axios.get(`${dbUrl}/admin.json?auth=${data}`)
      .then((response) => resolve(response))
      .catch((error) => resolve(error));
  });
});

export default checkAdmin;
