// 5. Classe Pessoa: Crie uma classe que modele uma pessoa:
// 1. Atributos: nome, idade, peso e altura
// 2. Métodos: Envelhecer, engordar, emagrecer, crescer.
// Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos,
// ela deve crescer 0,5 cm.

export function executarQuestao5(): void {
    class Pessoa {
        private nome: string
        private idade: number
        private peso: number
        private altura: number

        constructor(nome: string, idade: number, peso: number, altura: number) {
            this.nome = nome
            this.idade = idade
            this.peso = peso
            this.altura = altura
        }

        envelhecer(): void {
            this.idade++
            console.log(`Idade aumentada!`)

            if (this.idade < 21) {
                this.altura += 0.5
            }
        }

        engordar(peso: number): void {
            this.peso += peso
        }

        emagrecer(peso: number): void {
            this.peso -= peso
        }

        crescer(altura: number): void {
            this.altura += altura
        }
    }

    let pessoa = new Pessoa("João", 20, 77, 199)
    
    console.log(pessoa.envelhecer())
    console.log(pessoa.engordar(2))
    console.log(pessoa.emagrecer(1))
}
    //pessoa.emagrecer(1)
    //pessoa.crescer(1)