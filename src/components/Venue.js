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
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15136.275893608474!2d74.1809532!3d18.4805347!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e1015d5859b9%3A0x3045ab229e281d77!2sBharti%20Resorts%20Adventure%20%26%20Amusement%20Park!5e0!3m2!1sen!2sin!4v1731315970341!5m2!1sen!2sin" 
          width="100%"
          height="600" // Adjust height as needed
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
