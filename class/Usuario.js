class Usuario {
    #nome
    #idade
    constructor(nome, idade){

        this.#nome = nome
        this.#idade = idade
    }
    acessoPainel(){
        console.log("Acesso genérico ao painel ao sistema")
    }

    get nome(){
        return this.#nome
    }

    get idade(){
        return this.#idade
    }
}

module.exports = Usuario

