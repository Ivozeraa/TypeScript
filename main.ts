import { Personagem } from "./Classes/Personagem";
import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });
let Person: Personagem = new Personagem("Sansão", 100, 10, 50, 30);

let option: number = 0;
while (option !== 6 || Person.isDead()) {
  console.clear();
  console.log("=======================================");
  console.log("         🏹 RPG - TREINAMENTO 🛡️       ");
  console.log("=======================================\n");
  console.log(" [1] ⚔️ Treinar Ataque");
  console.log(" [2] 🛡️ Treinar Defesa");
  console.log(" [3] 🛏️ Dormir e Recuperar Energia");
  console.log(" [4] 📜 Exibir Status");
  console.log(" [5] ✨ Alterar nome");
  console.log(" [6] ❌ Sair\n");
  console.log("=======================================");

  option = Number(prompt("🔹 Escolha uma opção: "));

  switch (option) {
    case 1:
      console.log(Person.treinarAtaque());
      break;
    case 2:
      console.log(Person.treinarDefesa());
      break;
    case 3:
      let horas: number = +prompt("Digite o número de horas: ");
      console.log(Person.dormir(horas));
      break;
    case 4:
      console.log(Person.status());
      break;
    case 5:
      let nome: string = prompt("Dê um nome ao personagem: ");
      Person.nome = nome;
      console.log(`\n✨ Nome do personagem atualizado para: ${Person.nome}`);
      break;
    case 6:
      console.log("\n👋 Até logo, guerreiro!");
      break;
    default:
      console.log("\n⚠️ Escolha uma opção válida!");
      break;
  }

  prompt("\n🔄 Pressione ENTER para continuar...");
}

if (Person.isDead()) {
  console.log("\n💀 O jogo acabou, seu personagem morreu.");
}
