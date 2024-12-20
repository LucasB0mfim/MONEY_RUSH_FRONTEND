import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store'
import { setDespesas } from '../../store/reducers/despesaSlice'
import { setUsuario } from '../../store/reducers/usuarioSlice'
import { useObterUsuarioQuery, useBuscarDespesasQuery } from '../../services/api'

import more from '../../assets/images/iconMore.png'
import extrato from '../../assets/images/iconExtrato.png'
import setaRight from '../../assets/images/iconSetaRight.png'
import setaLeft from '../../assets/images/iconSetaLeft.png'

import * as S from './styles'
import CadastrarGasto from '../../components/CadastrarGasto'

const Dashboard = () => {
  const dispatch = useDispatch()
  const now = new Date()
  const currentTime = now.getHours()

  const [add, setAdd] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(now.getMonth())
  const [currentYear, setCurrentYear] = useState(now.getFullYear()) // Adicionando o controle de ano
  const usuario = useSelector((state: RootState) => state.usuario)
  const usuarioId = useSelector((state: RootState) => state.usuario.id)
  const despesas = useSelector((state: RootState) => state.despesa.despesas)
  const { data: usuarioData, isSuccess: usuarioLoaded } = useObterUsuarioQuery(usuarioId || '')
  const { data: despesasData, isSuccess: despesasLoaded } = useBuscarDespesasQuery(usuarioId || '')

  function PeriodoAndGradiente(time: number) {
    if (currentTime >= 1 && currentTime < 12) {
      return {
        period: "Bom dia, ",
        gradient: "linear-gradient(to right, #FFFAE3, #D9E8FF)"
      }
    } else if (currentTime >= 12 && currentTime < 18) {
      return {
        period: "Boa tarde, ",
        color: "#3b3b3b",
        gradient: "linear-gradient(to right, #FFB547, #FFD97D)"
      }
    } else {
      return {
        period: "Boa noite, ",
        color: "#FFF",
        gradient: "linear-gradient(to right, #4A6D8C, #2C3E50)"
      }
    }
  }
  const { period, gradient } = PeriodoAndGradiente(currentTime)
  const { color } = PeriodoAndGradiente(currentTime)

  const filtrarDespesasPorMes = (despesas: any[]) => {
    return despesas.filter(despesa => {
      const despesaDate = new Date(despesa.data)
      return despesaDate.getMonth() === currentMonth && despesaDate.getFullYear() === currentYear
    })
  }

  const gastoTotal = (): number => {
    const despesasFiltradas = filtrarDespesasPorMes(despesas)
    const total = despesasFiltradas.reduce((acumulador, despesa) => {
      return acumulador + Number(despesa.valor)
    }, 0)
    return total
  }

  const limiteTotal = (): any => {
    if (usuario.salario !== null) {
      const salario = usuario.salario
      const restante = salario - gastoTotal()
      return restante.toFixed(2)
    }
  }

  const mudarMes = (incremento: number) => {
    setCurrentMonth(prevMonth => {
      let newMonth = prevMonth + incremento
      let newYear = currentYear

      if (newMonth < 0) {
        newMonth = 11
        newYear -= 1
      } else if (newMonth > 11) {
        newMonth = 0
        newYear += 1
      }

      setCurrentYear(newYear)
      return newMonth
    })
  }

  useEffect(() => {
    if (usuarioLoaded && usuarioData) {
      dispatch(setUsuario(usuarioData))
    }
  }, [usuarioLoaded, usuarioData, dispatch])

  useEffect(() => {
    if (despesasLoaded && despesasData) {
      dispatch(setDespesas(despesasData))
    }
  }, [despesasLoaded, despesasData, dispatch])

  return (
    <>
      {add ? (
        <CadastrarGasto onClose={() => setAdd(false)} />
      ) : (
        <S.Container>
          <S.Main>
            <S.QuickAccess>
              <S.Hello style={{ background: gradient }}>
                <p style={{ color: color }}>{period}</p>
                <span style={{ color: color }}>{usuario.username}</span>
              </S.Hello>
              <S.Historical>
                <p>Exibir histórico</p>
                <img src={extrato} alt="Extrato" />
              </S.Historical>
              <S.Limit>
                <p>Saldo atual</p>
                <span>R$ {limiteTotal()}</span>
              </S.Limit>
              <S.Pay>
                <p>Despesa atual</p>
                <span>R$ {gastoTotal().toFixed(2)}</span>
              </S.Pay>
              <S.Add onClick={() => setAdd(true)}>
                <img src={more} alt="Add new expense" />
              </S.Add>
            </S.QuickAccess>
            <S.DivBar>
              <S.MoreInfo>
                <S.Bank></S.Bank>
                <S.Bank></S.Bank>
              </S.MoreInfo>
              <S.Expenses>
                <S.Mouth>
                  <S.BtnMouth onClick={() => mudarMes(-1)}>
                    <img src={setaLeft} alt='Previous' />
                  </S.BtnMouth>
                  {/* Ajuste para exibir o mês e ano atuais com base no estado */}
                  <span>{`${new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} ${currentYear}`}</span>
                  <S.BtnMouth onClick={() => mudarMes(1)}>
                    <img src={setaRight} alt='Next' />
                  </S.BtnMouth>
                </S.Mouth>
                <ul>
                  {filtrarDespesasPorMes(despesas).map((despesa) => (
                    <li key={despesa.id}>
                      <S.Data>
                        <S.Span style={{ width: '10%', textAlign: 'start' }}>{despesa.categoria}</S.Span>
                        <S.Span style={{ width: '80%', textAlign: 'center' }}>{despesa.descricao}</S.Span>
                        <S.Span style={{ width: '10%', textAlign: 'end' }}>R$ {despesa.valor}</S.Span>
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

export default Dashboard
