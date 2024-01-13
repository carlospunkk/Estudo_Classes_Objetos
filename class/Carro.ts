// trabalhando com classes 

/* Em síntese, a classe é um conjunto de objetos com características em comum. 
E é justamente a classe quem define o comportamento do objeto. E o comportamento, 
por sua vez, é definido por métodos (ação) e atributos 
(características).
*/


export  class Carro {
    // propriedades
   readonly nome: string
    ano_fabricacao: number
   


    // método constructor 
   constructor(nome: string, anoFabri: number) {
        this.nome = nome
        this.ano_fabricacao = anoFabri
       
    }

// método msg polimorfismo
msg = (): void =>{
console.log('carros')
}



    // método mostrar 

    
}