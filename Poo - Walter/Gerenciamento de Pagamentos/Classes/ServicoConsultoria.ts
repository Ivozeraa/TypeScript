import { PagamentoInterface } from "../Interfaces/PagamentoInterface";

export class ServicoConsultoria implements PagamentoInterface {
    private descricao: string;
    private valorFixo: number;

    constructor(descricao: string, valorFixo: number) {
        this.descricao = descricao;
        this.valorFixo = valorFixo;
    }

    calcularPagamento(): number {
        return this.valorFixo;
    }

    getDescricao(): string {
        return this.descricao;
    }

    setDescricao(descricao: string): void {
        this.descricao = descricao;
    }
}
