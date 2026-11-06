function useContador(inicial: number): [number, () => void, () => void] {
  let contador = inicial;
  const incrementar = () => {
    contador++;
  };
  const decrementar = () => {
    contador--;
  };
  return [contador, incrementar, decrementar];
}
const [contador, incrementar, decrementar] = useContador(0);
console.log(contador); // 0
incrementar();
console.log(contador); // 0
