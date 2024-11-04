import React from "react";
import { Container, Typography, Box } from "@mui/material";
import useResponsiveFontSize from "../useResponsiveFontSize";

const VenueComponent = () => {
  const { smallFontSize, largeFontSize } = useResponsiveFontSize();
  
  return (
    <Container maxWidth="lg" sx={{ py: 4, }}>
      <Box textAlign={"center"} mb={2}>
        <Typography fontSize={largeFontSize} color="#7065f0">
          <span>HOW TO REACH </span>THE VENUE
        </Typography>
      </Box>

      <Box
        sx={{
          borderRadius: "8px",
          overflow: "hidden",
          width: "100%",
          height: "auto",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.9551233156779!3d-37.81720997975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b4cd1d2b585f!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1635806515483!5m2!1sen!2sus"
          width="100%"
          height="500" // Adjust height as needed
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Venue Map"
        ></iframe>
      </Box>
    </Container>
  );
};

export default VenueComponent;
