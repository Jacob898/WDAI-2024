import Produkt from "./Produkt.tsx";

const Koszyk = () => {
    return (
        <div>
            <Produkt productName="Jabłko" />
            <Produkt productName="Gruszka" />
            <Produkt productName="Marchew" />
            <Produkt productName="Truskawka" />
            <Produkt productName="Banan" />
        </div>
    );
};

export default Koszyk;