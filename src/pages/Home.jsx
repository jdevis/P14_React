import { useState } from 'react'
import { createPortal } from 'react-dom'
import Inputs from '../components/Inputs'
import Modal from '../components/Modal/Modal'
import '../components/Form/_form.scss'

const Home = () => {
  const states = ['state1', 'state2', 'state3', 'state4']
  const departements = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal']
  const firstname = 'toto'
  const lastname = 'tata'

  const [isOpen, setIsOpen] = useState(false) // retrieving modal
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsOpen(true)
  }

  return (
    <main>
      <div className='container'>
        <h2>Create Employee</h2>
        <form onSubmit={handleSubmit}>
          <Inputs id='firstName' type='text' label='First Name' />
          <Inputs id='lasttName' type='text' label='Last Name' />
          <Inputs id='birthDate' type='text' label='Date of Birth' />
          <Inputs id='startDate' type='text' label='Start Date' />
          <fieldset className='address'>
            <legend>Address</legend>
            <Inputs id='street' type='text' label='Street' />
            <Inputs id='city' type='text' label='City' />
            <Inputs id='states' type='select' label='States' options={states} />
            <Inputs id='zipCode' type='number' label='Zip Code' />
          </fieldset>
          <Inputs id='departement' type='select' label='Departement' options={departements} />
          <button type='submit'>Save</button>
        </form>
      </div>
      {isOpen && createPortal(
        <Modal
          title='Employee Creation'
          text={`Employee ${firstname} ${lastname} have been created !`}
          onClose={() => setIsOpen(false)} // use this props into onClick event of the close button on the modal
        />,
        document.getElementById('modalPortal') //ID of the container in index.html
      )}
    </main>
  )
}

export default Home