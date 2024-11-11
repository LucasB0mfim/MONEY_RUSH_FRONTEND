// Home.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useObterUsuarioQuery, useBuscarDespesasQuery } from '../../services/api';
import { setUsuario } from '../../store/reducers/usuarioSlice';
import { setDespesas } from '../../store/reducers/despesaSlice';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  // Id do usuário logado, que normalmente é obtido após o login
  const usuarioId = useSelector((state: RootState) => state.usuario.id);

  const { data: usuarioData, isSuccess: usuarioLoaded } = useObterUsuarioQuery(usuarioId || '');
  const { data: despesasData, isSuccess: despesasLoaded } = useBuscarDespesasQuery(usuarioId || '');

  useEffect(() => {
    if (usuarioLoaded && usuarioData) {
      dispatch(setUsuario(usuarioData));
    }
  }, [usuarioLoaded, usuarioData, dispatch]);

  useEffect(() => {
    if (despesasLoaded && despesasData) {
      dispatch(setDespesas(despesasData));
    }
  }, [despesasLoaded, despesasData, dispatch]);

  const usuario = useSelector((state: RootState) => state.usuario);
  const despesas = useSelector((state: RootState) => state.despesa.despesas);

  return (
    <div>
      <h1>Bem-vindo, {usuario.nome}</h1>
      <p>Email: {usuario.email}</p>
      <p>Salário: {usuario.salario}</p>

      <h2>Despesas</h2>
      <ul>
        {despesas.map((despesa) => (
          <li key={despesa.id}>
            {despesa.descricao} - {despesa.categoria} - R${despesa.valor} ({despesa.quantidade} unidades)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
