import firebase from 'firebase/app';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => new Promise((resolve) => {
  firebase.auth().signOut().then(() => resolve(true)).catch(() => resolve(false));
});

const getUserToken = () => new Promise((resolve) => {
  const loggedUser = firebase.auth().currentUser;
  loggedUser.getIdToken().then((data) => resolve(data));
});

export { signIn, signOut, getUserToken };
