const Usuario = require("./class/Usuario")
const Pedido = require("./class/Pedido")
const Produto = require("./class/Produto")
const Administrador = require("./class/Administrador")

const cliente = new Usuario("Maria", 20)
const produto = new Produto("Camisa", 50, 10)
cliente.adicionarProduto(produto)

console.log(cliente.carrinho)

const pedido = new Pedido(cliente, cliente.carrinho)
console.log(pedido.calcularTotal())

const admin = new Administrador("João", 30)
const produtoAdmin = new Produto("Tênis", 200, 5)
admin.adicionarProduto(produtoAdmin)

console.log(admin.produtos)


