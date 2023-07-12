import { Container } from "react-bootstrap";
import { Modal } from "react-bootstrap";

import cssModules from "../css/RegisterLogin.module.css";

import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

export default function FormLogin({ show, showLogin, showDaftar }) {
  const handleClose = () => showLogin(false);

  const SwitchKlik = () => {
    handleClose();
    showDaftar(true);
  };
  // ini useContextnya login

  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    let status;
    if ((username === "admin", password === "admin123")) {
      dispatch({
        type: "ADMIN_LOGIN_SUCCESS",
        status: true,
        payload: username,
      });
      alert("admin");
      navigate("/adminIndex");
    } else {
      dispatch({
        type: "USER_LOGIN_SUCCESS",
        status: false,
        payload: username,
      });
      alert("user");
      navigate("/");
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Container>
          <form className="text-center mb-5" onSubmit={handleSubmit}>
            <div>
              <h1 className={cssModules.h1}>LOGIN</h1>
              <input id="username" type="username" placeholder="Username" className={cssModules.Input} required />
              <input id="password" type="password" placeholder="Password" className={cssModules.Input} required />
              <button type="submit" className={cssModules.btn} onClick={handleClose}>
                Login
              </button>

              <p className={cssModules.p}>
                Belum Punya Akun?{" "}
                <span className={cssModules.b} onClick={SwitchKlik}>
                  Klik Disini
                </span>
              </p>
            </div>
          </form>
        </Container>
      </Modal>
    </>
  );
}
