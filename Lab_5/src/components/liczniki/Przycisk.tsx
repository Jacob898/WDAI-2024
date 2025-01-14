type PrzyciskProps = { onClick: () => void };

const Przycisk = ({ onClick }: PrzyciskProps) => {
    return (
        <button onClick={onClick}>Dodaj</button>
    )
}

export default Przycisk;
