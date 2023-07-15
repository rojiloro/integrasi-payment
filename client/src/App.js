import { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { UserContext } from "./Context/UserContext";
import { API, setAuthToken } from "./Config/api";

import Navigasi from "./Components/Navigasi";
import Home from "./Pages/Home";
import Cetak from "./Pages/Cetak";
import Invoice from "./Pages/Invoice";
import AdminIndex from "./Pages/AdminIndex";
import PrivateRoute, { PrivateRouteUser } from "./PrivateRoute/PrivateRoute";
import AddTicket from "./Pages/AddTicket";
import Approved from "./Pages/approved";

// if (localStorage.getItem("token")) {
//   setAuthToken(localStorage.getItem("token"));
// }

function App() {
  let navigate = useNavigate();

  const [state, dispatch] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      checkUser();
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (state.isLogin === false) {
        navigate("/");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check/auth");

      console.log("Check user success : ", response);

      let payload = response.data.data;

      payload.token = localStorage.token;

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });

      setIsLoading(false);
    } catch (error) {
      console.log("Check user failed : ", error);
      dispatch({
        type: "AUTH_ERROR",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <Navigasi />
      {isLoading ? null : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/" element={<PrivateRoute />} />
          <Route element={<PrivateRouteUser />}>
            <Route path="/cetak" element={<Cetak />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/adminindex" element={<AdminIndex />} />
          </Route>
          <Route element={<PrivateRouteUser />}>
            <Route path="/addticket" element={<AddTicket />} />
            <Route path="/tiketApproved" element={<Approved />} />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
