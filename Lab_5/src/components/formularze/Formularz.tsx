import React from "react";

const Formularz= () => {
    const [tekst, setTekst] = React.useState("");

    return(
        <div>
            <input type="text" value={tekst} onChange={(e) => setTekst(e.target.value)} />

            <div>{tekst}</div>
        </div>
    )
}

export default Formularz;