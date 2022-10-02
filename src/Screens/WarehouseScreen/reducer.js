import { SET_SELECTED_WAREHOUSE_ID } from '../../Helper/Constants';
import { defaultState } from '../../Helper/Reducer';

export const warehouseReducer = (state = defaultState, action) => {
   switch (action.type) {
      case SET_SELECTED_WAREHOUSE_ID:
         return {
            ...state,
            selectedWarehouseId: action.selectedWarehouseId
         };
      default:
   }
};