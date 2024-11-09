// usuarioSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UsuarioState {
  id: string | null | undefined;
  nome: string | null;
  email: string | null;
  username: string | null;
}

const initialState: UsuarioState = {
  id: null,
  nome: null,
  email: null,
  username: null,
};

const usuarioSlice = createSlice({
  name: 'usuario',
  initialState,
  reducers: {
    setUsuario: (state, action: PayloadAction<{ nome: string, id: string | null | undefined, email: string, username: string }>) => {
      state.nome = action.payload.nome;
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.username = action.payload.username;
    },
    logout: (state) => {
      state.id = null;
      state.nome = null;
      state.email = null;
      state.username = null;
    },
  },
});

export const { setUsuario, logout } = usuarioSlice.actions;
export default usuarioSlice.reducer;
