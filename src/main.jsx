import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import EmployeesList from './pages/EmployeesList';
import Error from './pages/Error';
import { EmployeesProvider } from './components/EmployeesContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmployeesProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employeesList" element={<EmployeesList />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </EmployeesProvider>
  </StrictMode>,
);
