interface Avaliacao { 
    nota: number; 
    quantidade: number; 
}
interface Produto { 
    _id: string;
    nome: string; 
    preco: number; 
    descricao: string;
    categoria: string;
    imagem: string;
    avaliacao: Avaliacao; 
}

let Produto: Produto[] = [
    {
        _id: "1",
        nome: "Produto 1",
        preco: 100,
        descricao: "Descrição do Produto 1",
        categoria: "Categoria 1",
        imagem: "imagem1.jpg",
            avaliacao: {
                nota: 4.5,
                quantidade: 10
            }
            
    },
    {
        _id: "2",
        nome: "Produto 2",
        preco: 200,
        descricao: "Descrição do Produto 2",
        categoria: "Categoria 2",
        imagem: "imagem2.jpg",
            avaliacao: {
                nota: 3.8,
                quantidade: 5
            }
    },
    {
        _id: "3",
        nome: "Produto 3",
        preco: 300,
        descricao: "Descrição do Produto 3",
        categoria: "Categoria 3",
        imagem: "imagem3.jpg",
        avaliacao: {
            nota: 4.2,
            quantidade: 8
        }
    }
];

function buscarPorNome(produto: Produto[], termo: string): Produto[] {
    produto = produto.filter(p => p.nome.toLowerCase().includes(termo.toLowerCase()));
    return produto;
}
console.log(buscarPorNome(produtos, "Produto 2"));