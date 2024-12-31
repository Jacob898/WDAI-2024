import React from "react";

const Licznik = () =>{
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Dodaj</button>
        </div>
    )
}

export default Licznik;