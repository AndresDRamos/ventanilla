import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login.jsx";

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
