import { Conta } from "./Conta.js"

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
 
    constructor(cliente, agencia){
        super(0, cliente, agencia)
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){  // SobreEscrevendo o comportamento de sacar " Classe Conta.js"
        let taxa = 1.1; //10%
        return this._sacar (valor, taxa);  
      //return super._sacar(valor, taxa);

    }
    
}