import * as yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Loader from '../../components/Loader'
import { setUsuario } from '../../store/reducers/usuarioSlice'
import { useCadastrarUsuarioMutation } from '../../services/api'

import wallet from '../../assets/images/whiteWallet.png'

import * as S from '../../styles'

const Cadastrar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [back, setBack] = useState(true);
  const [registerUser, { isLoading, isError, error }] = useCadastrarUsuarioMutation();

  const form = useFormik({
    initialValues: {
      id: '',
      nome: '',
      email: '',
      username: '',
      senha: '',
      salario: 0,
    },
    validationSchema: yup.object({
      nome: yup.string().min(3, 'Você precisa o seu nome completo.').required('Insira seu nome completo.'),
      email: yup.string().email('Você precisa inserir um e-mail válido.').required('Insira seu endereço de e-mail.'),
      username: yup.string().min(3, 'Você precisa inserir um usuário válido.').required('Insira seu usuário.'),
      senha: yup.string().min(8, 'Exemplo de senha: M0n£yRush#').required('Insira sua senha.'),
      salario: yup.number().min(0, 'Insira um salário válido.').required('Insira seu salário.')
    }),
    onSubmit: async (values) => {
      try {
        const response = await registerUser(values).unwrap();

        dispatch(setUsuario({
          id: response.id,
          nome: response.nome,
          email: response.email,
          username: response.username,
          salario: response.salario,
        }));

        navigate('/registered-account');
      } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
      }
    }
  });

  const capturarError = (error: any) => {
    if ('data' in error && error.data) {
      return error.data?.message || 'Erro desconhecido'
    } else if (error?.message) {
      return error.message;
    }
    return 'Erro desconhecido'
  };

  useEffect(() => {
    if (!back) {
      navigate('/access-account')
    }
  }, [back, navigate])

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
        <h2>Cadastrar</h2>
        <p>Preencha os campos abaixo para se cadastrar:</p>
        <S.Form onSubmit={form.handleSubmit} isError={Object.keys(form.errors).length > 0}>
          <S.Input type="text" placeholder="Digite seu nome completo" id="nome" name="nome" value={form.values.nome} onChange={form.handleChange} onBlur={form.handleBlur} isError={!!(form.touched.nome && form.errors.nome)} />
          {form.touched.nome && form.errors.nome && <S.Error>{form.errors.nome}</S.Error>}

          <S.Input type="email" placeholder="Digite seu e-mail" id="email" name="email" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} isError={!!(form.touched.email && form.errors.email)} />
          {form.touched.email && form.errors.email && <S.Error>{form.errors.email}</S.Error>}

          <S.Input type="text" placeholder="Digite seu usuário" id="username" name="username" value={form.values.username} onChange={form.handleChange} onBlur={form.handleBlur} isError={!!(form.touched.username && form.errors.username)} />
          {form.touched.username && form.errors.username && <S.Error>{form.errors.username}</S.Error>}

          <S.Input type="password" placeholder="Digite sua senha" id="senha" name="senha" value={form.values.senha} onChange={form.handleChange} onBlur={form.handleBlur} isError={!!(form.touched.senha && form.errors.senha)} />
          {form.touched.senha && form.errors.senha && <S.Error>{form.errors.senha}</S.Error>}

          <S.Input type="number" placeholder="Digite seu salário" id="salario" name="salario" value={form.values.salario} onChange={form.handleChange} onBlur={form.handleBlur} isError={!!(form.touched.salario && form.errors.salario)} />
          {form.touched.salario && form.errors.salario && <S.Error>{form.errors.salario}</S.Error>}

          <S.BtnEnter type="submit"> {isLoading ? <Loader /> : 'Cadastrar'} </S.BtnEnter>
          <S.BtnCreate type="button" onClick={() => setBack(false)}> {back ? 'Voltar' : <Loader />} </S.BtnCreate>

          {isError && <S.Error>{capturarError(error)}</S.Error>}
        </S.Form>
      </S.Main>
    </S.Container>
  );
};

export default Cadastrar
