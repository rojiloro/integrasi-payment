import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import cssModules from "../css/Tiket.module.css";
import Image from "react-bootstrap/Image";

function FormTiket() {
  return (
    <>
      <div className={cssModules.homeTiketContainer}>
        <Container>
          <Row>
            <Col sm={4} className={cssModules.tiketKolom}>
              <div className={cssModules.tiketKotakOren}></div>
              <div className={cssModules.tiketTag}>
                <Image src="../assets/img/icon-train.png" className={cssModules.iconTrain} />
                <p className={cssModules.tiketPtext}>Tiket Kereta Api</p>
              </div>
            </Col>
            <Col sm={8}>
              <p className={cssModules.tiketPtext2}>Tiket Kereta Api</p>
              <Row>
                <Col xl={5}>
                  <div className={cssModules.tiketGrup}>
                    <p className={cssModules.tiketPtext3}>Asal</p>
                    <input className={cssModules.tiketInput} placeholder="Jakarta"></input>
                  </div>
                  <div>
                    <p className={cssModules.tiketPtext3}>Tanggal Berangkat</p>
                    <input type="Checkbox" className={cssModules.tiketCheckbox} />
                    <p className={cssModules.tiketPtext4}>Pulang Pergi</p>
                  </div>
                  <div className={cssModules.tiketGrup}>
                    <input type="date" className={cssModules.tiketDate} />
                  </div>
                </Col>
                <Col xl={2}>
                  <Image src="../assets/img/Rounded.png" className={cssModules.imgRounded} />
                </Col>
                <Col xl={5}>
                  <div className={cssModules.tiketGrup}>
                    <p className={cssModules.tiketPtext3}>Tujuan</p>
                    <input className={cssModules.tiketInput} placeholder="Surabaya"></input>
                  </div>
                  <div className={cssModules.tiketGrup2}>
                    <p className={cssModules.tiketPtext3}>Dewasa</p>
                    <p className={cssModules.tiketPtext5}>Bayi</p>
                  </div>
                  <div className={cssModules.tiketSelectP}>
                    <div className={cssModules.tiketGrup}>
                      <select className={cssModules.tiketSelect}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className={cssModules.tiketGrup}>
                      <select className={cssModules.tiketSelect}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div>
                      <Button className={cssModules.btnCari}>Cari Tiket</Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FormTiket;
