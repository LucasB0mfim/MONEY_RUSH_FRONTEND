import { useEffect, useState } from 'react'
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
          <S.ContainerExpense>
            <S.AddExpense>
              <S.DivExpense>
                <div>
                  <h2>Adicionar novo<br />gasto</h2>
                  <S.ExitButton onClick={() => setAdd(!add)}><img src={exit} alt='Exit' /></S.ExitButton>
                </div>
                <S.Form>
                  <S.Select id="category" name="category" required>
                      <S.option disabled selected>Categoria</S.option>
                      <S.option value="EDUCACAO">EDUCACAO</S.option>
                      <S.option value="ALIMENTACAO">ALIMENTACAO</S.option>
                      <S.option value="LAZER">LAZER</S.option>
                      <S.option value="FASTFOOD">FASTFOOD</S.option>
                      <S.option value="MORADIA">MORADIA</S.option>
                      <S.option value="SAUDE">SAUDE</S.option>
                      <S.option value="SERVICO">SERVICO</S.option>
                  </S.Select>
                  <S.Input type="text" id="description" name="description" placeholder="Descreva o gasto" required />
                  <S.Input type="number" id="value" name="value" placeholder="Digite o valor" step="0.01" required />
                  <S.Input type="number" id="quantity" name="quantity" placeholder="Digite a quantidade" required min="1" />
                  <S.Btn type="submit">Adicionar</S.Btn>
                </S.Form>
              </S.DivExpense>
            </S.AddExpense>
          </S.ContainerExpense>
        )}
      </S.Main>
    </S.Container>
  )
}

export default Dashboard;
