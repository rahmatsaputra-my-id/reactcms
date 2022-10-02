
import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { env } from '../Constants';
import { defaultState, rootReducer } from '../Reducer';

let reducer = false;

reducer = persistReducer(
   {
      key: env.reactAppReducerKey,
      timeout: 60000,
      storage: AsyncStorage,
   },
   rootReducer
)

const store = createStore(
   reducer,
   defaultState
);

const persistor = persistStore(store);
export { persistor, store };