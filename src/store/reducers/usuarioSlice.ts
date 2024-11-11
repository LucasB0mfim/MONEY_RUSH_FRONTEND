// usuarioSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UsuarioState = {
  id: string | null;
  nome: string | null;
  email: string | null;
  username: string | null;
  salario: number | null;
};

const initialState: UsuarioState = {
  id: null,
  nome: null,
  email: null,
  username: null,
  salario: null,
};

const usuarioSlice = createSlice({
  name: 'usuario',
  initialState,
  reducers: {
    setUsuario: (state, action: PayloadAction<UsuarioState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUsuario } = usuarioSlice.actions;
export default usuarioSlice.reducer;
