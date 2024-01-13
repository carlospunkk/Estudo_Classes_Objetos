
//importar 
import { Carro } from "./Carro"


// classe extendida Adm com Carros utilizando os métodos e atributos de Class Carro (Herança)
export class AdmCarros extends Carro{
    numeroAdm:number
    
    constructor(nome:string , anoFabri:number){
        super(nome,anoFabri)
        this.numeroAdm = 10
    }
    
   // método msg polimorfismo
msg = ():number=> { 
    return 2
}

    // método pegar get 
    getAdm = ():void => {
        console.log(this.numeroAdm)
    }

    // método para setar propriedade
    setName = (nome:string):void =>{
        //this.nome = nome
       // console.log('nome alterado com sucesso ' + this.nome)
    }

  
}