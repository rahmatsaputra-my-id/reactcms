import React, { Component } from 'react';
import {
   BrowserRouter,
   Route,
   Routes
} from 'react-router-dom';
import { RootContainer } from '../../Components/Lib';
import {
   DashboardScreen,
   TransferKuotaScreen,
   WarehouseDetailScreen,
   WarehouseScreen
} from '../../Screens';
import LoginScreen from '../../Screens/LoginScreen';

export default class Navigator extends Component {

   _renderRootContainer = () => {
      return (
         <RootContainer
            children={this._renderBrowserRouter()}
         />
      );
   }

   _renderBrowserRouter = () => {
      return (
         <BrowserRouter>
            <Routes>
               {/* <Route
                  path='/login'
                  element={<LoginScreen />}
               /> */}
               <Route
                  path='/'
                  element={<DashboardScreen />}
               />
               <Route
                  path='/dashboard'
                  element={<DashboardScreen />}
               />
               <Route
                  path='/transfer-kuota'
                  element={<TransferKuotaScreen />}
               />
               <Route
                  path={'/warehouse'}
                  element={<WarehouseScreen />}
               />
               <Route
                  path='/warehouse/detail-location-warehouse-retail'
                  element={<WarehouseDetailScreen />}
               />
            </Routes>
         </BrowserRouter>
      );
   }

   _renderLogin = () => {
      return (
         <LoginScreen />
      );
   }

   render() {
      // const isHaveAuth = true;
      const isHaveAuth = false;

      return (
         isHaveAuth
            ? this._renderRootContainer()
            : this._renderLogin()
      );
   }
}