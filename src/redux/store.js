import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { filesSlice } from "./filesSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['filesList'],
};

const persistedFilesReducer = persistReducer(persistConfig, filesSlice.reducer);

export const store = configureStore({
    reducer: {
        files: persistedFilesReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);