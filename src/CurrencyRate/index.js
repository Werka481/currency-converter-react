import "./style.css";

const CurrencyRate = () => (
    <label>
        <span className="currencyRate__title">Wybierz walutę:</span>
        <select className="currencyRate__field currencyRate__select" name="currencyConverted">
            <option value="4.86">EUR</option>
            <option value="4.95">USD</option>
            <option value="5.52">GBP</option>
        </select>
    </label>
);

export default CurrencyRate;