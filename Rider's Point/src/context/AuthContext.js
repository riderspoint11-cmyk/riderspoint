import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';
import { getUserData, registerUser, loginUser, logoutUser } from '../firebase/auth';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        const result = await getUserData(firebaseUser.uid);
        if (result.success) {
          setUserData(result.userData);
        }
      } else {
        setUser(null);
        setUserData(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signup = async (formData) => {
    return await registerUser(formData);
  };

  const login = async (email, password) => {
    return await loginUser(email, password);
  };

  const logout = async () => {
    const result = await logoutUser();
    if (result.success) {
      setUser(null);
      setUserData(null);
    }
    return result;
  };

  const value = {
    user,
    userData,
    signup,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
    isCustomer: userData?.role === 'customer',
    isPartner: userData?.role === 'partner',
    isAdmin: userData?.role === 'admin'
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
