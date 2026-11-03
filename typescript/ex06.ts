import type { Produto } from "./ex04";
type ProdutoPayload = Omit<Produto, "_id">;
type ProdutoParcial = Partial<Produto>;

function atualizarProduto(
  produto: Produto,
  atualizacoes: ProdutoParcial,
): Produto {
  return { ...produto, ...atualizacoes };
}
console.log(Produtos);
console.log(
  "preco atualizado: ",
  atualizarProduto(Produtos[0], { preco: 150 }),
);
