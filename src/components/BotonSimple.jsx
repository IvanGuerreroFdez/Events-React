function BotonSimple() {
    const handleClick = (event) => {
        console.log('Botón pulsado');
    };

    return (
        <div>
            <button onClick={handleClick}>Pulsa el botón</button>
        </div>
    );
}
export default BotonSimple;
