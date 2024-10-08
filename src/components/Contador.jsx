import { useState } from "react";

function Contador({ informaResultado }) {
    const [numero, setNumero] = useState(0);

    const handleClick = () => {
        setNumero(numero + 1);
    }
    
    return <div>
        <p>{numero}</p>
        <button onClick={handleClick}>Sube contador</button>
        <button onClick={(event) => informaResultado(numero)}>Informa Resultado</button>
    </div>
}
export default Contador;