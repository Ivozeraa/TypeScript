import { EquipamentoInterface } from "../Interfaces/EquipamentoInterface";

export abstract class Equipamento implements EquipamentoInterface {
    protected nome: string;
    protected status: boolean;

    constructor(nome: string) {
        this.nome = nome;
        this.status = false; 
    }

    ligar(): void {
        this.status = true;
        console.log(`${this.nome} ligado.`);
    }

    desligar(): void {
        this.status = false;
        console.log(`${this.nome} desligado.`);
    }

    informarStatus(): string {
        return this.status ? `${this.nome} está ligado.` : `${this.nome} está desligado.`;
    }

    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }
}
