import { useSelector } from 'react-redux';
import { RootState } from '../../store';  // Importando o tipo RootState

import * as S from './styles'

const Home = () => {
  const usuario = useSelector((state: RootState) => state.usuario);  // Acessando os dados do usuário
  const nomeDoUsuario = usuario?.nome;  // Pegando o nome do usuário

  return (
    <S.Container>
      <h1> BEM VINDO AO SEU HOME: {nomeDoUsuario}</h1>
      <S.Btn type='button'><a href="/">Sair</a></S.Btn>
    </S.Container>
  )
}

export default Home;
