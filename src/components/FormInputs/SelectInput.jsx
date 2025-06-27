import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const SelectInput = ({ id, name, label, value, onChange, options, labelId, required }) => (
  <FormControl sx={{ width: '100%', mt: 1, mb: 1 }} {...(required ? { required: true } : {})}>
    <InputLabel id={labelId}>{label}</InputLabel>
    <Select
      labelId={labelId}
      id={id}
      name={name}
      value={value}
      label={label}
      onChange={onChange}
    >
      {options.map((option, idx) => (
        <MenuItem key={idx} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
)

export default SelectInput