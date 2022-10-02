import { warehouseReducer } from '../../Screens/WarehouseScreen/reducer';
import {
   SET_WIDTH_LISTENER
} from '../Constants';

const defaultState = {
   widthListener: false,
   selectedWarehouseId: false
};

const appReducer = (state = defaultState, action) => {
   let _state = warehouseReducer(state, action);

   switch (action.type) {
      case SET_WIDTH_LISTENER:
         _state = {
            ...state,
            widthListener: action.widthListener
         };
         break;

      default:
         break;
   }

   state = { ..._state, ..._state };

   return state;
}

const rootReducer = (state, action) => {
   return appReducer(state, action);
}

export { defaultState, rootReducer };