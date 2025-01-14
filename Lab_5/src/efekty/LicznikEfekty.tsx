import React from "react";

const LicznikEfekty = () =>{
    const [count, setCount] = React.useState(0);

    React.useEffect(()=>{
        console.log("Hello world");
    },[])

    React.useEffect(() =>{
        console.log("Licznik zwiększył się do",count);
    },[count])

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Dodaj</button>
        </div>
    )
}

export default LicznikEfekty;