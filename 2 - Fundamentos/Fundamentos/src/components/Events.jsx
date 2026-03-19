const Events = () => {


    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Evento 1 ativado");
    };
    const renderSomething = (x) => {
        if (x) {
            return <h2>Renderizando True!</h2>
        } else {
            return <h2>Renderizando False!</h2>
        }
    };
    const somaValores = () => {
        console.log("Soma de 10 + 20 = " + (20 + 10))
    }

    const somaValores2 = (x, y) => {
        
            alert("A soma dos valores: " + (x+y));


    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Função Maior com Nome!</button>
            </div>
            <div>
                <button onClick={() => console.log("Evento 2 ativado!")}>Função Menor sem Nome! </button>
            </div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
            <div>
                <button onClick={somaValores}>Soma no console</button>
            </div>

            <div>
            <button onClick={() => somaValores2(20,10)}>
  Soma no alert
</button>
            </div>


        </div>
    )

}

export default Events;