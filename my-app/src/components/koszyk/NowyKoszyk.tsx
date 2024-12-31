import Produkt from "./Produkt.tsx";

const NowyKoszyk = () => {

    const Produkty = ["Jabłko","Gruszka","Marchew","Truskawka","Banan"]

    return (
        <div>
            {Produkty.map((productName, index) => (
                <Produkt key={index} productName={productName} />
            ))}
        </div>
    );
};

export default NowyKoszyk;