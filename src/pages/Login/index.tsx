import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { useFormik } from 'formik'

import Loader from '../../components/Loader'

import wallet from '../../assets/images/whiteWallet.png'

import * as S from '../../styles'

const Login = () => {

  const navigate = useNavigate()
  const [access, setAccess] = useState(true)
  const [create, setCreate] = useState(true)

  const form = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object({
      email: yup.string().email('Você precisa inserir um e-mail válido.').required('Insira seu endereço de e-mail'),
      password: yup.string().min(8, 'Exemplo de senha: M0n£yRush#').required('Insira sua senha')
    }),
    onSubmit: (values) => {
      setAccess(false)
      console.log(values)
    }
  })

  useEffect( () => {
    if (!access) {
      navigate('/home/{id}')
    } else if (!create) {
      navigate('/create-account')
    }
  }, [create, access, navigate])

  return (
    <S.Container>
      <S.Aside>
        <S.DivLogo>
          <img src={wallet} alt="Icon" />
          <h1>MONEYRUSH</h1>
        </S.DivLogo>
        <p>O JEITO MAIS INTELIGENTE<br />DE CONTROLAR OS<br />GASTOS</p>
      </S.Aside>
      <S.Main isError={Object.keys(form.values).length > 0}>
        <h2>Login</h2>
        <p>Preencha os campos abaixo com os seus dados de acesso</p>
        <S.Form onSubmit={form.handleSubmit} isError={Object.keys(form.values).length > 0}>
          <S.Input type="email" placeholder='Digite seu e-mail' id='email' name='email' value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} isError={!!(form.touched.email && form.errors.email)} />
          {form.touched.email && form.errors.email && <S.Error>{form.errors.email}</S.Error>}

          <S.Input type="password" placeholder='Digite sua senha' id='password' name='password' value={form.values.password} onChange={form.handleChange} onBlur={form.handleBlur} isError={!!(form.touched.password && form.errors.password)} />
          {form.touched.password && form.errors.password && <S.Error>{form.errors.password}</S.Error>}

          <S.BtnEnter type="submit">{access ? 'Entrar' : <Loader /> }</S.BtnEnter>
          <S.BtnCreate type="button" onClick={ () => setCreate(false)}>{create ? 'Criar minha conta' : <Loader />}</S.BtnCreate>
        </S.Form>
      </S.Main>
    </S.Container>
  )
}

export default Login
