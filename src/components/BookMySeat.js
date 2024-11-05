import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import useResponsiveFontSize from "../useResponsiveFontSize";

const BookSeat = () => {
  const { smallFontSize, largeFontSize } = useResponsiveFontSize();
  return (
    <Container maxWidth="lg" sx={{ py: 4, bgcolor: 'minor', mt: 6}}>
      <Box sx={{ mb: 2 }}>
        <Typography
          variant="body1"
          align="center"
          color="#7065f0"
          fontSize={smallFontSize}
        >
          I am ready to transform my business and life by taking the life changing opportunity to attend the
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          align="center"
          fontSize={largeFontSize}
          color='#7065f0'
        >
          "Success Secrets of Business & Life" <br/> <span>  in person in Pune</span>
        </Typography>
      </Box>

      <Button
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        sx={{
          py: 2,
          fontSize: "1.2rem",
          backgroundColor: 'rgb(51,51,51)',
          transition: 'transform 0.25s',
          '&:hover':{
            transform: 'scale(0.95)'
          }
        }}
        onClick={() => {
          const isSmallScreen = window.innerWidth < 768; 
          const scrollToPosition = isSmallScreen ? 600 : 0; 
          window.scrollTo(0, scrollToPosition);
      }}
      >
        Book My Seat Now
      </Button>
    </Container>
  );
};

export default BookSeat;
