import { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid/DataGrid'
import Paper from '@mui/material/Paper'
import { useEmployees } from './EmployeesContext';

// Define the columns for the DataGrid
const columns = [
  { field: 'firstName', headerName: 'First name' },
  { field: 'lastName', headerName: 'Last name' },
  {
    field: 'birthDate',
    headerName: 'Birthdate',
    type: 'date'
  },
  {
    field: 'startDate',
    headerName: 'Start date',
    type: 'date'
  },
  { field: 'street', headerName: 'Street' },
  { field: 'city', headerName: 'City' },
  { field: 'zipCode', headerName: 'Zip Code' },
  { field: 'state', headerName: 'State' },
  { field: 'department', headerName: 'Department' },
];

const EmployeesTable = () => {
  const { employees } = useEmployees();

  const rows = employees.map((employee, index) => ({
    id: index + 1,
    firstName: employee.firstName,
    lastName: employee.lastName,
    birthDate: employee.birthDate ? new Date(employee.birthDate) : '',
    startDate: employee.startDate ? new Date(employee.startDate) : '',
    street: employee.street,
    city: employee.city,
    zipCode: employee.zipCode,
    state: employee.state,
    department: employee.department,
  }));

  return (
    <main>
      <Paper elevation={2} sx={{ height: '100%', width: '90%', m: 'auto' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel: { page: 0, pageSize: 10 } } }}
          pageSizeOptions={[10, 20]}
          sx={{ border: 0 }}
          showToolbar
          density='standard'
        />
      </Paper>
    </main>
  );
}
export default EmployeesTable