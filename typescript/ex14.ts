function agruparPor<T, K extends keyof T>(
  lista: T[],
  chave: K,
): Record<string, T[]> {
  return lista.reduce(
    (acc, item) => {
      const key = item[chave] as string;
      acc[key] = acc[key] || [];
      acc[key].push(item);
      return acc;
    },
    {} as Record<string, T[]>,
  );
}
const pessoas = [
  { nome: "Alice", idade: 25 },
  { nome: "Bob", idade: 30 },
  { nome: "Alice", idade: 28 },
  { nome: "Charlie", idade: 35 },
];
const pessoasAgrupadas = agruparPor(pessoas, "nome");
console.log(pessoasAgrupadas);
