import React, { useEffect, useState } from "react";
import { Container, Box, Grid, Typography, Button } from "@mui/material";
import useResponsiveFontSize from "../useResponsiveFontSize";

const StickyFooter = () => {
  const { smallFontSize, largeFontSize } = useResponsiveFontSize();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const footerTimer = () => {
    const now = new Date();
    const midNight = new Date(now);
    midNight.setHours(24, 0, 0, 0);

    const timeRemaining = midNight - now;

    const hoursRemaining = Math.floor(timeRemaining / 1000 / 60 / 60);
    const minutesRemaining = Math.ceil((timeRemaining / 1000 / 60) % 60);
    const secondsRemaining = Math.floor((timeRemaining / 1000) % 60);
    setHours(hoursRemaining);
    setMinutes(minutesRemaining);
    setSeconds(secondsRemaining);

    setTimeout(() => {
      footerTimer();
    }, 1000);
  };

  useEffect(() => {
    footerTimer();
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        bgcolor: 'transparent', // Set to transparent to use gradient
        background: 'linear-gradient(90deg, purple, #7065F0)',
        color: "#fff",
        zIndex: 1000,
        py: { xs: 1, md: 2 },
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={0}
        >
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              textAlign: "center",
              mb: { xs: 2, md: 0 },
            }}
          >
            <Typography fontSize={{ xs: smallFontSize }} fontWeight="bold">
              Booking Closes In
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: "center",
              mb: { xs: 2, md: 0 },
            }}
          >
            <Button
              sx={{
                bgcolor: "#fff",
                color: "#7065f0",
                fontWeight: "bold",
                p: { xs: 1, md: 2 },
                mx: { xs: "0.5em", md: "1em" },
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  bgcolor: "#e0e0e0",
                },
              }}
              id="buttontime"
            >
              <Typography fontWeight={700} fontSize="1rem">
                {(hours <= 9) ? `0${hours}` : hours}
              </Typography>
              <Typography m="0em 0.5em" fontWeight={800} fontSize={parseInt(smallFontSize) - 10}>
                Hr
              </Typography>
            </Button>

            <Button
              sx={{
                bgcolor: "#fff",
                color: "#7065f0",
                fontWeight: "bold",
                p: { xs: 1, md: 2 },
                mx: { xs: "0.5em", md: "1em" },
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  bgcolor: "#e0e0e0",
                },
              }}
              id="buttontime"
            >
              <Typography fontWeight={700} fontSize="1rem">
                {(minutes <= 9) ? `0${minutes}` : minutes}
              </Typography>
              <Typography m="0em 0.5em" fontWeight={800} fontSize={parseInt(smallFontSize) - 10}>
                Min
              </Typography>
            </Button>

            <Button
              sx={{
                bgcolor: "#fff",
                color: "#7065f0",
                fontWeight: "bold",
                p: { xs: 1, md: 2 },
                mx: { xs: "0.5em", md: "1em" },
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  bgcolor: "#e0e0e0",
                },
              }}
              id="buttontime"
            >
              <Typography fontWeight={700} fontSize="1rem" >
                {(seconds <= 9) ? `0${seconds}` : seconds}
              </Typography>
              <Typography m="0em 0.5em" fontWeight={800} fontSize={parseInt(smallFontSize) - 10}>
                Sec
              </Typography>
            </Button>
          </Grid>


          <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
            <Button
              sx={{
                bgcolor: "#333333",
                color: "#fff",
                p: { xs: 1.5, md: 2 },
                width: "100%",
                fontWeight: 'bold',
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                animation: "scaleAnimation 1s infinite alternate",
                "@keyframes scaleAnimation": {
                  "0%": {
                    transform: "scale(1)",
                  },
                  "100%": {
                    transform: "scale(0.95, 0.95)",
                  },
                },
              }}
              onClick={() => {
                const isSmallScreen = window.innerWidth < 768;
                const scrollToPosition = isSmallScreen ? 200 : 0;
                window.scrollTo(0, scrollToPosition);
              }}
            >
              Grab Your Tickets Now
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StickyFooter;
