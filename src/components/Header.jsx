import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { green } from '@mui/material/colors';
import { memo } from 'react';

import { Link as RouterLink } from 'react-router-dom';

const Header = memo(() => {
  const green1 = green['A400'];
  const green2 = green[900];
  return (
    <header>
      <Container maxWidth="sm">
        <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h3" component="h1" sx={{ color: 'text.primary' }}>
            <Typography variant='h3' component="span" sx={{ color: green1 }}>H</Typography>
            <Typography variant='h3' component="span" sx={{ color: green2 }}>R</Typography>
            net
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link component={RouterLink} underline="hover" color="inherit" to="/">
              Create employee
            </Link>
            <Link
              component={RouterLink}
              underline="hover"
              color="inherit"
              to="/employeesList">
              List of employees
            </Link>
          </Breadcrumbs>
        </Box>
      </Container>
    </header>
  )
}, [])

export default Header