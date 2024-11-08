import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import Loader from '../../components/Loader'

import logo from '../../assets/images/logo.png'

import * as S from './styles'

const Cadastro = () => {

  const [register, setRegister] = useState(true)

  const navigate = useNavigate()
  if (register !== true) {
    navigate('/access-account')
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
        <h2>Cadastro</h2>
        <p>Preencha os campos abaixo para se cadastrar</p>
        <S.Form>
          <S.Input type="text" placeholder='Digite seu nome completo'/>
          <S.Input type="text" placeholder='Digite seu e-mail'/>
          <S.Input type="text" placeholder='Digite seu usuario'/>
          <S.Input type="text" placeholder='Digite sua senha' />
          <S.BtnEnter type="button" onClick={ () => setRegister(false)} >{register ? 'Cadastrar' : <Loader />}</S.BtnEnter>
        </S.Form>
      </S.Main>
    </S.Container>
  )
}

export default Cadastro
