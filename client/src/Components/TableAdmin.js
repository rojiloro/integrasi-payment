import { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ModalTiketAdmin from "./Modal-tiket-admin";
import ModalEditAdmin from "./Modal-edit-admin";

function TableAdmin(props) {
  const [show, setShow] = useState(false);
  const [showEdit, setEditShow] = useState(false);

  return (
    <>
      <Row>
        <Col m={2}>
          <p>{props.No}</p>
        </Col>
        <Col s={2}>
          <p>{props.Users}</p>
        </Col>
        <Col s={2}>
          <p>{props.Tiket}</p>
        </Col>
        <Col s={2}>
          <p>{props.BuktiTransfer}</p>
        </Col>
        <Col s={2}>
          <p>{props.Status}</p>
        </Col>
        <Col s={2}>
          <Row>
            <div style={{ cursor: "pointer", display: "flex" }}>
              <Col xs={4}>
                <Image src="../assets/img/search 1.png" onClick={() => setShow(true)} />
              </Col>
              <Col xs={4}>
                <Image src="../assets/img/edit.png" onClick={() => setEditShow(true)} />
              </Col>
              <Col xs={4}>
                <Image src="../assets/img/trash 1.png" />
              </Col>
            </div>
          </Row>
        </Col>
      </Row>
      <hr></hr>
      <ModalTiketAdmin show={show} showModal={setShow} />
      <ModalEditAdmin showEdit={showEdit} showEditModal={setEditShow} />
    </>
  );
}

export default TableAdmin;
