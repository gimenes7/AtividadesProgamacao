import type { Produto } from "./ex04";
import { Produtos } from "./ex04";
function buscarPorNome(produto: Produto[], termo: string): Produto[] {
  produto = produto.filter((p) =>
    p.nome.toLowerCase().includes(termo.toLowerCase()),
  );
  return produto;
}
console.log(buscarPorNome(Produtos, "Produto 2"));
