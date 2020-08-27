import { createSlice } from '@reduxjs/toolkit';
import { Valores } from '../Components/Valores';
import { Cliente } from '../interfaces/Cliente';
import { IDadosCartão } from "../interfaces/IDadosCartão";
import { ISetValores } from '../interfaces/ISetValores';
import { ISetUser } from '../interfaces/ISetUser';
import { ISetCartao } from '../interfaces/ISetCartao';

const slice = createSlice({
    name: 'user',
    initialState: {
        user: {} as Cliente,
        valorInicial: 0,
        valores: {} as Valores,
        dadosCartao: {} as IDadosCartão

    },
    reducers: {
        setUser: (user, action: ISetUser) => {
            user.user = action.payload.user;
        },
        setValores: (user, action: ISetValores) => {
            user.valorInicial = action.payload.valorInicial;
            user.valores = action.payload.valores;
        },
        setCartao: (user, action: ISetCartao) => {
            user.dadosCartao = action.payload.cartao;
        },

    },
});

export default slice.reducer;
export const {
    setUser,
    setValores,
    setCartao
} = slice.actions;