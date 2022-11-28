import { StyledForm, Fieldset, Legend, LabelText, Input, Select, Information, Button, SourceData } from "./styled";
import { useState } from "react";

const Form = ({ calculateResult, setResult, ratesData }) => {
    const [amountExchange, setAmountExchange] = useState("");
    const [currency, setCurrency] = useState("EUR");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amountExchange, currency);
    };

    const onFormReset = (event) => {
        event.preventDefault();
        setAmountExchange("");
        setCurrency("EUR");
        setResult("");
    };

    return (
        <StyledForm onSubmit={onFormSubmit} onReset={onFormReset}>
            {ratesData.status === "loading"
                ? (
                    <Information news>
                        Trwa ładowanie danych... Prosimy o chwileczkę cierpliwości🙂
                    </Information>
                )
                : (ratesData.status === "error")
                    ? (
                        <Information news>
                            Przepraszamy coś poszło nie tak. Sprawdź czy masz połącznie z internetem.
                            Jeśli tak to widocznie nasz błąd.😬 Spróbuj później.😊
                        </Information>
                    )
                    : (
                        <>
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
                                        {Object.keys(ratesData.rates).map((rates) => (
                                            <option
                                                key={rates}
                                                value={rates}
                                            >
                                                {rates}
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
                            <SourceData>
                                Kursy walut pobierane są z Europejskiego Centralnego Banku.
                            </SourceData>
                            <SourceData>Aktualna data: <strong>{ratesData.date}</strong></SourceData>
                        </>
                    )
            }
        </StyledForm >
    )
};

export default Form;