const Usuario = require("./Usuario")

class Administrador extends Usuario {
    constructor(nome, idade) {
        super(nome, idade)
        this.produtos = []
    }
 
    acessoPainel() {
        console.log("Acesso ao painel de administrativo")
    }

    adicionarProduto(produto) {
        this.produtos.push(produto)
    }

    removerProduto(produto) {
        this.produtos = this.produtos.filter((p) => p !== produto)
    }
}

module.exports = Administrador