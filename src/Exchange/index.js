import "./style.css";

const Exchange = () => (
    <label>
        <span className="exchange__title">Kwota do przeliczenia*:</span>
        <input
            className="exchange__field"
            type="number"
            required min="0.01"
            step="0.01"
        />
        PLN
    </label>
);

export default Exchange;