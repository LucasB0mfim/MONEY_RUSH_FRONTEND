import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Usuario = {
  id: string;
  nome: string;
  email: string;
  username: string;
  salario: number;
}

type Despesa = {
  id: string;
  descricao: string;
  valor: string;
  quantidade: string;
  data: string;
  categoria: string;
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://money-rush-backend.onrender.com/',
  }),
  endpoints: (builder) => ({
    cadastrarUsuario: builder.mutation<Usuario, Usuario>({
      query: (user) => ({
        url: 'usuario/cadastrar',
        method: 'POST',
        body: user,
      }),
    }),
    cadastrarDespesa: builder.mutation<Despesa, { usuarioId: string; despesa: Despesa }>({
      query: ({ usuarioId, despesa }) => ({
        url: `despesa/cadastrar/${usuarioId}`,
        method: 'POST',
        body: despesa,
      }),
    }),
    logarUsuario: builder.mutation<Usuario, { email: string; senha: string }>({
      query: (credentials) => ({
        url: 'usuario/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    obterUsuario: builder.query<Usuario, string>({
      query: (id) => `usuario/buscar/${id}`,
    }),
    buscarDespesas: builder.query<Despesa[], string>({
      query: (usuarioId) => `despesa/buscar/${usuarioId}`,
    })
  })
})

export const {
  useCadastrarUsuarioMutation,
  useLogarUsuarioMutation,
  useObterUsuarioQuery,
  useBuscarDespesasQuery,
  useCadastrarDespesaMutation
} = api

export default api
