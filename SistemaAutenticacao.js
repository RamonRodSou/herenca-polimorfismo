/*
    Ser autenticavel siginifica ter o método autenticar"

    Ducky Type - para linguagens fracamente tipadas
    quer dizer se ele tem a presença de determinado metodos e propriedades
    ele é um pato, independente do nome usado, mas se ele tem as msm funções
*/
export class SistemaAutenticacao {
    static login (autenticavel, senha){
        return autenticavel.autenticar(senha);
    }

    static ehAutenticavel(autenticavel){
        return "auntenticar" in autenticavel && // verifica se existe uma chave dentro do objeto
        autenticavel.autenticar instanceof Function // verifica se o objeto é uma instancia de outro objeti
         // autenticar tem que ser uma função para poder retornar
    }
}
/*
Para evitar essa séria de condições "if", usamos o conceito de
Polimofismo, onde declaramos apenas um método que se aplica a varios
objetos


export class SistemaAutenticacao {
    static login (autenticavel, senha){

        if(autenticavel instanceof Cliente){

        }
        if(autenticavel instanceof Diretor){

        }
        if(autenticavel instanceof Gerente){

        }
    }
}

*/