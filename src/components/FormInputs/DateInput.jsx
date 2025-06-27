import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'

const DateInput = ({ id, name, label, value, onChange, maxDate, required }) => (
  <DatePicker
    id={id}
    name={name}
    label={label}
    value={value ? dayjs(value) : null}
    onChange={onChange}
    maxDate={maxDate}
    slotProps={{ textField: { fullWidth: true, required: true, sx: { mb: 2, mt: 0 } } }}
    {...(required ? { required: true } : {})}
  />
)

export default DateInput