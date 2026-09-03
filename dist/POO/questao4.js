// 4. Crie um programa que utilize a classe acima. Ele deve pedir ao usuário que informe as medidas de um
// local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés
// necessárias para o local.
export function executarQuestao4() {
    class Local {
        constructor(comprimento, largura) {
            this.comprimento = comprimento;
            this.largura = largura;
        }
        calcularArea() {
            return this.comprimento * this.largura;
        }
        calcularPerimetro() {
            return 2 * (this.comprimento + this.largura);
        }
    }
    let comprimento = Number(prompt("Digite o comprimento do local:"));
    let largura = Number(prompt("Digite a largura do local:"));
    let local = new Local(comprimento, largura);
    let pisos = local.calcularArea();
    let rodapes = local.calcularPerimetro();
    console.log("Quantidade de pisos: " + pisos + " m²");
    console.log("Quantidade de rodapés: " + rodapes + " metros");
}
