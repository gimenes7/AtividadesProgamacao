function somar(a: number, b: number) {
    return a + b
}
console.log(somar(7, 14))
function calcularDesconto(preco:number, percentual:number):number {
    return preco - (preco * percentual / 100)
}
console.log(calcularDesconto(500, 10))