import { useState } from "react";

function EligeBoton () {
    const [mensaje, setMensaje] = useState('');
    const handleClick = (num) => {
        setMensaje(`Has elegido el botón ${num}`);
    }
    return <div>
        <h2>Elige un botón</h2>
        <p>{mensaje}</p>
        <button onClick={(event) => handleClick(1)}>Botón 1</button>
        <button onClick={(event) => handleClick(2)}>Botón 2</button>
        <button onClick={(event) => handleClick(3)}>Botón 3</button>
    </div>
}
export default EligeBoton;