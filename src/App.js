import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import Container from "./Container";

function App() {
  return (
    <Container>
      <Header title="Kalkulator walut" />
      <Form/>
      <Result />
    </Container>
  );
}

export default App;
