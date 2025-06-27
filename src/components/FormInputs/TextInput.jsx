import TextField from '@mui/material/TextField'

const TextInput = ({ id, name, label, value, onChange, required, sx }) => (
  <TextField
    id={id}
    name={name}
    label={label}
    value={value}
    onChange={onChange}
    {...(sx ? { sx } : {})}
    {...(required ? { required: true } : {})}
  />
)

export default TextInput