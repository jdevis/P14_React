// form components
import TextInput from './FormInputs/TextInput'
import SelectInput from './FormInputs/SelectInput'
import DateInput from './FormInputs/DateInput'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// date picker components
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs'

import { useState } from 'react'
import { green } from '@mui/material/colors'
import { EMPLOYEES, STATES } from '../data/mockData'

const Form = ({ setIsOpen, onFormSubmit }) => {

  const departements = EMPLOYEES.map((employee) => employee.department)
    .filter((value, index, self) => self.indexOf(value) === index) // remove duplicates
    .sort() // sort alphabetically

  const green1 = green['A400'] // green color for the button
  const green2 = green[900] // darker green color for the button

  // Calculate the date 18 years ago from today
  const today = new Date();
  const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

  // Define the states for the form inputs
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDate, setBirthDate] = useState(dayjs(eighteenYearsAgo)) // default to 18 years ago
  const [startDate, setStartDate] = useState(dayjs(today))
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [choosedState, setChoosedState] = useState('')
  const [choosedDepartement, setChoosedDepartement] = useState('')

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
    onFormSubmit(firstName, lastName);
    setIsOpen(true) // open the modal
  }
  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mb: 2 }}>
        <TextInput
          id="firstname"
          name='firstname'
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <TextInput
          id="lastname"
          name='lastname'
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateInput
          id="birthdate"
          name='birthdate'
          label="Birthdate"
          value={birthDate ? dayjs(birthDate) : null}
          onChange={(newValue) => setBirthDate(newValue ? newValue.toISOString().split('T')[0] : '')}
          maxDate={dayjs(eighteenYearsAgo)} // ensure the user can't choose a date after 18 years ago
          required
        />
        <DateInput
          id="startdate"
          name='startdate'
          label="Start date"
          value={startDate ? dayjs(startDate) : null}
          onChange={(newValue) => setStartDate(newValue ? newValue.toISOString().split('T')[0] : '')}
          required
        />
      </LocalizationProvider>
      <Box sx={{ mb: 2 }}>
        <Typography component='legend' sx={{ mt: 1, mb: 0 }}>Address</Typography>
        <TextInput
          id="street"
          name='street'
          label="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          sx={{ width: '100%', mt: 1, mb: 1 }}
          required
        />
        <TextInput
          id="city"
          name='city'
          label="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          sx={{ width: '100%', mt: 1, mb: 1 }}
          required
        />
        <TextInput
          id="zipCode"
          name='zipCode'
          label="Zip Code"
          type="number"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          sx={{ width: '100%', mt: 1, mb: 1 }}
          required
        />
        <FormControl sx={{ width: '100%', mt: 1, mb: 1 }} required>
          <SelectInput
            value={choosedState}
            onChange={(e) => setChoosedState(e.target.value)}
            label="State"
            id="states"
            name='states'
            labelId='statesLabel'
            options={STATES.map(state => ({
              value: state.abbreviation,
              label: `${state.name}, ${state.abbreviation}`
            }))}
          />
        </FormControl>
        <Typography component='legend' sx={{ mt: 1, mb: 0 }}>Role</Typography>
        <FormControl sx={{ width: '100%', mt: 1, mb: 1 }} required>
          <SelectInput
            value={choosedDepartement}
            onChange={(e) => setChoosedDepartement(e.target.value)}
            label="Department"
            id="departement"
            labelId='departmentLabel'
            name='departement'
            options={departements.map(department => ({
              value: department,
              label: department
            }))}
          />
        </FormControl>
      </Box>
      <Button type="submit" variant="contained"
        sx={{
          mt: 2,
          bgcolor: green2,
          '&:hover': {
            bgcolor: green1,
          },
          width: '100%',
        }}>
        Save Employee
      </Button>
    </form>
  )
}
export default Form