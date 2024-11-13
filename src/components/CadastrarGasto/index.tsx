import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'; // Importar useParams para pegar o ID da URL

import { setDespesas } from '../../store/reducers/despesaSlice';
import { useCadastrarDespesaMutation } from '../../services/api';

import exit from '../../assets/images/iconExit.png';

import * as S from './styles';

const CadastrarGasto = ({ onClose }: { onClose: () => void }) => {
  const dispatch = useDispatch();
  const [register, { isLoading, isError, error }] = useCadastrarDespesaMutation();

  // Obtém o usuarioId da URL
  const { usuarioId } = useParams<{ usuarioId: string }>();

  // Verifica se o usuarioId é válido (não undefined ou vazio)
  if (!usuarioId) {
    console.error('Erro: usuarioId não encontrado');
    return <div>Erro: ID do usuário não encontrado.</div>; // Exibir uma mensagem de erro para o usuário
  }
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useFormik({
    initialValues: {
      id: '',
      descricao: '',
      valor: 0,
      quantidade: 0,
      data: '',
      categoria: '',
    },
    validationSchema: yup.object({
      descricao: yup.string().min(1, 'Você precisa a descrição.').required('Insira a descrição.'),
      valor: yup.number().min(1, 'Insira um salário válido.').required('Insira o preço.'),
      quantidade: yup.number().min(1, 'Insira um preço válido.').required('Insira a quantidade.'),
      data: yup.string().min(1, 'Insira a data de compra válida.').required('Insira a data de compra.'),
      categoria: yup.string().min(1, 'Insira uma categoria válida').required('Insira a categoria.'),
    }),
    onSubmit: async (values) => {
      try {
        // Envia o usuarioId junto com os dados da despesa
        const response = await register({
          usuarioId, // Passa o usuarioId diretamente
          despesa: values, // Passa os dados da despesa
        }).unwrap();

        // Atualiza o estado global com a despesa cadastrada
        dispatch(setDespesas([{
          id: response.id,
          descricao: response.descricao,
          valor: response.valor,
          quantidade: response.quantidade,
          data: response.data,
          categoria: response.categoria,
        }]));
      } catch (error) {
        console.error('Erro ao cadastrar despesa:', error);
      }
    },
  });

  return (
    <S.Container>
      <S.DivBar>
        <S.Div>
          <S.TopDiv>
            <h2>Adicionar novo<br />gasto</h2>
            <S.ExitButton onClick={onClose}>
              <img src={exit} alt="Exit" />
            </S.ExitButton>
          </S.TopDiv>
          <S.Form onSubmit={form.handleSubmit}>
            <S.Select
              id="categoria"
              name="categoria"
              value={form.values.descricao}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            >
              <S.option disabled selected>
                Categoria
              </S.option>
              <S.option value="EDUCACAO">EDUCACAO</S.option>
              <S.option value="ALIMENTACAO">ALIMENTACAO</S.option>
              <S.option value="LAZER">LAZER</S.option>
              <S.option value="FASTFOOD">FASTFOOD</S.option>
              <S.option value="MORADIA">MORADIA</S.option>
              <S.option value="SAUDE">SAUDE</S.option>
              <S.option value="SERVICO">SERVICO</S.option>
            </S.Select>

            <S.Input
              type="text"
              placeholder="Digite a descrição."
              id="descricao"
              name="descricao"
              value={form.values.descricao}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.descricao && form.errors.descricao && <S.Error>{form.errors.descricao}</S.Error>}

            <S.Input
              type="text"
              placeholder="Digite o preço."
              id="valor"
              name="valor"
              value={form.values.valor}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.valor && form.errors.valor && <S.Error>{form.errors.valor}</S.Error>}

            <S.Input
              type="text"
              placeholder="Digite a quantidade"
              id="quantidade"
              name="quantidade"
              value={form.values.quantidade}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.quantidade && form.errors.quantidade && <S.Error>{form.errors.quantidade}</S.Error>}

            <S.Input
              type="text"
              placeholder="Digite a data"
              id="data"
              name="data"
              value={form.values.data}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.data && form.errors.data && <S.Error>{form.errors.data}</S.Error>}

            <S.Btn type="submit">Adicionar</S.Btn>
          </S.Form>
        </S.Div>
      </S.DivBar>
    </S.Container>
  );
};

export default CadastrarGasto;
