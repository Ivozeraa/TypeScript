// LER DADOS NA CLASSE = PARAMETROS
// IMPRIMIR NA CLASSE = RETURN


export class Personagem {
  constructor(
    private _nome: string,
    private vida: number,
    private energia: number,
    private ataque: number,
    private defesa: number
  ) {}

  public get nome(): string{
    return this._nome
  }

  public set nome(nome: string){
    this._nome = nome
  }

  public status(): string {
    return `
  📜 STATUS DO PERSONAGEM 📜
  ==========================
  🔹 Nome:    ${this.nome}
  🔹 Vida:    ${this.vida.toFixed(0)}
  🔹 Energia: ${this.energia.toFixed(0)}
  🔹 Ataque:  ${this.ataque.toFixed(0)}
  🔹 Defesa:  ${this.defesa.toFixed(0)}
  ==========================
      `;
  }

  public treinarAtaque(): string {
    if (this.ataque >= 100) {
      return "\n🔥 Seu ataque já está no máximo!";
    } else {
      let AtaqueNovo = this.randomizar(10);
      this.ataque = Math.min(this.ataque + AtaqueNovo, 100);
      this.energia = Math.max(this.energia - 5, 0);
      return `
  ⚔️ Ataque aumentado para: ${this.ataque.toFixed(0)}
  🛑 Energia restante: ${this.energia.toFixed(0)}
        `;
    }
  }

  public treinarDefesa(): string {
    if (this.defesa >= 100) {
      return "\n🛡️ Sua defesa já está no máximo!";
    } else {
      let DefesaNova = this.randomizar(10);
      this.defesa = Math.min(this.defesa + DefesaNova, 100);
      this.energia = Math.max(this.energia - 5, 0);
      return `
  🛡️ Defesa aumentada para: ${this.defesa.toFixed(0)}
  🛑 Energia restante: ${this.energia.toFixed(0)}
        `;
    }
  }

  public dormir(tempo: number): string {
    let EnergiaRecuperada = this.randomizar(tempo);
    this.energia = Math.min(this.energia + EnergiaRecuperada, 100);
    return `
  🛏️ Você dormiu ${tempo} horas e recuperou ${EnergiaRecuperada.toFixed(0)} de energia.
  🛑 Energia atual: ${this.energia.toFixed(0)}
      `;
  }

  public isDead(): boolean {
    return this.energia <= 0
  }
  
  private randomizar(fator: number): number{
    return Math.random() * fator;
  }
}
