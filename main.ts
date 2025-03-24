import { Produto } from "./ProjetoCalcularPreço/Produto";
import { ProdutoPeressivel } from "./ProjetoCalcularPreço/ProdutoPeressivel";

const Feijao: Produto = new Produto("Feijão", 10, 5);
const leite = new ProdutoPeressivel("Leite", 5, 10, "2025-03-28");

console.log("Nome do produto: ", Feijao.nomeProduto); 
console.log("Valor Unitário: R$", Feijao.valorUnidade);
console.log("Quantidade Comprada: ", Feijao.quantidadeProduto);

console.log("Preço total com 5 unidades: ", Feijao.calcularPreço(5));
console.log("Quantidade Comprada (depois de calcular): ", Feijao.quantidadeProduto);

console.log("-----------------------------------")
console.log(leite.calcularPreço());