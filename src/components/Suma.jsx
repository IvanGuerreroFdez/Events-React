import { useState } from "react";

function Suma({ numA, numB, sumaResuelta }) {
    const [resultado, setResultado] = useState(0);

    const handleClick = () => {
        const resultado = numA + numB;
        setResultado(resultado);
        sumaResuelta(resultado);
    }
    return <div>
        <button onClick={handleClick}>Calcula el resultado</button>
        <p>El resultado de la suma de {numA} y {numB} es {resultado}</p>
    </div>
}
export default Suma;
