// Classe abstrata
// - Um classe que não pode ser instanciada, ela só funciona pra ser herdada, pode sere contruida diretamente, como New Conta
export class Conta {
    
    constructor(saldoInicial, cliente, agencia){ 

        if(this.constructor == Conta) { // Caso alguem tente criar uma " const conta = new Conta...", ele não irar permitir

            throw new Error("Você não deveria instanciar um objeto do tipo Conta Diretamente, pois essa é u a classe abstrata"); 
        } // Lança no sistema um erro caso o dev tente criar um construtor do tipo Conta
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

    }
    
    //Encapsulamentos Proteção Metodo Get/Set, Abstrato

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }
    
    sacar(valor){  // Método Abstrado
        throw new Error("O método Sacar da conta é abstrato");

        // Deixando o Sacar sem nada, obriga o Dev a subscrever o metodo Sacar no tipo de Classe que ele for criar
        // Caso ele não coloque o metodo Sacar na nova Classe criada, quando o cliente for sacar algo, não irar acontecer nenhuma ação
    }
    
    _sacar (valor, taxa){
        const valorSacado = taxa * valor;  // se tiver valor suficiente, entra na condição
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;                         // se não retorna 0
    }

    depositar(valor){
        if(valor <= 0){
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}