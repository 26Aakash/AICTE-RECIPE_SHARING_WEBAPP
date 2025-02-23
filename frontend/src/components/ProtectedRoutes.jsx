import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const isAuthenticated = true; // Change this based on authentication status
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate('/login');
  }, []);

  return children;
};

export default ProtectedRoutes;
