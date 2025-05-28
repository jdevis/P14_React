
const Inputs = ({
  id,
  label,
  type,
  options
}) => {
  let content
  if (type === 'select') {
    content = <>
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id}>
        <option value=''>Select item</option>
        {console.log('options dans Inputs: ', options)}
        {options.map((option, index) => {
          return <option key={index} value={option}>{option}</option>
        })}
      </select>
    </>
  } else {
    content = <>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} />
    </>

  }
  return content
}

export default Inputs