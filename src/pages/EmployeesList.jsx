import { DataGrid } from '@mui/x-data-grid/DataGrid';
import Paper from '@mui/material/Paper';
import { EMPLOYEES } from '../data/mockData';

// Retrieve the created employees from localStorage and add them to the EMPLOYEES array
// This allows the list to be updated with new employees created via the form
const createdEmployee = JSON.parse(localStorage.getItem('createdEmployees') || '[]');
createdEmployee.map((employee) => {
  EMPLOYEES.push({
    firstName: employee.firstName,
    lastName: employee.lastName,
    birthDate: employee.birthDate,
    startDate: employee.startDate,
    street: employee.street,
    city: employee.city,
    zipCode: employee.zipCode,
    state: employee.state,
    department: employee.department,
  });
})

// Define the columns for the DataGrid
// Each column has a field that corresponds to the property in the rows data
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

// Map the EMPLOYEES data to the format required by DataGrid
const rows = EMPLOYEES.map((employee, index) => ({
  id: index + 1,
  firstName: employee.firstName,
  lastName: employee.lastName,
  birthDate: new Date(employee.birthDate),
  startDate: new Date(employee.startDate),
  street: employee.street,
  city: employee.city,
  zipCode: employee.zipCode,
  state: employee.state,
  department: employee.department,
}));

const paginationModel = { page: 0, pageSize: 10 };

const EmployeesList = () => {
  return (
    <main>
      <Paper elevation={2} sx={{ height: '100%', width: '90%', m: 'auto' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[10, 20]}
          sx={{ border: 0 }}
          showToolbar
          density='standard'
          autosizeOptions={{
            columns: ['firstName', 'lastName', 'birthDate', 'startDate', 'street', 'city', 'zipCode', 'state', 'department'],
            includeOutliers: true,
            includeHeaders: true,
          }}
        />
      </Paper>
    </main>
  );
}
export default EmployeesList