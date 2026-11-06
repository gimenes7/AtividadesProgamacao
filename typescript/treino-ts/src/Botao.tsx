interface BotaoProps { texto: string; onClick: () => void; variante?: 'primario' | 'perigo' } {

}
const Botao = ({ texto, onClick, variante = 'primario' }: BotaoProps) => {
  const cor = variante === 'primario' ? '#0073e6' : '#dc2626';

  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: cor, color: '#fff', padding: '8px 14px', border: 'none', borderRadius: '4px' }}
    >
      {texto}
    </button>
  );
};

export default Botao;