import React from "react";

const Aktualizacja = () => {
    const [produkt, setProdukt] = React.useState({
        nazwa: "Pomidor",
        cena: 50
    })

    return (
        <div>
            <div>
                Aktualnie {produkt.nazwa} kosztuje {produkt.cena}
            </div>
            <button onClick={() => setProdukt(prevProdukt => ({...prevProdukt, cena: 100}) ) }>Zmień cenę</button>
        </div>
    )
}

export default Aktualizacja