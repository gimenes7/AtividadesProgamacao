import type { Produto } from "./ex04";
import { Produtos } from "./ex04";

function primeiro<T>(lista: T[]): T | undefined {
  return lista[0];
}
console.log(primeiro([10, 20, 30])); // 10      (T vira number)
console.log(primeiro(["a", "b"])); // "a"     (T vira string)
console.log(primeiro(Produtos)); // o 1º Produto (T vira Produto)
console.log(primeiro([])); // undefined
