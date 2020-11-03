import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Tarjeta from "./Components/Tarjeta";


function App() {
  const products = [
    {
      id: 1,
      img: "",
      title: "image 1",
    },
  ];
  return (
    <div className="App">
      <Container>
        <Tarjeta products={products} />
      </Container>
    </div>
  );
}

export default App;
