import type { Produto } from "./ex04";
import { Produtos } from "./ex04";

enum CriterioOrdenacao {
  Nome,
  PrecoMenor,
  PrecoMaior,
}

function ordenar(produtos: Produto[], criterio: CriterioOrdenacao): Produto[] {
  const copia = [...produtos];

  switch (criterio) {
    case CriterioOrdenacao.Nome:
      return copia.sort((a, b) => a.nome.localeCompare(b.nome));
    case CriterioOrdenacao.PrecoMenor:
      return copia.sort((a, b) => a.preco - b.preco);
    case CriterioOrdenacao.PrecoMaior:
      return copia.sort((a, b) => b.preco - a.preco);
    default:
      throw new Error("Criterio de ordenação inválido");
  }
}
