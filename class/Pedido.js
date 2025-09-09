class Pedido {
    constructor(cliente,produtos) {
        this.cliente = cliente
        this.carrinho = produtos
    }
    calcularTotal() {
        return this.carrinho.reduce((total,produto) => total + produto.preco,0)
}
}

module.exports = Pedido