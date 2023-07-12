import { Container, Row, Col } from "react-bootstrap";
import cssModules from "../css/Admin.module.css";
import TableAdmin from "../Components/TableAdmin";
import Footer from "../Components/Footer"

function AdminIndex() {
  return (
    <>
      <Container>
        <p className="fw-bold fs-3" style={{ marginTop: "5.13rem" }}>
          List transaksi
        </p>

        <div className={cssModules.header}>
          <Row>
            <Col m={2}>
              <p>No</p>
            </Col>
            <Col s={2}>
              <p>Users</p>
            </Col>
            <Col s={2}>
              <p>Tiket</p>
            </Col>
            <Col s={2}>
              <p>Bukti Transfer</p>
            </Col>
            <Col s={2}>
              <p>Status Payment</p>
            </Col>
            <Col s={2}>Action</Col>
          </Row>
          <hr></hr>
          <TableAdmin No="1" Users="oji" Tiket="Jakarta-surabaya" BuktiTransfer="bri.jpg" Status="pending" />
          <TableAdmin No="2" Users="Bastian" Tiket="Jakarta-surabaya" BuktiTransfer="bri.jpg" Status="pending" />
          <TableAdmin No="3" Users="Bastian" Tiket="Jakarta-surabaya" BuktiTransfer="bri.jpg" Status="pending" />
          <TableAdmin No="4" Users="Bastian" Tiket="Jakarta-surabaya" BuktiTransfer="bri.jpg" Status="pending" />
          <TableAdmin No="5" Users="Bastian" Tiket="Jakarta-surabaya" BuktiTransfer="bri.jpg" Status="pending" />
          <TableAdmin No="6" Users="Bastian" Tiket="Jakarta-surabaya" BuktiTransfer="bri.jpg" Status="pending" />
          
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default AdminIndex;
