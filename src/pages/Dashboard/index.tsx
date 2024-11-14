import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store'
import { setDespesas } from '../../store/reducers/despesaSlice'
import { setUsuario } from '../../store/reducers/usuarioSlice'
import { useObterUsuarioQuery, useBuscarDespesasQuery } from '../../services/api'

import more from '../../assets/images/iconMore.png'
import extrato from '../../assets/images/iconExtrato.png'

import * as S from './styles'
import CadastrarGasto from '../../components/CadastrarGasto'

const Dashboard = () => {

  const dispatch = useDispatch()
  const now = new Date()
  const currentTime = now.getHours()
  const [add, setAdd] = useState(false)
  const usuario = useSelector((state: RootState) => state.usuario)
  const usuarioId = useSelector((state: RootState) => state.usuario.id)
  const despesas = useSelector((state: RootState) => state.despesa.despesas)
  const { data: usuarioData, isSuccess: usuarioLoaded } = useObterUsuarioQuery(usuarioId || '')
  const { data: despesasData, isSuccess: despesasLoaded } = useBuscarDespesasQuery(usuarioId || '');

  function period(time: any) {
    if (time >= 6 && time < 12) {
      return "Bom dia, "
    } else if (time >= 12 && time < 18) {
      return "Boa tarde, "
    } else {
      return "Boa noite, "
    }
  }

  const gastoTotal = (): number => {
    const total = despesas.reduce((acumulador, despesa) => {
      return acumulador + despesa.valor
    }, 0)
    return total;
  }

  const limiteTotal = (): any => {
    if (usuario.salario !== null) {
      let salario = usuario.salario
      const restante = salario - gastoTotal()
      return restante
    }
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
    <>
      {add ? (
        <CadastrarGasto onClose={() => setAdd(false)} />
      ) : (
        <S.Container>
          <S.Main>
            <S.QuickAccess>
              <S.Hello>
                <p>{period(currentTime)}</p>
                <span>{usuario.username}</span>
              </S.Hello>
              <S.Historical>
                <p>Exibir histórico</p>
                <img src={extrato} alt='Extrato'/>
              </S.Historical>
              <S.Limit>
                <p>Limite mensal</p>
                <span>{limiteTotal()}</span>
              </S.Limit>
              <S.Pay>
                <p>A pagar</p>
                <span>R$ {gastoTotal().toFixed(2)}</span>
              </S.Pay>
              <S.Add onClick={() => setAdd(true)}>
                <img src={more} alt='Add new expense' />
              </S.Add>
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
          </S.Main>
        </S.Container>
      )}
    </>
  )
}

export default Dashboard;
