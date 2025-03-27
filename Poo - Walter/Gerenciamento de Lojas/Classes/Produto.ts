import { ProdutoInterface } from "../Interfaces/ProdutoInterface";

export class Produto implements ProdutoInterface {
  constructor(
    private _nome: string,
    private _valorUnitario: number,
    private _quantidade: number = 0
  ) {}

  public get nomeProduto(): string {
    return this._nome;
  }

  public get valorUnidade(): number {
    return this._valorUnitario;
  }

  public get quantidadeProduto(): number {
    return this._quantidade;
  }

  public set quantidadeProduto(quantidade: number) {
    if (quantidade < 0) {
      throw new Error("A quantidade não pode ser negativa.");
    }
    this._quantidade = quantidade; 
  }

  public calcularPreço(quantidade: number): string {
    this.quantidadeProduto = quantidade;

    let precoProduto: number = this._valorUnitario * this.quantidadeProduto;
    return `O valor total foi de R$${precoProduto.toFixed(2)}.`;
  }
}
