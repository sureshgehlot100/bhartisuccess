import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Container, Button } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PersonIcon from '@mui/icons-material/Person';
import BuildIcon from '@mui/icons-material/Build';
import StoreIcon from '@mui/icons-material/Store';
import WorkIcon from '@mui/icons-material/Work';

const bonuses = [
  {
    id: 1,
    title: "BONUS 01",
    description: "Financial Planning & Money Management session (One Hr) by Mr. Ravindra Bharti Sir",
    price: "RS 10,000",
  },
  {
    id: 2,
    title: "BONUS 02",
    description: "Billionaire Blue Print :- Share Market Book by Mr.Ravindra Bharti Sir",
    price: "Rs. 1200/-",
  },
  {
    id: 3,
    title: "BONUS 03",
    description: "Selfie & Autograph with Mr. Ravindra Bharti Sir (Diamond & VIP Participants)",
    price: "PRICELESS",
  },
  {
    id: 4,
    title: "BONUS 04",
    description: "Access To Exclusive Community",
    price: "PRICELESS",
  },
];

const attendeeCategories = [
  { label: "Entrepreneurs", icon: <BusinessCenterIcon fontSize="large" /> },
  { label: "Self-Employed Individuals", icon: <PersonIcon fontSize="large" /> },
  { label: "Manufacturers", icon: <BuildIcon fontSize="large" /> },
  { label: "Business Owners", icon: <StoreIcon fontSize="large" /> },
  { label: "Professionals", icon: <WorkIcon fontSize="large" /> },
];

const BonusesComponent = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Bonuses for Participants Section */}
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', fontWeight: 'bold', color: '#7065f0', mb: 3 }}
      >
        BONUSES FOR PARTICIPANTS
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {bonuses.map((bonus) => (
          <Grid item xs={12} sm={6} md={4} key={bonus.id}>
            <Card
              sx={{
                backgroundColor: '#fff',
                color: '#000',
                borderRadius: 2,
                boxShadow: 3,
                width: '100%',
                minHeight: '320px',
                maxWidth: '280px',
                mx: 'auto',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: 2,
              }}
            >
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333333' }}>
                  {bonus.title}
                </Typography>
                <Typography variant="body1" sx={{ my: 2, fontWeight: 'bold', px: 1 }}>
                  {bonus.description}
                </Typography>
              </CardContent>

              {/* Price Container */}
              <Box
                sx={{
                  backgroundColor: '#333',
                  color: '#fff',
                  py: 0.5,
                  borderRadius: 1,
                  mt: 1,
                  mb: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '40px',
                }}
              >
                {bonus.price ? (
                  <Typography variant="h6" sx={{ textAlign: 'center' }}>
                    {bonus.price}
                  </Typography>
                ) : null}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>




      {/* Who Should Attend Section */}
      <Box sx={{ mt: 5, pt: 4, borderTop: '1px solid #ddd' }}>
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', fontWeight: 'bold', color: '#7065f0', mb: 3 }}
        >
          Who Should Attend This Grand Offline Event
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {attendeeCategories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: '#f9f9f9',
                  color: '#333',
                  borderRadius: 2,
                  boxShadow: 1,
                  textAlign: 'center',
                  p: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {category.icon}
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>
                  {category.label}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default BonusesComponent;
