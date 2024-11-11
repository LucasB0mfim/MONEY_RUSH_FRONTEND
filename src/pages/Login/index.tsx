import * as yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setUsuario } from '../../store/reducers/usuarioSlice'

import Loader from '../../components/Loader'
import { useLogarUsuarioMutation } from '../../services/api'

import wallet from '../../assets/images/whiteWallet.png'

import * as S from '../../styles'

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [create, setCreate] = useState(true)
  const [serverMessage, setServerMessage] = useState('')
  const [logarUsuario, { isLoading, isError, error }] = useLogarUsuarioMutation()

  const form = useFormik({
    initialValues: {
      email: '',
      senha: ''
    },
    validationSchema: yup.object({
      email: yup.string().email('Você precisa inserir um e-mail válido.').required('Insira seu endereço de e-mail'),
      senha: yup.string().min(8, 'Exemplo de senha: M0n£yRush#').required('Insira sua senha')
    }),
    onSubmit: async (values) => {
      try {
        const usuario = await logarUsuario({ email: values.email, senha: values.senha }).unwrap();
        console.log(usuario);
        dispatch(setUsuario({ nome: usuario.nome, id: usuario.id, email: usuario.email, username: usuario.username, salario: usuario.salario }));
        navigate(`/dashboard/${usuario.id}`);
      } catch (error) {
        console.error('Erro ao logar:', error);
      }
    }
  })

  useEffect(() => {
    if (!create) {
      navigate('/create-account')
    }
  }, [create, navigate])

  const capturarError = (error: any) => {
    if ('data' in error && error.data) {
      return error.data?.message || 'Seu e-mail ou senha podem estar incorretos.';
    } else if (error?.message) {
      return error.message;
    }
    return 'Erro desconhecido! Contatar o administrador.';
  }

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isLoading) {
      timer = setTimeout(() => {
        setServerMessage('Aguarde um momento, estamos iniciando nosso servidor!');
      }, 2500);
    } else {
      setServerMessage('');
    }
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <S.Container>
      <S.Aside>
        <S.DivLogo>
          <img src={wallet} alt="Icon" />
          <h1>MONEYRUSH</h1>
        </S.DivLogo>
        <p>O JEITO MAIS INTELIGENTE<br />DE CONTROLAR O SEU<br />DINHEIRO</p>
      </S.Aside>
      <S.Main isError={Object.keys(form.errors).length > 0}>
        <h2>Login</h2>
        <p>Preencha os campos abaixo com os seus dados de acesso:</p>
        <S.Form onSubmit={form.handleSubmit} isError={Object.keys(form.errors).length > 0}>
          <S.Input type="email" placeholder='Digite seu e-mail' id='email' name='email' value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} isError={!!(form.touched.email && form.errors.email)} />
          {form.touched.email && form.errors.email && <S.Error>{form.errors.email}</S.Error>}

          <S.Input type="password" placeholder='Digite sua senha' id='senha' name='senha' value={form.values.senha} onChange={form.handleChange} onBlur={form.handleBlur} isError={!!(form.touched.senha && form.errors.senha)} />
          {form.touched.senha && form.errors.senha && <S.Error>{form.errors.senha}</S.Error>}

          <S.BtnEnter type="submit">{isLoading ? <Loader /> : 'Entrar'}</S.BtnEnter>
          <S.BtnCreate type="button" onClick={() => setCreate(false)}>{create ? 'Criar minha conta' : <Loader />}</S.BtnCreate>

          {isError && <S.Error isLogin={true}>{capturarError(error)}</S.Error>}
          {!isError && isLoading && <S.Warning>{serverMessage}</S.Warning>}
        </S.Form>
      </S.Main>
    </S.Container>
  )
}

export default Login
