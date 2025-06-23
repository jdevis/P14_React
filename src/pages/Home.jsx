import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Container, Typography, Box, Paper } from '@mui/material'

import Form from '../components/Form/Form'
import { Modal } from 'hrnet-simple-modal'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false) // retrieving modal

  return (
    <>
      <main>
        <Container maxWidth="sm">
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
              Create Employee
            </Typography>
            <Box component='div' >
              <Form setIsOpen={setIsOpen} />
            </Box>
          </Paper>
        </Container>
        {isOpen && createPortal(
          <Modal
            title='Employee Creation'
            content={<p>Employee created successfully!</p>}
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