import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { RootState } from '../../store'
import Loader from '../../components/Loader'

import wallet from '../../assets/images/whiteWallet.png'

import * as S from '../../styles'

const Cadastrado = () => {

  const navigate = useNavigate()
  const [login, setLogin] = useState(true)
  const usuario = useSelector((state: RootState) => state.usuario);

  useEffect( () => {
    if (!usuario.id) {
      navigate('/access-account')
    }
  }, [usuario.id, navigate])

  if (!login) {
    navigate('/access-account')
  }

  return (
    <S.Container>
      <S.Aside>
        <S.DivLogo>
          <img src={wallet} alt="Icon" />
          <h1>MONEYRUSH</h1>
        </S.DivLogo>
        <p>O JEITO MAIS INTELIGENTE<br />DE CONTROLAR OS<br />GASTOS</p>
      </S.Aside>
      <S.Main>
        <h2>Bem vindo!</h2>
        <p>Sua conta foi criada com sucesso! Agora faça o seu login.</p>
        <S.Form>
          <S.BtnEnter type="submit" onClick={() => setLogin(false)}>{login ? 'Login' : <Loader />}</S.BtnEnter>
        </S.Form>
      </S.Main>
    </S.Container>
  )
}

export default Cadastrado
