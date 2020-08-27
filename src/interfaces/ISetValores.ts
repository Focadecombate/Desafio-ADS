import { Valores } from '../Components/Valores';
export interface ISetValores {
    payload: {
        valorInicial: number;
        valores: Valores;
    };
}
