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
    baseUrl: 'http://localhost:8080/usuario/',
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
        url: 'login', // Chama a rota de login no backend
        method: 'POST',
        body: credentials, // Envia o email e senha
      }),
    }),
  }),
});

export const { useCadastrarUsuarioMutation, useLogarUsuarioMutation } = api;

export default api;
