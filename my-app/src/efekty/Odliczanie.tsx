import {useEffect, useState} from "react";

const Odliczanie = () => {
    const [timer,setTimer]= useState(15)
    const [counting,setCounting]=useState(false)

    useEffect(()=>{
        if(counting && timer){
            const interval = setInterval(()=>{
                setTimer(prevTimer => Math.max(prevTimer-0.1,0))
            },100)
            return () => clearInterval(interval)
        }
    },[counting,timer])

    return (
        <div>
            <div>{timer.toFixed(1)} sek</div>
            <button onClick={() => setCounting(!counting)} disabled ={timer === 0}>
                {timer ===0
                    ? "Odliczanie zakończone"
                    : counting
                    ? "STOP"
                    : "START"
                }
            </button>
        </div>
    )

}

export default Odliczanie