import Botao from './Botao';

const App = () => {
  return (
    <div>
      <Botao texto="Salvar" onClick={() => alert('Salvou!')} />
      <Botao texto="Deletar" variante="perigo" onClick={() => alert('Deletou!')} />
    </div>
  );
};


export default App;