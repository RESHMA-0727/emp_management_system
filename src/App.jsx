import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Employees from "./pages/employees";
import AddEmployee from "./pages/addemployee";
import EditEmployee from "./pages/editemployee";
import ViewEmployee from "./pages/viewemployee";
import NotFound from "./pages/notfound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/add-employee" element={<AddEmployee />} />
      <Route path="/edit-employee/:id" element={<EditEmployee />} />
      <Route path="/view-employee/:id" element={<ViewEmployee />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;