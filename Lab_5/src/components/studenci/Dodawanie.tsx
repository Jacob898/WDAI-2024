import React from "react";

interface Student {
    imie: string;
    nazwisko: string;
    rocznik: number;
}

const Dodawanie =
    ({setStudents}: {setStudents: React.Dispatch<React.SetStateAction<Student[]>>}) => {
    const [imie, setImie] = React.useState("")
    const [nazwisko,setNazwisko] = React.useState("")
    const [rocznik, setRocznik] = React.useState("")

    const submit = () => {
        if (imie && nazwisko && !isNaN(Number(rocznik)) && Number(rocznik) > 0) {
            setStudents(prevState => [...prevState,{imie,nazwisko,rocznik: Number(rocznik)}])
            setImie("")
            setNazwisko("")
            setRocznik("")
        } else {
            alert("Dane nie są poprawnie wpisane")
        }
        }

    return (
        <div>
            <input type="text" placeholder="Imię" value={imie} onChange={(e) => setImie(e.currentTarget.value)}/>
            <input type="text" placeholder="Nazwisko" value={nazwisko} onChange={(e) => setNazwisko(e.currentTarget.value)}/>
            <input type="text" placeholder="Rocznik" value={rocznik} onChange={(e) => setRocznik(e.currentTarget.value)}/>
            <button onClick={submit} type="submit">Dodaj</button>
        </div>
    )
    }

export default Dodawanie;