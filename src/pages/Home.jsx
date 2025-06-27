import { useState } from 'react'
import { createPortal } from 'react-dom'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import Form from '../components/Form'
import { Modal } from 'hrnet-simple-modal'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false) // retrieving modal
  const [modalContent, setModalContent] = useState({ firstName: '', lastName: '' })
  const handleFormSubmit = (firstName, lastName) => {
    setModalContent({ firstName, lastName })
  }
  return (
    <>
      <main>
        <Container maxWidth="sm">
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
              Create Employee
            </Typography>
            <Box component='div' >
              <Form setIsOpen={setIsOpen} onFormSubmit={handleFormSubmit} />
            </Box>
          </Paper>
        </Container>
        {isOpen && createPortal(
          <Modal
            title='Employee Creation'
            content={<p>Employee {modalContent.firstName} {modalContent.lastName} created successfully!</p>}
            styles={{ fontFamily: 'Roboto' }}
            onClose={() => setIsOpen(false)}
          />,
          document.getElementById('modalPortal')
        )}
      </main>
      {/* Container for the modal */}
      <div id="modalPortal"></div>
    </>
  )
}

export default Home