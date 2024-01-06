// trabalhando com classes 


class Carro {
    nome: string
    ano_fabricacao: number


    // método constructor 
    constructor(nome: string, anoFabri: number) {
        this.nome = nome
        this.ano_fabricacao = anoFabri
    }

    // método mostrar 

    mostra = () => {

        console.log(this.nome)
    }
}

class AdmCarros extends Carro{
    numeroAdm:number

    constructor(nome:string , anoFabri:number){
        super(nome,anoFabri)
        this.numeroAdm = 10
    }

    // método pegar get 
    getAdm = () => {
        console.log(this.numeroAdm)
    }

    // método para setar propriedade
    setName = (nome:string):void =>{
        this.nome = nome
        console.log('nome alterado com sucesso ' + this.nome)
    }
}


const Adm:AdmCarros= new AdmCarros('Corsa',1912)
//Adm.getAdm()
Adm.setName('Renault Etios')



/*

// objeto
const carro = new Carro('Ferrari', 1980)
carro.mostra()


// outro objeto

const otherobjct = new Carro('Corcel', 1970)
otherobjct.mostra()

*/
