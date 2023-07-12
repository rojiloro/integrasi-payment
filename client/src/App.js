import Navigasi from "./Components/Navigasi";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Cetak from "./Pages/Cetak";
import Invoice from "./Pages/Invoice";
import AdminIndex from "./Pages/AdminIndex";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddTicket from "./Pages/addTicket";

function App() {
  return (
    <>
      <Navigasi />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/" element={<PrivateRoute />} />
        <Route path="/cetak" element={<Cetak />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/adminindex" element={<AdminIndex />} />
        <Route path="/addticket" element={<AddTicket />} />
      </Routes>
    </>
  );
}

export default App;
