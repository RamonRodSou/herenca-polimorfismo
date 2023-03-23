import {Cliente} from "./Cliente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
// import {ContaCorrente} from "./Conta/ContaCorrente.js"
// import {ContaPoupanca} from "./Conta/ContaPoupanca.js"
// import {ContaSalario} from "./Conta/ContaSalario.js"

// const cliente1 = new Cliente("Ricardo", 11122233309);
// const cliente2 = new Cliente("Alice", 88822233309);


// const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
// contaCorrenteRicardo.depositar(500);
// contaCorrenteRicardo.sacar(100);

// const contaPoupanca = new ContaPoupanca (50, cliente1, 1001);

// const contaSalario = new ContaSalario (cliente2, 1002);
// contaSalario.depositar (450);
// contaSalario.sacar(75);

// console.log(contaPoupanca);
// console.log(contaCorrenteRicardo);
// console.log(contaSalario);

const diretor = new Diretor ("Ramon", 10000, 13289856701);
diretor.cadastrarSenha("123456");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, 123456); 

const gerente = new Gerente ("Samara", 7000,12287648225)
gerente.cadastrarSenha("654321");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, 654321); 

const cliente = new Cliente ("Antônio", 22555444709, "7410");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, 7410); 


console.log(diretorEstaLogado, gerenteEstaLogado,clienteEstaLogado);
