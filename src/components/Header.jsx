import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { green } from '@mui/material/colors';

const Header = () => {
  const green1 = green['A400'];
  const green2 = green[900];
  return (
    <header>
      <Container maxWidth="sm">
        <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h1" component="h1" sx={{ color: 'text.primary' }}>
            <Typography variant='h1' component="span" sx={{ color: green1 }}>H</Typography>
            <Typography variant='h1' component="span" sx={{ color: green2 }}>R</Typography>
            net
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Create employee
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/employeesList">
              List of employees
            </Link>
          </Breadcrumbs>
        </Box>
      </Container>
    </header>
  )
}

export default Header