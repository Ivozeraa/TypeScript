import { ServicoConsultoria } from "./Classes/ServicoConsultoria";
import { ServicoManutencao } from "./Classes/ServicoManutencao";

const consultoria = new ServicoConsultoria("Consultoria Empresarial", 500);
const manutencao = new ServicoManutencao("Manutenção de Computadores", 10, 50); 

console.log(`Serviço: ${consultoria.getDescricao()} | Pagamento: R$ ${consultoria.calcularPagamento().toFixed(2)}`);
console.log(`Serviço: ${manutencao.getDescricao()} | Pagamento: R$ ${manutencao.calcularPagamento().toFixed(2)}`);
