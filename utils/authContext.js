/* eslint-disable react/function-component-definition */
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { firebase } from './client';

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userLogged) => {
      if (userLogged) {
        userLogged.getIdToken().then((token) => {
          setUser({
            ...userLogged,
            authToken: token,
          });
        });
      } else {
        setUser(false);
      }
    });
  }, []);

  const userData = useMemo(() => ({
    ...user,
  }), [user]);

  return <AuthContext.Provider value={userData} {...props} />;
};

const AuthConsumer = AuthContext.Consumer;

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a Provider');
  }
  return context;
};

export { AuthProvider, useAuth, AuthConsumer };
