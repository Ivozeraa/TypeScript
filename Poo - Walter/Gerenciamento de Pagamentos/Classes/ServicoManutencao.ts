import { PagamentoInterface } from "../Interfaces/PagamentoInterface";

export class ServicoManutencao implements PagamentoInterface {
    private descricao: string;
    private horasTrabalhadas: number;
    private valorHora: number;

    constructor(descricao: string, horasTrabalhadas: number, valorHora: number) {
        this.descricao = descricao;
        this.horasTrabalhadas = horasTrabalhadas;
        this.valorHora = valorHora;
    }

    calcularPagamento(): number {
        return this.horasTrabalhadas * this.valorHora;
    }

    getDescricao(): string {
        return this.descricao;
    }

    setDescricao(descricao: string): void {
        this.descricao = descricao;
    }
}
