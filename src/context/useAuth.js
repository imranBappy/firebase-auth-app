import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React from "react";

import { createContext, useContext, useEffect, useState } from "react";
import "./firebase";
const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  const signup = async (email, password, username) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: username });
      const user = auth.currentUser;
      await setCurrentUser({ ...user });
    } catch (error) {
      console.log({ error });
    }
  };

  const login = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  };
  const forgetPassword = async (email, password) => {
    return await sendPasswordResetEmail(auth, email, {
      url: "http://localhost:3000/login",
    });
  };
  const logout = (email, password) => {
    return signOut(auth);
  };
  const value = {
    currentUser,
    signup,
    login,
    logout,
    forgetPassword,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
