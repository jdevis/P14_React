// form components
import { TextField, InputLabel, Select, MenuItem, FormControl, Button } from '@mui/material'
import { useState } from 'react'

const Form = ({ handleSubmit, choosedState, setChoosedState, choosedDepartement, setChoosedDepartement }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [startDate, setStartDate] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')

  return (
    <form onSubmit={(e) => handleSubmit(e, { firstName, lastName, birthDate, startDate, street, city, zipCode })}>
      <TextField
        id="firstname"
        label="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        id="lastname"
        label="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        id="birthdate"
        label="Birth Date"
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        id="startdate"
        label="Start Date"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        id="street"
        label="Street"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        id="city"
        label="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        id="zipCode"
        label="Zip Code"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
          <InputLabel>State</InputLabel>
          <Select
            value={choosedState}
            onChange={(e) => setChoosedState(e.target.value)}
            label="State" 
            id="states"
          >
            <MenuItem value=""> <em>None</em></MenuItem>
            {states.map((state, index) => ( 
              <MenuItem key={index} value={state.abbreviation}>{state.name}</MenuItem>
            ))}
          </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
          <InputLabel>Department</InputLabel>
          <Select
            value={choosedDepartement}
            onChange={(e) => setChoosedDepartement(e.target.value)}
            label="Department"
            id="departement"
          >
            <MenuItem value=""><em>None</em></MenuItem>
            {departments.map((department, index) => (
              <MenuItem key={index} value={department}>{department}</MenuItem>
            ))}
          </Select> 
      </FormControl>
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Save Employee
      </Button> 
    </form>
  )
} 
export default Form