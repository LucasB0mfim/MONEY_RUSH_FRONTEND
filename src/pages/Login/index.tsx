import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Loader from '../../components/Loader'

import logo from '../../assets/images/logo.png'

import * as S from './styles'

const Login = () => {

  const navigate = useNavigate()

  const [access, setAccess] = useState(true)

  const createAccount = () => {
    navigate('/create-account')
  }

  return (
    <S.Container>
      <S.Aside>
        <S.DivLogo>
          <img src={logo} alt="Rocket" />
          <h1>MONEY RUSH</h1>
        </S.DivLogo>
        <h2>O JEITO MAIS INTELIGENTE DE CONTROLAR OS GASTOS</h2>
      </S.Aside>
      <S.Main>
        <h2>Login</h2>
        <p>Preencha os campos abaixo com os seus dados de acesso</p>
        <S.Form>
          <S.Input type="text" placeholder='Digite seu usuario'/>
          <S.Input type="text" placeholder='Digite sua senha' />
          <S.BtnEnter type="button" onClick={ () => setAccess(false)}>{access ? 'Entrar' : <Loader /> }</S.BtnEnter>
          <S.BtnCreate type="button" onClick={createAccount}>Criar minha conta</S.BtnCreate>
        </S.Form>
      </S.Main>
    </S.Container>
  )
}

export default Login
