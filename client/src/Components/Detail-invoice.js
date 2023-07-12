import React from "react";
import { Button, Container, Modal } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

import cssModules from "../css/invoice.module.css";

function Detailinvoice() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <Container>
          <p className="fs-3 fw-400 mt-5">Invoice</p>
          <div className={cssModules.content1}>
            <Row>
              <Col xs={2}>
                <Image src="../assets/img/error 1.png" className={cssModules.img1} />
              </Col>
              <Col l={10}>
                <div className={cssModules.text1}>
                  <p>Silakan melakukan pembayaran memalui M-Banking, E-Banking dan ATM Ke No.rek Yang Tertera </p>
                  <p className="mt-5">No.rek : 09812312312</p>
                </div>
              </Col>
            </Row>
          </div>
          {/* box yang ada barcodenya */}
          <div className={cssModules.box}>
            <div className={cssModules.box2}>
              <Row>
                <Col m={10}>
                  <h1 className={cssModules.h1}>Kereta Api</h1>
                  <p className={cssModules.text2}>
                    <b>Saturday</b>, 21 Febuari 2020
                  </p>
                </Col>
                <Col xs={2}>
                  <Image src="../assets/img/qr-code 1.png" className={cssModules.img2} />
                </Col>
              </Row>
            </div>
            <Row>
              <Col m={6}>
                <div>
                  <p className={cssModules.text3}>Argo Wilis</p>
                  <p className={cssModules.text4}>Eksekutif</p>
                </div>
                <div style={{ marginLeft: "-1rem" }}>
                  <div className={cssModules.bulat}></div>
                  <div className={cssModules.garis}></div>
                  <div className={cssModules.bulat2}></div>
                </div>
                <div className={cssModules.posisi1}>
                  <p className={cssModules.text5}>05.00</p>
                  <p className={cssModules.text6}>21 Febuari 2020</p>
                </div>
                <div className={cssModules.posisi1}>
                  <p className={cssModules.text5}>10.05</p>
                  <p className={cssModules.text6}>21 Febuari 2020</p>
                </div>
              </Col>
              <Col m={6}>
                <div className={cssModules.posisi2}>
                  <p className={cssModules.text5}>Jakarta</p>
                  <p className={cssModules.text6}>Stasiun Gambir</p>
                </div>
                <div className={cssModules.posisi3}>
                  <p className={cssModules.text5}>Surabaya</p>
                  <p className={cssModules.text6}>Stasiun Surabaya</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <div className={cssModules.content2}>
            <div className={cssModules.shape}>
              <Image src="../assets/img/Land Tick.png" />
              <Image src="../assets/img/train-facing-right 2.png" />
            </div>
            <div className={cssModules.wrap}>
              <Row>
                <Col m={3}>
                  <p>No Tanda Pengenal</p>
                </Col>
                <Col m={3}>
                  <p>Nama Pemesan</p>
                </Col>
                <Col m={3}>
                  <p>No. Handphone</p>
                </Col>
                <Col m={3}>
                  <p>Email</p>
                </Col>
              </Row>
            </div>
            <hr></hr>
            <div className={cssModules.abu2}>
              <Row>
                <Col m={3}>
                  <p>31175033003970001</p>
                </Col>
                <Col m={3}>
                  <p>Oji</p>
                </Col>
                <Col m={3}>
                  <p>083896833112</p>
                </Col>
                <Col m={3}>
                  <p>oji@gmail.com</p>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <p className="fs-3 fw-400 mt-5">Rincian Harga</p>
          <div className={cssModules.content3}>
            <Row>
              <Col m={6}>
                <div className={cssModules.wrap2}>
                  <p>Argo Wilis (Dewasa) x1</p>
                </div>
              </Col>
              <Col m={6}>
                <div className={cssModules.wrap2}>
                  <p>Rp 250.000</p>
                </div>
              </Col>
            </Row>
            <div className={cssModules.total}>
              <Row>
                <Col m={6}>
                  <p style={{ fontSize: "1.5rem", marginLeft: "2rem" }}>Total</p>
                </Col>
                <Col m={6}>
                  <p style={{ fontSize: "1.5rem", fontWeight: "900", marginLeft: "2rem" }}>Rp 250.000</p>
                </Col>
              </Row>
            </div>
          </div>
          <div>
            <Button className={cssModules.btn} onClick={handleShow}>
              Bayar Sekarang
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Container>
                <div style={{ marginLeft: "3.25rem" }}>
                  <div className={cssModules.title}>
                    <p>E-Ticket</p>
                  </div>
                  <div className={cssModules.shape2}>
                    <Image src="../assets/img/Land Tick.png" />
                    <Image src="../assets/img/train-facing-right 2.png" />
                  </div>

                  <div className={cssModules.inv}>
                    <p>Kode Invoice : INV0101</p>
                  </div>
                  <div className={cssModules.api}>
                    <p>Kereta Api</p>
                  </div>
                  <div className={cssModules.februari}>
                    <p>Saturday, 21 Febuari 2020</p>
                  </div>
                  <div className={cssModules.wilis}>
                    <p>Argo Wilis</p>
                  </div>
                  <div className={cssModules.ekse}>
                    <p>Eksekutif (H)</p>
                  </div>
                  <div>
                    <div className={cssModules.bulat} style={{ marginLeft: "-3rem" }}></div>
                    <div className={cssModules.garis} style={{ marginLeft: "-2rem" }}></div>
                    <div className={cssModules.bulat2} style={{ marginLeft: "-2rem" }}></div>
                  </div>
                  <div>
                    <p className={cssModules.jam}>05.00</p>
                    <p className={cssModules.date}>21 Febuari 2020</p>
                  </div>
                  <div style={{ marginTop: "2rem", marginLeft: "2rem" }}>
                    <p className={cssModules.jam} style={{ marginLeft: "-0.2rem" }}>
                      10.05
                    </p>
                    <p className={cssModules.date} style={{ marginLeft: "0rem" }}>
                      21 Febuari 2020
                    </p>
                  </div>
                  <div style={{ marginLeft: "10rem", marginTop: "-9.5rem" }}>
                    <div>
                      <p className={cssModules.jam}>Jakarta</p>
                      <p className={cssModules.date}>Stasiun Jakarta</p>
                    </div>
                    <div style={{ marginTop: "2rem", marginLeft: "2rem" }}>
                      <p className={cssModules.jam} style={{ marginLeft: "-0.2rem" }}>
                        Surabaya
                      </p>
                      <p className={cssModules.date} style={{ marginLeft: "0rem" }}>
                        Stasiun Surabaya
                      </p>
                    </div>
                  </div>
                  <Image style={{ marginLeft: "20rem", marginTop: "-28rem", width: "4.5rem", height: "4.5rem", flexBasis: "0" }} src="../assets/img/qr-code 1.png"></Image>
                </div>
                <hr></hr>
                <div>
                  <Image src="../assets/img/pass 1.png" style={{width: "2.5rem", height: "2.5rem", flexShrink: "0"}}/>
                  <p>Tunjukkan e-ticket dan identitas para penumpang saat checkin</p>
                </div>
              </Container>
            </Modal>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Detailinvoice;
