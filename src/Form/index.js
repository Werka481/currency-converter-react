import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies/currencies";

const Form = ({ calculateResult }) => {
    const [amountExchange, setAmountExchange] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amountExchange, currency);
    };

    const onFormReset = () => {
        setAmountExchange("");
        setCurrency("Euro");
    };

    return (
        <form className="form" onSubmit={onFormSubmit} onReset={onFormReset}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Przelicz kursy walut:</legend>
                <label>
                    <span className="form__labelText">Kwota do przeliczenia*:</span>
                    <input
                        className="form__field"
                        type="number"
                        required min="0.01"
                        step="0.01"
                        value={amountExchange}
                        onChange={({ target }) => setAmountExchange(target.value)}
                    />
                    PLN
                </label>
                <label>
                    <span className="form__labelText">Wybierz walutę:</span>
                    <select
                        className="form__field form__select"
                        name="currencyConverted"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                        {currencies.map(currency => (
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.name}
                            </option>
                        ))};
                    </select>
                </label>
            </fieldset>
            <p className="form__paragraph">Pola oznaczone * są wymagane.</p>
            <p>
                <button className="form__button">Przelicz</button>
                <input className="form__field form__field--reset"
                    type="reset" value="Wyczyść" />
            </p>
        </form >
    )
};

export default Form;