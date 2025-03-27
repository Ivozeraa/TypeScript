import { Produto } from "./ProjetoCalcularPreço/Produto";
import { ProdutoPeressivel } from "./ProjetoCalcularPreço/ProdutoPeressivel";
import { ProdutoNaoPerissivel } from "./ProjetoCalcularPreço/ProdutoNaoPeressivel";

const feijao: Produto = new Produto("Feijão", 10, 5);
const leite = new ProdutoPeressivel("Leite", 5, 10, "2025-03-28");
const maca = new ProdutoPeressivel("Maçã", 2.5, 50, "2025-03-29");
const furadeira = new ProdutoNaoPerissivel("Furadeira", 300, 10, 3);

console.log("Nome do produto: ", feijao.nomeProduto);
console.log("Valor Unitário: R$", feijao.valorUnidade);
console.log("Quantidade Comprada: ", feijao.quantidadeProduto);
console.log("Preço total com 5 unidades: ", feijao.calcularPreço(5));
console.log("Quantidade Comprada (depois de calcular): ", feijao.quantidadeProduto);

console.log("-----------------------------------");

console.log(leite.calcularPreço());

console.log("-----------------------------------");

console.log(maca.calcularPreço());

console.log("-----------------------------------");

console.log(furadeira.calcularPreco());
