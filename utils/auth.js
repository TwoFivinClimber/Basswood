import firebase from 'firebase/app';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => new Promise((resolve) => {
  firebase.auth().signOut().then(() => resolve(true)).catch(() => resolve(false));
});

export { signIn, signOut };
