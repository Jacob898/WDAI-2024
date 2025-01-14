import './App.css'
import Koszyk from "./components/koszyk/Koszyk.tsx";
import NowyKoszyk from "./components/koszyk/NowyKoszyk.tsx";
import Licznik from "./components/liczniki/Licznik.tsx";
import NowyLicznik from "./components/liczniki/NowyLicznik.tsx";
import Formularz from "./components/formularze/Formularz.tsx";
import Haslo from "./components/formularze/Haslo.tsx";
import Logowanie from "./components/formularze/Logowanie.tsx";
import Ternary from "./components/inne/Ternary.tsx";
import Aktualizacja from "./components/inne/Aktualizacja.tsx";
import Studenci from "./components/studenci/Studenci.tsx";
import StudentManager from "./components/studenci/StudentManager.tsx";
import LicznikEfekty from "./efekty/LicznikEfekty.tsx";
import Tytul from "./efekty/Tytul.tsx";
import Odliczanie from "./efekty/Odliczanie.tsx";
// import Komentarz from "./components/produkty/Komentarz.tsx";
import Komentarze from "./components/produkty/Komentarze.tsx";

function App() {
  return (
      <div>
          <Koszyk />
          <NowyKoszyk />
          <Licznik />
          <NowyLicznik />
          <Formularz />
          <Haslo />
          <Logowanie />
          <Ternary />
          <Aktualizacja />
          <Studenci />
          <StudentManager />
          <LicznikEfekty />
          <Tytul />
          <Odliczanie />
          {/*<Komentarz id={101} body={"Przykładowy komentarz"} postID={10} likes={15} user={"Example User"} />*/}
          <Komentarze />
      </div>
  )
}

export default App
