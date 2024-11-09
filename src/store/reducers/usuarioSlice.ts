// usuarioSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UsuarioState {
  id: string | null | undefined;
  nome: string | null;
  email: string | null;
}

const initialState: UsuarioState = {
  id: null,
  nome: null,
  email: null,
};

const usuarioSlice = createSlice({
  name: 'usuario',
  initialState,
  reducers: {
    setUsuario: (state, action: PayloadAction<{ nome: string, id: string | null | undefined, email: string }>) => {
      state.nome = action.payload.nome;
      state.id = action.payload.id;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.id = null;
      state.nome = null;
      state.email = null;
    },
  },
});

export const { setUsuario, logout } = usuarioSlice.actions;
export default usuarioSlice.reducer;
