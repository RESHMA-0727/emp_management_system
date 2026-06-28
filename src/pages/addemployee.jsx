import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import Navbar from "../components/Navbar";

function AddEmployee() {
  const navigate = useNavigate();

  const { employees, setEmployees } = useContext(EmployeeContext);

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !department || !salary || !email) {
      alert("Please fill all fields!");
      return;
    }

    const newEmployee = {
      id: employees.length + 1,
      name,
      department,
      salary,
      email,
    };

    setEmployees([...employees, newEmployee]);

    alert("Employee Added Successfully!");

    navigate("/employees");
  };

  return (
    <>
    <Navbar/>
    <div style={{ padding: "30px" }}>
      <h1>Add Employee</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <button type="submit">Add Employee</button>

        <br /><br />

        <Link to="/employees">
          <button type="button">Back</button>
        </Link>
      </form>
    </div>
    </>
  );
}

export default AddEmployee;