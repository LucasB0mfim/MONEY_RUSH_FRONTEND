import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'

import Loader from '../../components/Loader'

import logo from '../../assets/images/logo.png'

import * as S from './styles'

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
      name: yup.string().min(3, 'O nome precisa ter pelo menos 3 caracteres').required('O campo é obrigatório'),
      email: yup.string().required('O campo é obrigatório'),
      username: yup.string().min(3, 'O nome precisa ter pelo menos 3 caracteres').required('O campo é obrigatório'),
      password: yup.string().min(3, 'O nome precisa ter pelo menos 8 caracteres').required('O campo é obrigatório'),
    }),
    onSubmit: (values) => {
      console.log(values)
      setRegister(false)
      navigate('/access-account')
    }
  })

  return (
    <S.Container>
      <S.Aside>
        <S.DivLogo>
          <img src={logo} alt="Rocket" />
          <h1>MONEY RUSH</h1>
        </S.DivLogo>
        <h2>O JEITO MAIS INTELIGENTE DE CONTROLAR OS GASTOS</h2>
      </S.Aside>
      <S.Main isError={Object.keys(form.errors).length > 0}>
        <h2>Cadastro</h2>
        <p>Preencha os campos abaixo para se cadastrar</p>
        <S.Form onSubmit={form.handleSubmit} isError={Object.keys(form.errors).length > 0}>

          {form.touched.name && form.errors.name && <S.Error>{form.errors.name}</S.Error>}
          <S.Input type="text" placeholder='Digite seu nome completo' id='name' name='name' value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur} isError={!!(form.touched.name && form.errors.name)} />

          {form.touched.email && form.errors.email && <S.Error>{form.errors.email}</S.Error>}
          <S.Input type="text" placeholder='Digite seu e-mail' id='email' name='email' value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} isError={!!(form.touched.email && form.errors.email)} />

          {form.touched.username && form.errors.username && <S.Error>{form.errors.username}</S.Error>}
          <S.Input type="text" placeholder='Digite seu usuario' id='username' name='username' value={form.values.username} onChange={form.handleChange} onBlur={form.handleBlur} isError={!!(form.touched.username && form.errors.username)} />

          {form.touched.password && form.errors.password && <S.Error>{form.errors.password}</S.Error>}
          <S.Input type="password" placeholder='Digite sua senha' id='password' name='password' value={form.values.password} onChange={form.handleChange} onBlur={form.handleBlur} isError={!!(form.touched.password && form.errors.password)} />

          <S.Btn type="submit" isError={Object.keys(form.errors).length > 0} >{register ? 'Cadastrar' : <Loader />}</S.Btn>
        </S.Form>
      </S.Main>
    </S.Container>
  )
}

export default Cadastro
