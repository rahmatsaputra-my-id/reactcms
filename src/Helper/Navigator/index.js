import React, { Component } from 'react';
import {
   BrowserRouter,
   Route,
   Routes
} from 'react-router-dom';
import {
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
                  element={<TransferKuotaScreen />}
               />
               <Route
                  path='/home/erp/transfer-kuota'
                  element={<TransferKuotaScreen />}
               />
               <Route
                  path={'/home/erp/warehouse'}
                  element={<WarehouseScreen />}
               />
               <Route
                  path='/home/erp/warehouse/detail-location-warehouse-retail'
                  element={<WarehouseDetailScreen />}
               />
            </Routes>
         </BrowserRouter>
      );
   }
}  