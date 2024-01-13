

import { Carro } from './class/Carro'
import {AdmCarros} from './class/Adm'
// Objetos 

const administrador:AdmCarros= new AdmCarros('Corsa',1912)

//console.log(administrador.msg())


const carros:Carro = new Carro('Uno',1980)
//carros.msg()


// exemplo readonly pde ser acessado mas não alterado
/*const acesso = new Carro('Verona',1800)
acesso.nome = 'corcel'
console.log(acesso.nome)*/