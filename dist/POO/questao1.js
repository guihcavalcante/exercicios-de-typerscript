// 1. Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor
export function executarQuestao1() {
    class Bola {
        constructor(cor, circunferencia, material) {
            this.cor = cor;
            this.circunferencia = circunferencia;
            this.material = material;
        }
        trocaCor(novaCor) {
            this.cor = novaCor;
        }
        mostraCor() {
            console.log(`A cor da bola é: ${this.cor}`);
        }
    }
    let bola = new Bola("Azul", 70, "Borracha");
    bola.mostraCor();
    bola.trocaCor("Vermelha");
    bola.mostraCor();
}
