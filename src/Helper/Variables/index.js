import { iconAllocatedKuota } from "../../Assets/Shared";

export const pathVariables = [
   {
      'icon': iconAllocatedKuota,
      'route': 'dashboard',
      'onClick': () => { window.location.replace('/dashboard'); }
   },
   {
      'icon': iconAllocatedKuota,
      'route': 'transfer-kuota',
      'onClick': () => { window.location.replace('/transfer-kuota'); }
   },
   {
      'icon': iconAllocatedKuota,
      'route': 'table-user',
      'onClick': () => { window.location.replace('/table-user'); }
   }
];