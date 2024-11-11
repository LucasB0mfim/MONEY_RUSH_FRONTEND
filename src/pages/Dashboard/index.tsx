import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store'
import { setDespesas } from '../../store/reducers/despesaSlice'
import { setUsuario } from '../../store/reducers/usuarioSlice'
import { useObterUsuarioQuery, useBuscarDespesasQuery } from '../../services/api'

const Dashboard = () => {

  const dispatch = useDispatch();
  const usuario = useSelector((state: RootState) => state.usuario)
  const usuarioId = useSelector((state: RootState) => state.usuario.id)
  const despesas = useSelector((state: RootState) => state.despesa.despesas)
  const { data: usuarioData, isSuccess: usuarioLoaded } = useObterUsuarioQuery(usuarioId || '')
  const { data: despesasData, isSuccess: despesasLoaded } = useBuscarDespesasQuery(usuarioId || '')

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
  )
}

export default Dashboard;
