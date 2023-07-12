import { Button, Container } from "react-bootstrap";
import Footer from "../Components/Footer";

export default function addTicket() {
  return (
    <>
      <div>
        <Container>
          <h2 style={{ marginTop: "3.31rem", marginBottom: "5.44rem" }}>Tambah Tiket</h2>
          <input type="text" placeholder="Nama Kereta" style={{ width: "100%", borderRadius: "0.3125rem", border: "2px solid #B1B1B1", marginBottom: "2.13rem" }} />
          <input type="text" placeholder="Jenis Kereta" style={{ width: "100%", borderRadius: "0.3125rem", border: "2px solid #B1B1B1", marginBottom: "2.13rem" }} />
          <input type="text" placeholder="Tanggal Keberangkatan" style={{ width: "100%", borderRadius: "0.3125rem", border: "2px solid #B1B1B1", marginBottom: "2.13rem" }} />
          <input type="text" placeholder="Stasiun Keberangkatan" style={{ width: "100%", borderRadius: "0.3125rem", border: "2px solid #B1B1B1", marginBottom: "2.13rem" }} />
          <input type="text" placeholder="Jam Keberangkatan" style={{ width: "100%", borderRadius: "0.3125rem", border: "2px solid #B1B1B1", marginBottom: "2.13rem" }} />
          <input type="text" placeholder="Stasiun Tujuan" style={{ width: "100%", borderRadius: "0.3125rem", border: "2px solid #B1B1B1", marginBottom: "2.13rem" }} />
          <input type="text" placeholder="Jam Tiba" style={{ width: "100%", borderRadius: "0.3125rem", border: "2px solid #B1B1B1", marginBottom: "2.13rem" }} />
          <input type="text" placeholder="Harga Tiket" style={{ width: "100%", borderRadius: "0.3125rem", border: "2px solid #B1B1B1", marginBottom: "2.13rem" }} />
          <input type="text" placeholder="Qty" style={{ width: "100%", borderRadius: "0.3125rem", border: "2px solid #B1B1B1", marginBottom: "2.13rem" }} />
          <Button variant="success" style={{ width: "25rem", display: "flex", justifyContent: "center", marginLeft:"24rem", marginBottom:"5rem" }}>
            Save
          </Button>
        </Container>
        <Footer/>
      </div>
    </>
  );
}
