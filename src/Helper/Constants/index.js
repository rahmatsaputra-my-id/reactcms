import { iconAllocatedKuota } from "../../Assets/Shared";

export const env = {
   baseUrl: 'https://api.rahmatsaputra.my.id',
   reactAppReducerKey: 'rahmatsaputra-v1.0'
}

export const SET_WIDTH_LISTENER = 'SET_WIDTH_LISTENER';
export const SET_SELECTED_WAREHOUSE_ID = 'SET_SELECTED_WAREHOUSE_ID';
export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';


export const pathVariables = [
   {
      'icon': iconAllocatedKuota,
      'route': 'dashboard',
      'onPress': () => { window.location.replace('/dashboard'); }
   },
   {
      'icon': iconAllocatedKuota,
      'route': 'transfer-kuota',
      'onPress': () => { window.location.replace('/transfer-kuota'); }
   },
   {
      'icon': iconAllocatedKuota,
      'route': 'table-user',
      'onPress': () => { window.location.replace('/table-user'); }
   },
   {
      'icon': iconAllocatedKuota,
      'route': 'logout',
      'onPress': () => {
         window.location.replace('/login');
      }
   },
];