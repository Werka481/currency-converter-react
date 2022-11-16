import { StyledForm, Fieldset, Legend, LabelText, Input, Select, Information, Button } from "./styled";
import { useState } from "react";
import { currencies } from "../utils/currencies";

const Form = ({ calculateResult, setResult }) => {
    const [amountExchange, setAmountExchange] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amountExchange, currency);
    };

    const onFormReset = () => {
        setAmountExchange("");
        setCurrency("EUR");
        setResult("");
    };

    return (
        <StyledForm onSubmit={onFormSubmit} onReset={onFormReset}>
            <Fieldset>
                <Legend>Przelicz kursy walut:</Legend>
                <label>
                    <LabelText>Kwota do przeliczenia*:</LabelText>
                    <Input
                        type="number"
                        required min="0.01"
                        step="0.01"
                        value={amountExchange}
                        onChange={({ target }) => setAmountExchange(target.value)}
                    />
                    PLN
                </label>
                <label>
                    <LabelText>Wybierz walutę:</LabelText>
                    <Select
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
                    </Select>
                </label>
            </Fieldset>
            <Information>Pola oznaczone * są wymagane.</Information>
            <p>
                <Button>Przelicz</Button>
                <Input
                    reset
                    type="reset"
                    value="Wyczyść"
                />
            </p>
        </StyledForm>
    )
};

export default Form;