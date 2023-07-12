// import bootstrap

import { Button, Container } from "react-bootstrap";
import { Modal } from "react-bootstrap/";

import cssModules from "../css/RegisterLogin.module.css";

export default function FormRegister({ show, showDaftar }) {
  const handleClose = () => showDaftar(false);
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Container className={cssModules.container}>
          <form className="text-center mb-5">
            <div className={cssModules.scroll}>
              <h1 className={cssModules.h1}>Daftar</h1>
              <input type="text" placeholder="Nama Lengkap" className={cssModules.Input} />
              <input type="text" placeholder="Username" className={cssModules.Input} />
              <input type="email" placeholder="Email" className={cssModules.Input} />
              <input type="password" placeholder="Password" className={cssModules.Input} />
              <select className={cssModules.Input}>
                <option selected="selected" disabled>
                  Jenis Kelamin{" "}
                </option>
                <option>Laki-laki</option>
                <option>Perempuan</option>
              </select>
              <input type="number" placeholder="Telp" className={cssModules.Input} />
              <textarea className={cssModules.textarea} placeholder="Alamat"></textarea>
              <button className={cssModules.btn} style={{ marginBottom: "3rem" }}>
                Daftar
              </button>
            </div>
          </form>
        </Container>
      </Modal>
    </div>
  );
}
