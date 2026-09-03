// 3. Classe Retângulo: Crie uma classe que modele um retângulo:
// A. Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
// B. Métodos:
//  Mudar valor dos lados,
//  Retornar/apresentar valor dos lados,
//  Calcular Área,
//  Calcular Perímetro.

export function executarQuestao3(): void {
    class Retangulo {
        private _base: number
        private _altura: number

        constructor(base: number, altura: number) {
            this._base = base
            this._altura = altura
        }

        mudarLados(novaBase: number, novaAltura: number): void {
            if (novaBase <= 0 || novaAltura <= 0) {
                console.log("Os lados devem ser maiores que zero.")
                return
            }

            this._base = novaBase
            this._altura = novaAltura
        }

        retornarBase(): number {
            return this._base
        }

        retornarAltura(): number {
            return this._altura
        }

        calcularArea(): number {
            return this._base * this._altura
        }

        calcularPerimetro(): number {
            return 2 * (this._base + this._altura)
        }
    }

    let novoRetangulo = new Retangulo(10, 5)

    console.log("Base:", novoRetangulo.retornarBase())
    console.log("Altura:", novoRetangulo.retornarAltura())
    console.log("Área:", novoRetangulo.calcularArea())
    console.log("Perímetro:", novoRetangulo.calcularPerimetro())
}
