import React from "react";
import Dodawanie from "./Dodawanie";
interface Student {
    imie: string;
    nazwisko: string;
    rocznik: number;
}


const StudentManager = () => {

    const [students, setStudents] = React.useState<Student[]>([
        {imie: "Luke",nazwisko: "Skywalker",rocznik: 2000},
        {imie: "Han", nazwisko: "Solo", rocznik: 1995},
        {imie: "Leia", nazwisko: "Organa", rocznik: 2000}
    ]);

    return(
        <>
        <table>
            <tr>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Rocznik</th>
            </tr>
            {students.map((student, index) => (
                <tr key={index}>
                    <td>{student.imie}</td>
                    <td>{student.nazwisko}</td>
                    <td>{student.rocznik}</td>
                </tr>
            ))}
        </table>
        <Dodawanie setStudents={setStudents} />
        </>
    )
}

export default StudentManager;