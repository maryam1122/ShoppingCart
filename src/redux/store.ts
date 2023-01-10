import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';
import themeReducer from './reducers/themeReducer';
import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userReducer';
import categoryReducer from './reducers/categoryReducer';
import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}
const reducers = combineReducers({ productReducer,
  cartReducer,
  themeReducer,
  userReducer,
  categoryReducer,});
const persistedReducer = persistReducer(persistConfig, reducers)
// export const store = configureStore({
//   reducer: {
//     productReducer,
//     cartReducer,
//     themeReducer,
//     userReducer,
//     categoryReducer,
  
//   }
// });
export const createStore = () => {
 return configureStore({
  reducer:persistedReducer,

});
};
 export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
