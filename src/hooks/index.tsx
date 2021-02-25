import React from 'react';
// import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

// um Provider global
const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>{children}</ToastProvider>
);

export default AppProvider;
