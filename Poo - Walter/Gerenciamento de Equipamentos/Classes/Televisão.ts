import { Equipamento } from "./Equipamento";

export class Televisao extends Equipamento {
    private tamanhoTela: number;

    constructor(nome: string, tamanhoTela: number) {
        super(nome);
        this.tamanhoTela = tamanhoTela;
    }

    getTamanhoTela(): number {
        return this.tamanhoTela;
    }
}
