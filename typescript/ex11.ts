import type { Produto } from "./ex04";
import { Produtos } from "./ex04";

function primeiro<T>(lista: T[]): T | undefined {
  return lista[0];
}
