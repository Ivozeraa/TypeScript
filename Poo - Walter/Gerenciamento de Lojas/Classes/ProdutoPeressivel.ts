import { Produto } from "./Produto";

export class ProdutoPeressivel extends Produto {
  constructor(
    nome: string,
    valorUnitario: number,
    quantidade: number,
    private _dataValidade: string
  ) {
    super(nome, valorUnitario, quantidade);
  }

  public get dataValidade(): string {
    return this._dataValidade;
  }
  public calcularPreço(): string {
      const precoTotal = this.valorUnidade * this.quantidadeProduto
      const desconto = this.verificarDesconto();

      const precoComDesconto = precoTotal - (precoTotal * desconto);
      return `O valor total do produto ${this.nomeProduto} é R$${precoComDesconto.toFixed(2)} (com desconto de ${desconto * 100}%).`;
  }
  private verificarDesconto(): number {
    const dataAtual = new Date();
    const dataValidade = new Date(this._dataValidade);
    const difTime = dataValidade.getTime() - dataAtual.getTime();
    const difDays = difTime / (1000 * 3600 * 24); 

    return difDays <= 5 ? 0.10 : 0; 
  }
}
