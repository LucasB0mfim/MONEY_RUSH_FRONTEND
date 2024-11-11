import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store'
import { setDespesas } from '../../store/reducers/despesaSlice'
import { setUsuario } from '../../store/reducers/usuarioSlice'
import { useObterUsuarioQuery, useBuscarDespesasQuery } from '../../services/api'

import more from '../../assets/images/moreIcon.png'

import * as S from './styles'

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
    <S.Container>
      <S.Main>
        <S.QuickAccess>
          <S.Hello>
            <p>Olá, {usuario.username}</p>
            <span>Salário atual: {usuario.salario}</span>
          </S.Hello>
          <S.Add>
            <img src={more} alt="Add new expense" />
            <p>Adicionar gasto</p>
          </S.Add>
        </S.QuickAccess>
        <S.DivBar>
          <S.MoreInfo>
            <S.Pay></S.Pay>
            <S.Bank></S.Bank>
          </S.MoreInfo>
          <S.Expenses>
            <ul>
              {despesas.map((despesa) => (
                <li key={despesa.id}>
                  <S.Data>
                    <S.Span>{despesa.categoria}</S.Span>
                    <S.Span>{despesa.descricao}</S.Span>
                    <S.Span>R$ {despesa.valor}</S.Span>
                  </S.Data>
                  <S.Row></S.Row>
                </li>
              ))}
            </ul>
          </S.Expenses>
        </S.DivBar>
      </S.Main>
    </S.Container>
  )
}

export default Dashboard;
