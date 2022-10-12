import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { LoadingSpinner, RootContainer } from '../../../../Components/Lib';

export const ProtectedRoute = ({ children }) => {
   const reduxState = useSelector(state => state);
   const { accessToken } = reduxState;

   if (!accessToken) {
      // if user is not have accessToken will redirect to login
      return <Navigate to={'/login'} />
   }

   const screen = (
      <React.Suspense fallback={<LoadingSpinner page />}>
         <RootContainer children={children} />
      </React.Suspense>
   )

   return screen;
};

export const PublicRoute = ({ children }) => {

   const screen = (
      <React.Suspense fallback={<LoadingSpinner page />}>
         {children}
      </React.Suspense>
   )

   return screen;
};

