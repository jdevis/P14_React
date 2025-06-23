// form components
import { TextField, InputLabel, Select, MenuItem, FormControl, Button, Box, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs'

import { useState } from 'react'
import { green } from '@mui/material/colors'
import { EMPLOYEES, STATES } from '../../data/mockData'

const Form = ({ setIsOpen }) => {

  // Define the states and departments from the mock data
  const states = STATES.map((state) => state.name)
    .filter((value, index, self) => self.indexOf(value) === index) // remove duplicates
    .sort() // sort alphabetically
  const departements = EMPLOYEES.map((employee) => employee.department)
    .filter((value, index, self) => self.indexOf(value) === index) // remove duplicates
    .sort() // sort alphabetically

  const green1 = green['A400'] // green color for the button
  const green2 = green[900] // darker green color for the button
  const today = new Date();
  const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
  console.log('date du jour :', today)
  console.log('date 18 ans :', eighteenYearsAgo)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDate, setBirthDate] = useState(dayjs(eighteenYearsAgo).format('YYYY-MM-DD')) // default to 18 years ago
  const [startDate, setStartDate] = useState(dayjs(today).format('YYYY-MM-DD'))
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [choosedState, setChoosedState] = useState('') // state for the select component
  const [choosedDepartement, setChoosedDepartement] = useState('') // state for the select component
  const handleSubmit = (e) => {
    e.preventDefault()
    const employees = JSON.parse(localStorage.getItem('createdEmployees')) || [];
    const newEmployee = {
      firstName: firstName,
      lastName: lastName,
      birthDate: birthDate,
      startDate: startDate,
      street: street,
      city: city,
      state: choosedState,
      zipCode: zipCode,
      department: choosedDepartement
    };
    employees.push(newEmployee);
    localStorage.setItem('createdEmployees', JSON.stringify(employees));
    setIsOpen(true) // open the modal
  }
  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mb: 2 }}>
        <TextField
          id="firstname"
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <TextField
          id="lastname"
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Birthdate"
          value={birthDate ? dayjs(birthDate) : null}
          onChange={(newValue) => setBirthDate(newValue ? newValue.toISOString().split('T')[0] : '')}
          maxDate={dayjs(eighteenYearsAgo)} // ensure the user is at least 18 years old
          slotProps={{ textField: { fullWidth: true, required: true, sx: { mb: 2, mt: 0 } } }}
        />
        <DatePicker
          label="Start date"
          value={startDate ? dayjs(startDate) : null}
          onChange={(newValue) => setStartDate(newValue ? newValue.toISOString().split('T')[0] : '')}
          slotProps={{ textField: { fullWidth: true, required: true, sx: { mb: 1, mt: 0 } } }}
        />
      </LocalizationProvider>
      <Box sx={{ mb: 2 }}>
        <Typography component='legend' sx={{ mt: 1, mb: 0 }}>Address</Typography>
        <TextField
          id="street"
          label="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          fullWidth
          sx={{ mt: 1 }}
          required
        />
        <TextField
          id="city"
          label="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          id="zipCode"
          label="Zip Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <FormControl fullWidth margin="normal" required>
          <InputLabel>State</InputLabel>
          <Select
            value={choosedState}
            onChange={(e) => setChoosedState(e.target.value)}
            label="State"
            id="states"
            required
          >
            <MenuItem value=""> <em>None</em></MenuItem>
            {states.map((state, index) => (
              <MenuItem key={index} value={state}>{state}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography component='legend' sx={{ mt: 1, mb: 0 }}>Role</Typography>
        <FormControl fullWidth sx={{ mt: 1 }} required>
          <InputLabel>Department</InputLabel>
          <Select
            value={choosedDepartement}
            onChange={(e) => setChoosedDepartement(e.target.value)}
            label="Department"
            id="departement"
            required
          >
            <MenuItem value=""><em>None</em></MenuItem>
            {departements.map((department, index) => (
              <MenuItem key={index} value={department}>{department}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Button type="submit" variant="contained" sx={{
        mt: 2, bgcolor: green1,
        '&:hover': {
          bgcolor: green2,
        },
      }} fullWidth>
        Save Employee
      </Button>
    </form>
  )
}
export default Form