import { iconAllocatedKuota } from "../../Assets/Shared";

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