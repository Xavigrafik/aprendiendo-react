interface SpacerProps {
    space?: string | number;
}
  
const Spacer: React.FC<SpacerProps> = ({ space }) => {
    // Detectar si `space` es un número o una cadena de texto
    
    const margin = typeof space === 'number' ? `${space / 2}px` : `calc(${space} / 2)`;


  // Aplicar el margin-top en el estilo del div
  return (
    <div className="SPACER bg-light border" style={{ marginBlock : margin }}></div>
  );
};


export default Spacer;
