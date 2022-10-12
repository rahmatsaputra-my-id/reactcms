import React from 'react';
import { Navigate } from 'react-router-dom';
import { RootContainer } from '../../../../Components/Lib';
import LoadingScreen from '../../../../Screens/LoadingScreen';

export const ProtectedRoute = ({ children }) => {
   // const accessToken = 'asdasdasd';
   const accessToken = false;

   if (!accessToken) {
      // if user is not have accessToken will redirect to login
      return <Navigate to={'/login'} />
   }

   const screen = (
      <React.Suspense fallback={<LoadingScreen />}>
         <RootContainer children={children} />
      </React.Suspense>
   )

   return screen;
};

export const PublicRoute = ({ children }) => {

   const screen = (
      <React.Suspense fallback={<LoadingScreen />}>
         {children}
      </React.Suspense>
   )

   return screen;
};

