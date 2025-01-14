import React from "react";
import Przycisk from "./Przycisk";

const Licznik = () =>{
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <div>{count}</div>
            <Przycisk onClick={() => setCount(count + 1)} />
        </div>
    )
}

export default Licznik;