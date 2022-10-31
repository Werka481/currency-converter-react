import "./style.css";

const Form = ({ amountExchange, currency }) => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">Przelicz kursy walut:</legend>
            {amountExchange}
            {currency}
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