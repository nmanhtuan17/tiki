import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { persistStore, persistReducer} from "redux-persist"
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

import storage from 'redux-persist/lib/storage';
import {appSlice, AppSliceState} from "./slices/app.slice.ts";

export const reducers = combineReducers({
  app: appSlice.reducer
})

const persistConfig = {
  key: 'root',
  storage: storage,
  timeout: 100000,
  whiteList: ['app'],
}
const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: false,
    })
})

const persistor = persistStore(store)

export interface RootState {
  app: AppSliceState
}
export const useAppDispatch = () => useDispatch()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export {store, persistor}

