import React from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  Box,
  useMediaQuery,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

const FormContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#f7f7f7',
  borderRadius: '10px',
  maxWidth: '500px',
  margin: 'auto',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    maxWidth: '100%',
  },
}));

const LogoBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '16px',
});

const languages = [
  // { value: 'English', label: 'English' },
  { value: 'Hindi', label: 'Hindi' },
  { value: 'Marathi', label: 'Marathi' },
  // { value: 'Gujrati', label: 'Gujrati' },
];

export default function RegistrationForm() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    city: '',
    language: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <FormContainer>
      {/* <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={3} textAlign="center">
          <LogoBox>
            <img src="logo.png" alt="Company Logo" style={{ height: isMobile ? 40 : 50 }} />
          </LogoBox>
        </Grid>
        <Grid item xs={12} sm={9} textAlign={isMobile ? 'center' : 'left'}>
          <Typography variant="h5" marginBottom={2}>
            Success Secret of Business & Life
          </Typography>
        </Grid>
      </Grid> */}

      <form onSubmit={handleSubmit} >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="First Name"
              name="firstName"
              fullWidth
              variant="outlined"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Last Name"
              name="lastName"
              fullWidth
              variant="outlined"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Phone"
              name="phone"
              fullWidth
              variant="outlined"
              value={formData.phone}
              onChange={handleChange}
              type="tel" 
              inputProps={{ pattern: '[0-9]{10}' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Email"
              name="email"
              type='email'
              fullWidth
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="City"
              name="city"
              fullWidth
              variant="outlined"
              value={formData.city}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              required
              label="Preferred Language"
              name="language"
              fullWidth
              variant="outlined"
              value={formData.language}
              onChange={handleChange}
            >
              {languages.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ marginTop: 2, backgroundColor: '#7065f0', color: '#fff',bgcolor: 'transparent', // Set to transparent to use gradient
            background: 'linear-gradient(90deg, purple, #4D39C1)',  }}
        >
          Submit
        </Button>
      </form>
    </FormContainer>
  );
}
