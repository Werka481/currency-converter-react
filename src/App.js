import Header from "./Header";
import Form from "./Form";
import Exchange from "./Exchange";
import CurrencyRate from "./CurrencyRate";
import Result from "./Result";
import Container from "./Container";

function App() {
  return (
    <Container>
      <Header title="Kalkulator walut" />
      <Form
        amountExchange={<Exchange />}
        currency={<CurrencyRate />}
      />
      <Result />
    </Container>
  );
}

export default App;
