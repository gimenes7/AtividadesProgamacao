import type { Produto } from "./ex04";
type RequestState<T> =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; data: T };

function descrever(estado: RequestState<Produto[]>): string {
  switch (estado.status) {
    case "loading":
      return "Carregando...";
    case "error":
      return `Erro: ${estado.message}`;
    case "success":
      return `Sucesso: ${estado.data.length} produtos encontrados`;
  }
}

console.log(descrever({ status: "loading" }));
console.log(descrever({ status: "error", message: "falhou" }));
console.log(descrever({ status: "success", data: [] }));
