function esperar(ms:number):Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function carregarPagina(): Promise<string> {
    await esperar(2000);
    return "Página carregada!";
}
carregarPagina().then(console.log)