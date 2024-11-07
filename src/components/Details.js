import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import backgroundImage from "../assets/SSP_1184-min.jpg"

const Details = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: 'no-repeat',
        minHeight: "fit-content",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8em 1em",
        border: '1px dashed patch'
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(14, 43, 97, 0.7)",
        }}
      ></Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h3"
            align="center"
            color='white'
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
          >
            EVENT <span>DETAILS</span>
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <Box
              sx={{
                border: "1px dashed #fff",
                padding: 1.3,
                textAlign: "center",
                bgcolor: 'buttoncolor',
                color: '#fff'
              }}
            >
              <Typography variant="body1">
                Date: Sunday, 23rd November 2024
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Box
              sx={{
                border: "1px dashed #fff",
                padding: 1.3,
                textAlign: "center",
                bgcolor: 'buttoncolor',
                color: '#fff'
              }}
            >
              <Typography variant="body1">
              Venue: The Central Park Hotel, Pune
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={12} lg={4}>
            <Box
              sx={{
                border: "1px dashed #fff",
                padding: 1.3,
                textAlign: "center",
                bgcolor: 'buttoncolor',
                color: '#fff'
              }}
            >
              <Typography variant="body1">Time: 9.00 AM to 7:30 PM </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Details;
