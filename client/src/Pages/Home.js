// import component
import Jumbotron from "../Components/Jumbotron";
import FormTiket from "../Components/FormTiket";
import Rute from "../Components/Rute";
import Footer from "../Components/Footer";

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
      <Rute Kereta="Argo Bromo" Kelas="Premium" Berangkat="06.00" Stasiun="Gambir" Tiba="16.10" Tujuan="Malang" Durasi="10 j 10 m" Harga={350000}  />
      <Rute Kereta="Argo Bromo" Kelas="Premium" Berangkat="06.00" Stasiun="Gambir" Tiba="16.10" Tujuan="Malang" Durasi="10 j 10 m" Harga={350000} />
      <Rute Kereta="Serayu malam" Kelas="Ekonomi" Berangkat="21.00" Stasiun="Gambir" Tiba="08.20" Tujuan="Purwokerto" Durasi="11 j 20 m" Harga={67000} />
      <Footer />
    </>
  );
}

export default Home;
