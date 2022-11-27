import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import GlobalStyle from "./GlobalStyles/globalStyles";
import { useState } from "react";
import { useCurrencies } from "./useCurrencies";

function App() {
  const [result, setResult] = useState({});
  const ratesData = useCurrencies();

  const calculateResult = (amountExchange, currency) => {
    const rateExchange = ratesData.rates[currency];

    setResult({
      resultFinal: (+amountExchange * rateExchange).toFixed(2),
      currency,
    });
  };

  return (
    <main>
      <GlobalStyle />
      <Header title="Kalkulator walut" />
      <Form
        calculateResult={calculateResult}
        setResult={setResult}
        ratesData={ratesData}
      />
      <Result
        result={result}
      />
    </main>
  );
}

export default App;
