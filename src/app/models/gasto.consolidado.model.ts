import { GastosModel } from "./gasto.model";
import { IndicadorTipoRecursoEnum } from "./gasto.tipo.enum";

export class GastoConsolidadoModel {
    id: number;
    descricao: string;
    categoria: string;
    valor: number;
    percentagem: number;
    diferenca: number
    parcela: number;
    totalParcelas: number;
    origem: GastosModel[];
    tipoRecurso: IndicadorTipoRecursoEnum;
}