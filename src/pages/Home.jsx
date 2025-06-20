import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Container, Typography, Box, Paper } from '@mui/material'

// form components
import { TextField, InputLabel, Select, MenuItem, FormControl, Button } from '@mui/material'

import { Modal } from 'hrnet-simple-modal'

// mock data
import { EMPLOYEES, STATES } from '../data/mockData'

const Home = () => {
  const states = STATES.map((state) => state.name)
    .filter((value, index, self) => self.indexOf(value) === index) // remove duplicates
    .sort() // sort alphabetically
  const departements = EMPLOYEES.map((employee) => employee.department)
    .filter((value, index, self) => self.indexOf(value) === index) // remove duplicates
    .sort() // sort alphabetically

  const [choosedState, setChoosedState] = useState('') // state for the select component
  const [choosedDepartement, setChoosedDepartement] = useState('') // state for the select component
  const [isOpen, setIsOpen] = useState(false) // retrieving modal

  const handleChangeStates = (e) => {
    setChoosedState(e.target.value) // update the state when the select value changes
  }
  const handleChangeDepartement = (e) => {
    setChoosedDepartement(e.target.value) // update the state when the select value changes    
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const employees = JSON.parse(localStorage.getItem('createdEmployees')) || [];
    const newEmployee = {
        firstName: e.target.firstname.value,
        lastName: e.target.lastname.value,
        birthDate: e.target.birthdate.value,
        startDate: e.target.startdate.value,
        street: e.target.street.value,
        city: e.target.city.value,
        state: choosedState,
        zipCode: e.target.zipCode.value,
        department: choosedDepartement
    };
    employees.push(newEmployee);
    localStorage.setItem('createdEmployees', JSON.stringify(employees));
    setIsOpen(true) // open the modal
  }

  return (
    <main>
      <Container maxWidth="sm">
        <Paper elevation={2} sx={{ p: 2 }}>
          <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
            Create Employee
          </Typography>
          <Box component='form' onSubmit={handleSubmit}>
            <TextField
              id="firstname"
              label="First Name"
              defaultValue=""
              sx={{ mb: 2, width: '100%' }}
            />
            <TextField
              id="lastname"
              label="Last Name"
              defaultValue=""
              sx={{ mb: 2, width: '100%' }}
            />
            <TextField
              id="birthdate"
              label="Date of birth"
              defaultValue=""
              sx={{ mb: 2, width: '100%' }}
            />
            <TextField
              id="startdate"
              label="Start Date"
              defaultValue=""
              sx={{ mb: 2, width: '100%' }}
            />
            <Box sx={{ mb: 2 }}>
              <Typography component='h3' variant='h6' sx={{ mt: 2 }}>Address</Typography>
              <TextField
                id="street"
                label="Street"
                defaultValue=""
                sx={{ mb: 2, width: '100%' }}
              />
              <TextField
                id="city"
                label="City"
                defaultValue=""
                sx={{ mb: 2, width: '100%' }}
              />
              <TextField
                id="zipCode"
                label="ZipCode"
                type='number'
                sx={{ mb: 2, width: '100%' }}
              />
              <FormControl fullWidth>
                <InputLabel id="select-states">Choose a state</InputLabel>
                <Select
                  labelId="select-states"
                  id="states"
                  value={choosedState}
                  onChange={handleChangeStates}
                  sx={{ mb: 2 }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {states.map((state, index) => (
                    <MenuItem key={index} value={state}>{state}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="select-departement">Choose a departement</InputLabel>
                <Select
                  labelId="select-departement"
                  id="departement"
                  value={choosedDepartement}
                  onChange={handleChangeDepartement}
                  sx={{ mb: 2 }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {departements.map((departement, index) => (
                    <MenuItem key={index} value={departement}>{departement}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Button type='submit' variant='contained' color='primary' sx={{ width: '100%' }} onSubmit={handleSubmit}>
              Create Employee 
            </Button>
          </Box>
        </Paper>
      </Container>
      {isOpen && createPortal(
        <Modal
          title='Employee Creation'
          content={<p>Employee created successfully!</p>}
          onClose={() => setIsOpen(false)} // use this props into onClick event of the close button on the modal
        />,
        document.getElementById('modalPortal') //ID of the container in index.html
      )}
    </main>
  )
}

export default Home