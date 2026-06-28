import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import Navbar from "../components/Navbar";

function ViewEmployee() {
  const { id } = useParams();

  const { employees } = useContext(EmployeeContext);

  const employee = employees.find(
    (emp) => emp.id === Number(id)
  );

  if (!employee) {
    return <h2>Employee Not Found</h2>;
  }

  return (
    <>
      <Navbar />

      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>Employee Details</h1>

        <br />

        <h2>👤 {employee.name}</h2>

        <p>
          <b>Department:</b> {employee.department}
        </p>

        <p>
          <b>Salary:</b> ₹
          {Number(employee.salary).toLocaleString()}
        </p>

        <p>
          <b>Email:</b> {employee.email}
        </p>

        <br />

        <Link to="/employees">
          <button>Back</button>
        </Link>
      </div>
    </>
  );
}

export default ViewEmployee;