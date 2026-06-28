import { Link } from "react-router-dom";
import { FaUsers, FaHome, FaPlusCircle, FaSignOutAlt } from "react-icons/fa";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        💼 EmployeeMS
      </div>

      <div className="nav-links">
        <Link to="/dashboard">
          <FaHome /> Dashboard
        </Link>

        <Link to="/employees">
          <FaUsers /> Employees
        </Link>

        <Link to="/add-employee">
          <FaPlusCircle /> Add Employee
        </Link>

        <Link to="/">
          <FaSignOutAlt /> Logout
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;