import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import * as S from './styles'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const [back, setBack] = useState(true)
  const usuario = useSelector((state: RootState) => state.usuario);
  const nomeDoUsuario = usuario?.username;

  useEffect( () => {
    if (!back) {
      navigate('/access-account')
    }
  })

  return (
    <S.Container>
      <h1>{nomeDoUsuario}</h1>
      <a href="access-account" onClick={() => setBack(false)}><S.Btn>Sair</S.Btn></a>
    </S.Container>
  )
}

export default Home;
