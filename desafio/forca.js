class Forca {
  constructor (resposta){
    this.start = 'aguardando chute';
    this.resposta = resposta;
    this.vida = 6;
    this.letraChutadas = [];
    this.letraCerta = [];
    for (let caractere in resposta) {
      this.letraCerta = this.letraCerta.concat('_');
    }
  } 
    
  chutar(letra) {
    if (this.start != 'aguardando chute') return;
    if (letra.length != 1) return;
    if (this.letraChutadas.includes(letra)) return;
    if (letra.match(/[^A-Za-z]/)) return; // Adicionei essa linha para impedir que o jogador chute caracteres que não são letras
    this.letraChutadas = this.letraChutadas.concat(letra);
    if (this.resposta.includes(letra)) {
      for (var indice = 0; indice < this.resposta.length; indice ++) {
        if (this.resposta[indice] == letra) this.letraCerta[indice] = letra ;
      }
    }
    else {
      this.vida --;
    }
    if (this.vida == 0) this.start = 'perdeu';
    else if (this.letraCerta.join('') == this.resposta) this.start = 'ganhou';
   }

  buscarEstado() { return this.start; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letraChutadas, // Deve conter todas as letras chutadas
          vidas: this.vida, // Quantidade de vidas restantes
          palavra: this.letraCerta // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
