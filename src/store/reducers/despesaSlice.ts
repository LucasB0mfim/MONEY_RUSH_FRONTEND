import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Despesa = {
  id: string;
  descricao: string;
  valor: number;
  quantidade: number;
  data: string;
  categoria: string;
}

type DespesaState = {
  despesas: Despesa[];
}

const initialState: DespesaState = {
  despesas: [],
}

const despesaSlice = createSlice({
  name: 'despesa',
  initialState,
  reducers: {
    setDespesas: (state, action: PayloadAction<Despesa[]>) => {
      state.despesas = action.payload;
    }
  }
})

export const { setDespesas } = despesaSlice.actions
export default despesaSlice.reducer
