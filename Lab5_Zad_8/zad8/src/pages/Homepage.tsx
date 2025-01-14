import Licznik from "../components/licznik.tsx";
import {Link} from "react-router-dom"

const Homepage = () => {
    return (
        <div className="outer-div">
            <h1>Witaj na stronie umożliwiającej dodanie artykułów!!!!!!!</h1>
            {/*<Licznik />*/}
            <button>
                <Link to="/blog">Przejdź do Bloga!!!</Link>
            </button>

        </div>
    )
}

export default Homepage;