import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'

import Loader from '../../components/Loader'

import wallet from '../../assets/images/whiteWallet.png'

import * as S from '../../styles'

const Cadastro = () => {

  const [register, setRegister] = useState(true)
  const navigate = useNavigate()

  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      username: '',
      password: ''
    },
    validationSchema: yup.object({
      name: yup.string().min(3, 'Você precisa o seu nome completo.').required('Insira seu nome completo.'),
      email: yup.string().email('Você precisa inserir um e-mail válido.').required('Insira seu endereço de e-mail.'),
      username: yup.string().min(3, 'Você precisa inserir um usuário válido.').required('Insira seu usuário.'),
      password: yup.string().min(8, 'Exemplo de senha: M0n£yRush#').required('Insira sua senha.'),
    }),
    onSubmit: () => {
      setRegister(false)
    }
  })

  useEffect( () => {
    if (!register) {
      navigate('/access-account')
    }
  }, [register, navigate])

  return (
    <S.Container>
      <S.Aside>
        <S.DivLogo>
          <img src={wallet} alt="Icon" />
          <h1>MONEYRUSH</h1>
        </S.DivLogo>
        <p>O JEITO MAIS INTELIGENTE<br />DE CONTROLAR OS<br />GASTOS</p>
      </S.Aside>
      <S.Main isError={Object.keys(form.errors).length > 0}>
        <h2>Cadastro</h2>
        <p>Preencha os campos abaixo para se cadastrar</p>
        <S.Form onSubmit={form.handleSubmit} isError={Object.keys(form.errors).length > 0}>
          <S.Input type="text" placeholder='Digite seu nome completo' id='name' name='name' value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur} isError={!!(form.touched.name && form.errors.name)} />
          {form.touched.name && form.errors.name && <S.Error>{form.errors.name}</S.Error>}

          <S.Input type="email" placeholder='Digite seu e-mail' id='email' name='email' value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} isError={!!(form.touched.email && form.errors.email)} />
          {form.touched.email && form.errors.email && <S.Error>{form.errors.email}</S.Error>}

          <S.Input type="text" placeholder='Digite seu usuario' id='username' name='username' value={form.values.username} onChange={form.handleChange} onBlur={form.handleBlur} isError={!!(form.touched.username && form.errors.username)} />
          {form.touched.username && form.errors.username && <S.Error>{form.errors.username}</S.Error>}

          <S.Input type="password" placeholder='Digite sua senha' id='password' name='password' value={form.values.password} onChange={form.handleChange} onBlur={form.handleBlur} isError={!!(form.touched.password && form.errors.password)} />
          {form.touched.password && form.errors.password && <S.Error>{form.errors.password}</S.Error>}

          <S.BtnCreate type="submit">{register ? 'Cadastrar' : <Loader />}</S.BtnCreate>
        </S.Form>
      </S.Main>
    </S.Container>
  )
}

export default Cadastro
