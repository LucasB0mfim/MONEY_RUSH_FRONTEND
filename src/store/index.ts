import { configureStore } from '@reduxjs/toolkit';
import usuarioReducer from './reducers/usuarioSlice';
import api from '../services/api';

export const store = configureStore({
  reducer: {
    usuario: usuarioReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>; // Definição correta do tipo RootState
export type AppDispatch = typeof store.dispatch;
