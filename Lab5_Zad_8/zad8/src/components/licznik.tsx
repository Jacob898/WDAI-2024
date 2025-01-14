import React from "react";

const Licznik = () => {
    const [count, setCount] = React.useState(() => {
        const savedCount = localStorage.getItem("count");
        return savedCount ? parseInt(savedCount, 10) : 0;
    });

    React.useEffect(()=>{
        localStorage.setItem("count", String(count));
    },[count]);

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Dodaj</button>
        </div>
    )
}

export default Licznik;