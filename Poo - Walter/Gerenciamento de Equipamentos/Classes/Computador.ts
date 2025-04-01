import { Equipamento } from "./Equipamento";

export class Computador extends Equipamento {
    private memoriaRAM: number;

    constructor(nome: string, memoriaRAM: number) {
        super(nome);
        this.memoriaRAM = memoriaRAM;
    }

    getMemoriaRAM(): number {
        return this.memoriaRAM;
    }
}
