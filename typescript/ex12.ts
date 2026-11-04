interface Resposta<T> {
  data: T;
  status: number;
}

async function buscar<T>(url: string): Promise<Resposta<T>> {
  const response = await fetch(url);
  const data = await response.json();
  return { data, status: response.status };
}

// Teste
interface Pokemon {
  id: number;
  name: string;
}

async function main(): Promise<void> {
  const resposta = await buscar<Pokemon>("https://pokeapi.co/api/v2/pokemon/1");
  console.log(resposta.status); // 200
  console.log(resposta.data.name); // bulbasaur
}

main();
