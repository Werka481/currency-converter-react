import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import GlobalStyle from "./GlobalStyles/globalStyles";
import { useState } from "react";
import { currencies } from "./utils/currencies";

function App() {
  const [result, setResult] = useState(null);

  const calculateResult = (amountExchange, currency) => {
    const rateExchange = currencies.find(({ short }) => short === currency).rate;
    const currencyFinal = currencies.find(({ short }) => short === currency).short;

    setResult((+amountExchange / rateExchange).toFixed(2) + currencyFinal);

  };

  return (
    <main>
      <GlobalStyle />
      <Header title="Kalkulator walut" />
      <Form
        calculateResult={calculateResult}
        setResult={setResult}
      />
      <Result
        result={result}
      />
    </main>
  );
}

export default App;
