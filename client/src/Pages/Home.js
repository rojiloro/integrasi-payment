// import component
import Jumbotron from "../Components/Jumbotron";
import FormTiket from "../Components/FormTiket";
import Rute from "../Components/Rute";
import Footer from "../Components/Footer";
import API from "../Config/api"

// import react-bootstrap
import { Container, Row, Col } from "react-bootstrap";


function Home() {
  return (
    <>
      <Jumbotron />
      <FormTiket />
      <Container>
        <Row style={{ marginLeft: "1rem" }}>
          <Col xs={2}>
            <p>Nama Kereta</p>
          </Col>
          <Col xs={2}>
            <p>Berangkat</p>
          </Col>
          <Col xs={2}>
            <p>Tiba</p>
          </Col>
          <Col xs={2}>
            <p>Durasi</p>
          </Col>
          <Col s={2}>
            <p>Harga Per Orang</p>
          </Col>
        </Row>
      </Container>
      <Rute />
      <Footer />
    </>
  );
}

export default Home;
