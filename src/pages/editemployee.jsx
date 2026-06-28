import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import Navbar from "../components/Navbar";

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { employees, setEmployees } = useContext(EmployeeContext);

  const employee = employees.find(
    (emp) => emp.id === Number(id)
  );

  const [name, setName] = useState(employee?.name || "");
  const [department, setDepartment] = useState(employee?.department || "");
  const [salary, setSalary] = useState(employee?.salary || "");
  const [email, setEmail] = useState(employee?.email || "");

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedEmployees = employees.map((emp) =>
      emp.id === Number(id)
        ? {
            ...emp,
            name,
            department,
            salary,
            email,
          }
        : emp
    );

    setEmployees(updatedEmployees);

    alert("Employee Updated Successfully!");

    navigate("/employees");
  };

  return (
    <>
    <Navbar/>
    <div style={{ padding: "30px" }}>
      <h1>Edit Employee</h1>

      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <button type="submit">Update Employee</button>

        <br /><br />

        <Link to="/employees">
          <button type="button">Back</button>
        </Link>
      </form>
    </div>
    </>
  );
}

export default EditEmployee;