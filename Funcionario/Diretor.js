import { Funcionario } from "./Funcionario.js"

export class Diretor extends Funcionario {

    constructor(nome,cpf,salario){
        super(nome,cpf,salario)
            this._bonificacao = 2; //200% -2x o salario 
    }
}