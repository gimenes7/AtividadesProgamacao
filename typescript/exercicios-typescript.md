# Exercícios de TypeScript — rumo ao projeto final

Como usar: crie uma pasta `exercicios/` e um arquivo por exercício (`ex01.ts`, `ex02.ts`...).
Rode a checagem com `npx tsc --noEmit` e execute com `npx tsx ex01.ts`.
Quando terminar um, me mande o código que eu corrijo e explico os erros.
Só avance de nível quando o anterior estiver sem erro de tipo.

Cada nível prepara uma parte do projeto (veja a coluna "Onde aparece").

---

## Nível 1 — Fundamentos (tipos básicos e funções)
Onde aparece: funções utilitárias, callbacks, `: void`, `: Promise<T>`.

**Ex 01.** Crie `somar(a, b)` e `calcularDesconto(preco, percentual)` com parâmetros e retorno tipados. Chame com um `string` de propósito e leia o erro.

**Ex 02.** Crie `formatarPreco(valor: number): string` que devolve `"R$ 10,50"`. Depois crie `formatarPrecos(valores: number[]): string[]`.

**Ex 03.** Crie `esperar(ms: number): Promise<void>` e uma função `async carregar(): Promise<string>` que espera 500ms e devolve `"ok"`.

---

## Nível 2 — Interfaces, type e union types
Onde aparece: `Produto`, `Usuario`, props de componentes.

**Ex 04.** Crie a interface `Avaliacao { nota; quantidade }` e `Produto` (com `_id`, `nome`, `preco`, `descricao`, `categoria`, `imagem`, `avaliacao`). Crie um array com 3 produtos.

**Ex 05.** Escreva `buscarPorNome(produtos: Produto[], termo: string): Produto[]` (sem diferenciar maiúscula/minúscula).

**Ex 06.** Crie `type ProdutoPayload = Omit<Produto, '_id'>` e `type ProdutoParcial = Partial<Produto>`. Escreva `atualizar(produto: Produto, mudancas: ProdutoParcial): Produto`.

**Ex 07.** Crie `type Id = string | number` e uma função `mostrarId(id: Id)` que usa **narrowing** (`typeof`) para tratar cada caso.

---

## Nível 3 — Enums e discriminated unions
Onde aparece: `PapelUsuario`, `Tema`, `CriterioFiltro`, `RequestState<T>`.

**Ex 08.** Crie `enum PapelUsuario { Admin = 'admin', Manager = 'manager', Employee = 'employee' }` e `podeEditar(papel: PapelUsuario): boolean` (só Admin e Manager).

**Ex 09.** Crie o tipo:
```ts
type RequestState<T> =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; data: T };
```
Escreva `descrever(estado: RequestState<Produto[]>): string` usando `switch (estado.status)`. Depois adicione um quarto estado `'idle'` e veja o TypeScript reclamar do `switch` incompleto.

**Ex 10.** Crie `enum CriterioOrdenacao { Nome, PrecoMenor, PrecoMaior }` e `ordenar(produtos, criterio)` que devolve uma cópia ordenada.

---

## Nível 4 — Generics e tuples
Onde aparece: `useState<T>`, `useFormulario<T>`, `useProdutos`.

**Ex 11.** Crie `primeiro<T>(lista: T[]): T | undefined` e teste com `number[]` e `Produto[]`.

**Ex 12.** Crie `interface Resposta<T> { data: T; status: number }` e `async function buscar<T>(url: string): Promise<Resposta<T>>` (pode simular com `Promise.resolve`).

**Ex 13.** Crie `useContador(inicial: number): [number, () => void, () => void]` (tuple). Implemente **sem React**, como função simples com closure.

**Ex 14.** Crie `agruparPor<T, K extends keyof T>(lista: T[], chave: K): Record<string, T[]>` e use para agrupar produtos por `categoria`.

---

## Nível 5 — TypeScript com React (aqui já é o projeto)
Crie um projeto novo só para treinar: `npm create vite@latest treino-ts -- --template react-ts`.

**Ex 15.** Componente `Botao` com interface `BotaoProps { texto: string; onClick: () => void; variante?: 'primario' | 'perigo' }`.

**Ex 16.** Componente `Contador` usando `useState<number>` e um botão que incrementa.

**Ex 17.** Formulário de login com `useState<Credenciais>`, `handleChange(e: ChangeEvent<HTMLInputElement>)` e `handleSubmit(e: FormEvent<HTMLFormElement>)`.

**Ex 18.** Componente que busca produtos com `axios.get<Produto[]>` e guarda em `useState<RequestState<Produto[]>>`. Renderize com `switch` no `status`.

**Ex 19.** `useRef<HTMLInputElement>(null)` para focar um input ao clicar em um botão.

**Ex 20.** `createContext` de tema com `interface TemaContextValue`, um `Provider` com `children: ReactNode` e um hook `useTema()` que lança erro fora do provider.

---

## Desafio final
Refaça do zero, sem olhar o projeto pronto: `Login` (formulário tipado + chamada de API + token no localStorage) e a `Home` com a lista de produtos e o botão de deletar. Depois compare com o projeto e anote as diferenças.
