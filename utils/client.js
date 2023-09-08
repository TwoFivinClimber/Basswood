import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const clientCredentials = {
  databaseUrl: process.env.NEXT_PUBLIC_DATABASE_URL,
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  brevoKey: process.env.NEXT_PUBLIC_BREVO_API_KEY,
  adminEmail: process.env.NEXT_PUBLIC_BASSWOOD_EMAIL,
  cloudinaryUrl: process.env.NEXT_PUBLIC_CLOUDINARY_URL,
};

if (!firebase.apps.length) {
  firebase?.initializeApp(clientCredentials);
}

export { firebase, clientCredentials };
