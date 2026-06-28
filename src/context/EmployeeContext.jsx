import { createContext, useEffect, useState } from "react";
import employeesData from "../data/employees";

export const EmployeeContext = createContext();

function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem("employees");

    return savedEmployees
      ? JSON.parse(savedEmployees)
      : employeesData;
  });

  useEffect(() => {
    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );
  }, [employees]);

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        setEmployees,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeProvider;