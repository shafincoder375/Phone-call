// context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, googleProvider } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const register = async (name, email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: name });
    setUser({ ...auth.currentUser });
    navigate('/');
  };

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
    navigate('/');
  };

  const googleSignIn = async () => {
    await signInWithPopup(auth, googleProvider);
    navigate('/');
  };

  const logout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  const value = {
    user,
    register,
    login,
    googleSignIn,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
