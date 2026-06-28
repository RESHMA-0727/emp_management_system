import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import Navbar from "../components/Navbar";
import "../styles/employee.css";

function Employees() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const { employees, setEmployees } = useContext(EmployeeContext);

  const deleteEmployee = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (confirmDelete) {
      setEmployees(
        employees.filter((employee) => employee.id !== id)
      );
    }
  };

  const filteredEmployees = employees
    .filter((employee) => {
      const matchName = employee.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchDepartment =
        department === "All" ||
        employee.department === department;

      return matchName && matchDepartment;
    })
    .sort((a, b) => {
      if (sortOrder === "low") {
        return Number(a.salary) - Number(b.salary);
      }

      if (sortOrder === "high") {
        return Number(b.salary) - Number(a.salary);
      }

      return 0;
    });

  return (
    <>
      <Navbar />

      <div className="employee-container">
        <h1>Employee List</h1>

        <br />

        <input
          className="search-box"
          type="text"
          placeholder="🔍 Search Employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <br /><br />

        <select
          className="search-box"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="All">All Departments</option>
          <option value="HR">HR</option>
          <option value="Development">Development</option>
          <option value="Testing">Testing</option>
        </select>

        <br /><br />

        <select
          className="search-box"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Sort Salary</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>

        <br /><br />

        <table className="employee-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredEmployees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>₹{Number(employee.salary).toLocaleString()}</td>
                <td>{employee.email}</td>
                <td>
                  <div className= "action-buttons">
                  <Link to={`/edit-employee/${employee.id}`}>
                    <button className="edit-btn">Edit</button>
                  </Link>
                  <Link to={`/view-employee/${employee.id}`}>
  <button
    style={{
      background: "#2563eb",
      color: "white",
      marginLeft: "10px",
      border: "none",
      padding: "8px 12px",
      borderRadius: "6px",
      cursor: "pointer",
    }}
  >
    View
  </button>
</Link>

                  <button
                    className="delete-btn"
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    Delete
                  </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Employees;