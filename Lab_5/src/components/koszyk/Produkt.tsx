type ProduktyProps = {productName: string};
const Produkt = ({ productName }: ProduktyProps) => {
    return <div>{productName}</div>;
};

export default Produkt;