function formatarPreco(valor: number): string {
    return `R$ ${valor.toFixed(2).replace('.', ',')}`
}
function formatarPrecos(valores: number[]): string[] {
    return valores.map(formatarPreco);
}
console.log(formatarPrecos([10.5, 20, 3.456]))