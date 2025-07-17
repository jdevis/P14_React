import { createContext, useContext, useState } from 'react';
import { EMPLOYEES } from '../data/mockData';

const EmployeesContext = createContext();

export const useEmployees = () => useContext(EmployeesContext);

export const EmployeesProvider = ({ children }) => {
  const [employees, setEmployees] = useState(EMPLOYEES);
  return (
    <EmployeesContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeesContext.Provider>
  );
};