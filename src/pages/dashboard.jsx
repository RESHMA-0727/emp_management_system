import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import "../styles/dashboard.css";

function Dashboard() {
  const { employees } = useContext(EmployeeContext);

  const totalEmployees = employees.length;

  const totalDepartments = [
    ...new Set(employees.map((emp) => emp.department)),
  ].length;

  const avgSalary = Math.round(
    employees.reduce(
      (sum, emp) => sum + Number(emp.salary),
      0
    ) / totalEmployees
  );

  return (
    <>
      <Navbar />

      <div className="dashboard-container">
        <h1 className="dashboard-title">
          👋 Welcome Back
        </h1>

        <p className="dashboard-subtitle">
          Manage your employees with a modern HR dashboard.
        </p>

        <div className="dashboard-cards">
          <div className="dashboard-card blue">
            <h3>👥 Total Employees</h3>
            <h1>{totalEmployees}</h1>
          </div>

          <div className="dashboard-card green">
            <h3>🏢 Departments</h3>
            <h1>{totalDepartments}</h1>
          </div>

          <div className="dashboard-card orange">
            <h3>💰 Average Salary</h3>
            <h1>₹{avgSalary.toLocaleString()}</h1>
          </div>

          <div className="dashboard-card purple">
            <h3>📊 Status</h3>
            <h1>Active</h1>
          </div>
        </div>

        <div className="dashboard-buttons">
          <Link to="/employees">
            <button className="dashboard-btn">
              👥 Employee List
            </button>
          </Link>

          <Link to="/add-employee">
            <button className="dashboard-btn">
              ➕ Add Employee
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Dashboard;