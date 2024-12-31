import React from "react";

const Haslo = () => {
    const [haslo, setHaslo] = React.useState("");
    const [powtorzHaslo, setPowtorzHaslo] = React.useState("");

    const response = !haslo && !powtorzHaslo ? "Proszę wprowadzić hasło"
                            : haslo != powtorzHaslo ? "Hasła nie są zgodne"
                            : ""

    return (
        <div>
            <input type="password" placeholder="Hasło" value={haslo} onChange={(e) => setHaslo(e.target.value)} />
            <input type="password" placeholder="Powtórz Hasło" value={powtorzHaslo} onChange={(e) => setPowtorzHaslo(e.target.value)} />
            <div>{response}</div>
        </div>
    )
}

export default Haslo;