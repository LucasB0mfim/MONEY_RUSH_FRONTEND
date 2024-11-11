import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'
import usuarioReducer from './reducers/usuarioSlice'
import despesaReducer from './reducers/despesaSlice'

export const store = configureStore({
  reducer: {
    usuario: usuarioReducer,
    despesa: despesaReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
