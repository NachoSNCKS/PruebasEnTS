import{Calculadora} from "../src/calculadora"
import{CalucladoraBinaria, Conversor} from "../src/calculadora_binaria"
describe("Prueba de la funcion sumar", () =>{
    let calculadora : Calculadora
    //Esto es un test case
    it("suma de 2 enteros positivos", () =>{
        // Codigo de la prueba
        let resEsperado = 3

        let calculadora = new Calculadora()
        let resObtenido = calculadora.sumar(1, 2)

        //asserts
        expect(resEsperado).toEqual(resObtenido)
    })
    it("suma de un cero con un positivo", () => {
        //
        let resEsperado = 3

        let calculadora = new Calculadora()
        let resObtenido = calculadora.sumar(0, 3)

        //asserts
        expect(resEsperado).toEqual(resObtenido)
    })

    it ("suma de negativos", () => {
        //
        let resEsperado = -5

        let calculadora = new Calculadora()
        let resObtenido = calculadora.sumar(-1, -4)

        //asserts
        expect(resEsperado).toEqual(resObtenido)
    })
})

describe("Calculadora Binaria funcion sumar", () => {
    it ("TC1 : Sumar", () => {
        let sum1 = "10"
        let sum2 = "11"
        let resEsperado = "101"

        let conversor = new Conversor()

        //Crear mocks de funciones -> spyOn
        spyOn(conversor, "btod").and.callFake((num : string) : string => {
            if (num == "10") return "2"
            else if (num == "11") return "3"
            else return ""
        })

        spyOn(conversor, "dtob").and.callFake((num : string) : string => {
            if (num == "5") return "101"
            else return ""
        })

        let cb = new CalucladoraBinaria(conversor)
        let resObtenido = cb.sumar(sum1, sum2)

        //assert
        expect(resEsperado).toEqual(resObtenido)
    })
})