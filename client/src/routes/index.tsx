import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Player } from "../pages/player";
import { Admin } from "../pages/admin";

const RoutesCom = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/player" element={<Player />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesCom;
