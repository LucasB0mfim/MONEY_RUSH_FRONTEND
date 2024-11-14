import * as yup from 'yup';
import { useFormik } from 'formik';
import { RootState } from '../../store';
import InputMask from 'react-input-mask'
import { useDispatch, useSelector } from 'react-redux';

import { setDespesas } from '../../store/reducers/despesaSlice';
import { useCadastrarDespesaMutation } from '../../services/api';

import exit from '../../assets/images/iconExit.png';

import * as S from './styles';

const CadastrarGasto = ({ onClose }: { onClose: () => void }) => {
  const dispatch = useDispatch();
  const usuarioId = useSelector((state: RootState) => state.usuario.id);
  const despesasAtuais = useSelector((state: RootState) => state.despesa.despesas); // Para pegar as despesas atuais do estado
  const [register, { isLoading, isError, error }] = useCadastrarDespesaMutation();

  if (!usuarioId) {
    console.error('Erro: usuarioId não encontrado');
    return <div>Erro: ID do usuário não encontrado.</div>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useFormik({
    initialValues: {
      id: '',
      descricao: '',
      valor: '',
      quantidade: '',
      data: '',
      categoria: '',
    },
    validationSchema: yup.object({
      descricao: yup.string().min(1).required('Este campo é obrigatório.'),
      valor: yup.number().min(1).required('Este campo é obrigatório.'),
      quantidade: yup.number().min(1).required('Este campo é obrigatório.'),
      data: yup.string().min(1).required('Este campo é obrigatório.'),
      categoria: yup.string().min(1).required('Este campo é obrigatório.'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await register({
          usuarioId,
          despesa: values,
        }).unwrap();

        dispatch(setDespesas([...despesasAtuais, {
          id: response.id,
          descricao: response.descricao,
          valor: response.valor,
          quantidade: response.quantidade,
          data: response.data,
          categoria: response.categoria,
        }]));

        onClose();
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
            <S.ExitButton onClick={onClose}><img src={exit} alt="Exit" /></S.ExitButton>
          </S.TopDiv>
          <S.Form onSubmit={form.handleSubmit}>

            <S.Select id="categoria" name="categoria" value={form.values.categoria} onChange={form.handleChange} onBlur={form.handleBlur} >
              <S.option disabled selected value="" >CATEGORIA</S.option>
              <S.option value="ALIMENTACAO">Alimentação</S.option>
              <S.option value="EDUCACAO">Educação</S.option>
              <S.option value="LAZER">Lazer</S.option>
              <S.option value="FASTFOOD">Fastfood</S.option>
              <S.option value="MORADIA">Casa</S.option>
              <S.option value="SAUDE">Saúde</S.option>
              <S.option value="SERVICO">Serviço</S.option>
            </S.Select>

            <input type="text" placeholder="O que você comprou?" id="descricao" name="descricao" value={form.values.descricao} onChange={form.handleChange} onBlur={form.handleBlur} />
            {form.touched.descricao && form.errors.descricao && <S.Error>{form.errors.descricao}</S.Error>}

            <input type="number" placeholder="Quanto você pagou?" id="valor" name="valor" value={form.values.valor} onChange={form.handleChange} onBlur={form.handleBlur} />
            {form.touched.valor && form.errors.valor && <S.Error>{form.errors.valor}</S.Error>}

            <input type="number" placeholder="Quantas unidades você comprou?" id="quantidade" name="quantidade" value={form.values.quantidade} onChange={form.handleChange} onBlur={form.handleBlur} />
            {form.touched.quantidade && form.errors.quantidade && <S.Error>{form.errors.quantidade}</S.Error>}

            <InputMask mask="99/99/9999" type="text" placeholder="Quando você comprou?" id="data" name="data" value={form.values.data} onChange={form.handleChange} onBlur={form.handleBlur} />
            {form.touched.data && form.errors.data && <S.Error>{form.errors.data}</S.Error>}

            <S.Btn type="submit">Adicionar</S.Btn>
          </S.Form>
        </S.Div>
      </S.DivBar>
    </S.Container>
  );
};

export default CadastrarGasto;
