import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const PartnerRoute = ({ children }) => {
  const { isAuthenticated, isPartner } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  if (!isPartner) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return children;
};

export default PartnerRoute;
