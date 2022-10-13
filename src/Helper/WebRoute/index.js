import React, { Component } from 'react';
import {
   BrowserRouter,
   Route,
   Routes
} from 'react-router-dom';
import { AnimationLayout } from './Components/AnimationPage';
import { ProtectedRoute, PublicRoute } from './Components/SpecificRoute';

const LazyDashboardScreen = React.lazy(() => import('../../Screens/DashboardScreen'));
const LazyLoginScreen = React.lazy(() => import('../../Screens/LoginScreen'));
const LazyRegisterScreen = React.lazy(() => import('../../Screens/RegisterScreen'));
const LazyTransferKuotaScreen = React.lazy(() => import('../../Screens/TransferKuotaScreen'));
const LazyForgetPasswordScreen = React.lazy(() => import('../../Screens/ForgotPasswordScreen'));
const LazyNotFoundScreen = React.lazy(() => import('../../Screens/NotFoundScreen'));

export default class WebRoute extends Component {

   _renderBrowserRouter = () => {
      return (
         <BrowserRouter>
            <Routes>
               <Route element={<AnimationLayout />}>

                  <Route
                     path={'/'}
                     element={
                        <PublicRoute>
                           <LazyLoginScreen />
                        </PublicRoute>}
                  >
                     <Route
                        path={'login'}
                        element={
                           <PublicRoute>
                              <LazyLoginScreen />
                           </PublicRoute>
                        }
                     />
                  </Route>

                  <Route
                     path={'/forget-password'}
                     element={
                        <PublicRoute>
                           <LazyForgetPasswordScreen />
                        </PublicRoute>
                     }
                  />

                  <Route
                     path={'/register'}
                     element={
                        <PublicRoute>
                           <LazyRegisterScreen />
                        </PublicRoute>
                     }
                  />

                  <Route
                     path={'/dashboard'}
                     element={
                        <ProtectedRoute>
                           <LazyDashboardScreen />
                        </ProtectedRoute>
                     }
                  />

                  <Route
                     path={'/transfer-kuota'}
                     element={
                        <ProtectedRoute>
                           <LazyTransferKuotaScreen />
                        </ProtectedRoute>
                     }
                  />

                  <Route
                     path={'*'}
                     element={
                        <PublicRoute>
                           <LazyNotFoundScreen />
                        </PublicRoute>
                     }
                  />

               </Route>
            </Routes>
         </BrowserRouter >
      );
   }

   render() {
      return (
         this._renderBrowserRouter()
      );
   }
}