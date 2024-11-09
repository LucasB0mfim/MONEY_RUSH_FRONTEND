import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Usuario = {
  id?: string;
  nome: string;
  email: string;
  username: string;
  senha: string;
};

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://money-rush-backend.onrender.com/usuario/',
  }),
  endpoints: (builder) => ({
    cadastrarUsuario: builder.mutation<Usuario, Usuario>({ // Retorna um Usuario
      query: (user) => ({
        url: 'cadastrar',
        method: 'POST',
        body: user,
      }),
    }),
    logarUsuario: builder.mutation<Usuario, { email: string; senha: string }>({ // Retorna um Usuario
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useCadastrarUsuarioMutation, useLogarUsuarioMutation } = api;

export default api;
