import React from "react";

const Tytul = () => {

    const [tytul, setTytul] = React.useState("")

    React.useEffect(()=>{
        document.title = tytul
    },[tytul])

    return (
        <div>
            <input type="text" placeholder="Podaj tytuł strony" value={tytul} onChange={(e) => setTytul(e.currentTarget.value)}/>
        </div>
    )
}

export default Tytul;