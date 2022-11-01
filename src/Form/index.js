import "./style.css";

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">Przelicz kursy walut:</legend>
            <label>
                <span className="form__labelText">Kwota do przeliczenia*:</span>
                <input
                    className="form__field"
                    type="number"
                    required min="0.01"
                    step="0.01"
                />
                PLN
            </label>
            <label>
                <span className="form__labelText">Wybierz walutę:</span>
                <select
                    className="form__field form__select"
                    name="currencyConverted"
                >
                    <option>EUR</option>
                    <option>USD</option>
                    <option>GBP</option>
                </select>
            </label>
        </fieldset>
        <p className="form__paragraph">Pola oznaczone * są wymagane.</p>
        <p>
            <button className="form__button">Przelicz</button>
            <input className="form__field form__field--reset"
                type="reset" value="Wyczyść" />
        </p>
    </form>
);

export default Form;