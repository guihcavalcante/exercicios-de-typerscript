// 1. Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor

export function executarQuestao1(): void {

class Bola {
    private cor: string
    private circunferencia: number
    private material: string

    constructor(cor: string, circunferencia: number, material: string) {
        this.cor = cor
        this.circunferencia = circunferencia
        this.material = material
    }

    trocaCor(novaCor: string): void {
        this.cor = novaCor
    }

    mostraCor(): void {
        console.log(`A cor da bola é: ${this.cor}`)
    }
}

    let bola = new Bola("Azul", 70, "Borracha")

    bola.mostraCor()

    bola.trocaCor("Vermelha")

    bola.mostraCor()

}