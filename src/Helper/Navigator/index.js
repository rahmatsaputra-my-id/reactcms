import React, { Component } from 'react';
import {
   BrowserRouter,
   Route,
   Routes
} from 'react-router-dom';
import {
   DashboardScreen,
   TransferKuotaScreen,
   WarehouseDetailScreen,
   WarehouseScreen
} from '../../Screens';

export default class Navigator extends Component {
   render() {
      return (
         <BrowserRouter>
            <Routes>
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
}