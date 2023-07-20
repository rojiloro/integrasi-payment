// import component
import Jumbotron from "../Components/Jumbotron";
import FormTiket from "../Components/FormTiket";

// import react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <>
      <Jumbotron />
      <FormTiket />
    </>
  );
}

export default Home;
