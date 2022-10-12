import React from 'react';
import View from '../View';
import './index.css';

export default function LoadingSpinner({ page = false }) {
   const _renderSpinnerComponent = (
      <View>
         <div className='loading-spinner' />
      </View>
   )

   const _renderSpinnerPage = (
      <View style={{
         justifyContent: 'center',
         alignItems: 'center',
         height: window.innerHeight,
      }}>
         <View>
            <div className='loading-spinner-page' />
         </View>
      </View >
   )

   return (
      page ? _renderSpinnerPage : _renderSpinnerComponent
   );
}