import { Produto } from "./Produto";

export class ProdutoNaoPerissivel extends Produto {
  constructor(
    nome: string,
    valorUnitario: number,
    quantidade: number,
    private _garantia: number
  ) {
    super(nome, valorUnitario, quantidade);
  }

  public calcularPreco(): string {
    const precoTotal = this.valorUnidade * this.quantidadeProduto;
    const precoComAcrescimo = precoTotal * 1.15; 

    return `O valor total do produto ${this.nomeProduto} é R$${precoComAcrescimo.toFixed(2)} (incluindo 15% de acréscimo devido à garantia de ${this._garantia} anos).`;
  }
}
