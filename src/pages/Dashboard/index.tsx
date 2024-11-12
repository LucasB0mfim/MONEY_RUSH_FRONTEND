import { Key, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store'
import { setDespesas } from '../../store/reducers/despesaSlice'
import { setUsuario } from '../../store/reducers/usuarioSlice'
import { useObterUsuarioQuery, useBuscarDespesasQuery } from '../../services/api'

import more from '../../assets/images/iconMore.png'
import exit from '../../assets/images/iconExit.png'

import * as S from './styles'

const Dashboard = () => {

  const dispatch = useDispatch()
  const now = new Date()
  const currentTime = now.getHours()
  const [add, setAdd] = useState(true)
  const usuario = useSelector((state: RootState) => state.usuario)
  const usuarioId = useSelector((state: RootState) => state.usuario.id)
  const despesas = useSelector((state: RootState) => state.despesa.despesas)
  const { data: usuarioData, isSuccess: usuarioLoaded } = useObterUsuarioQuery(usuarioId || '')
  const { data: despesasData, isSuccess: despesasLoaded } = useBuscarDespesasQuery(usuarioId || '')

  function period(time: any) {
    if (time >= 6 && time < 12) {
      return "Bom dia, "
    } else if (time >= 12 && time < 18) {
      return "Boa tarde, "
    } else {
      return "Boa noite, "
    }
  }

  const calcularTotalDespesas = (): number => {
    const total = despesas.reduce((acumulador, despesa) => {
      return acumulador + despesa.valor
    }, 0)
    return total;
  }


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
            <p>{period(currentTime)}</p>
            <span>{usuario.username}</span>
          </S.Hello>
          <S.TEST></S.TEST>
          <S.TEST></S.TEST>
          <S.Pay>
          <p>A pagar</p>
          <span>R$ {calcularTotalDespesas().toFixed(2)}</span>
          </S.Pay>
          <S.Add onClick={() => setAdd(!add)}><img src={more} alt='Add new expense'/></S.Add>
        </S.QuickAccess>
        <S.DivBar>
          <S.MoreInfo>
            <S.Bank></S.Bank>
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
        {add ? (
          <></>
        ) : (
          <S.AddExpense>
            <S.DivExpense>
              <h1>Adicionar novo gasto</h1>
              <S.ExitButton onClick={() => setAdd(!add)}><img src={exit} alt='Exit' /></S.ExitButton>
            </S.DivExpense>
            <S.Form>
              <S.Input type="text" placeholder='Digite a categoria' id='categoria' name='categoria' />
              <S.Input type="text" placeholder='Digite sua descrição' id='descricao' name='descricao' />
              <S.Input type="text" placeholder='Digite o valor' id='valor' name='valor' />
              <S.BtnEnter type="button">Cadastrar</S.BtnEnter>
            </S.Form>
          </S.AddExpense>
        )}
      </S.Main>
    </S.Container>
  )
}

export default Dashboard;
