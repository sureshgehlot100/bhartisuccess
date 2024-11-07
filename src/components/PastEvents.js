import React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useResponsiveFontSize from "../useResponsiveFontSize";
import img1 from "../assets/SSP_0779-min.jpg"
import img2 from "../assets/SSP_0918-min.jpg"
import img3 from "../assets/SSP_1067-min.jpg"
import img4 from "../assets/SSP_1184-min.jpg"
import img5 from "../assets/SSP_1245-min.jpg"
import img6 from "../assets/SSP_0775-min.jpg"
import imgCarosuel from "../assets/DSC_4684-min.jpg"
import imgCarosuelSecond from "../assets/IMG_5954-min.jpg"
import imgCarosuelThrid from "../assets/DSC_0293-min.jpg"
import imgCarosuelFourth from "../assets/DSC_1150 (1)-min.jpg"
import imgCarosuelFifth from "../assets/IMG_9214-min.jpg"



const PastEvents = () => {
  const { smallFontSize, largeFontSize } = useResponsiveFontSize();
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    // img6,
  ];

  const imagesCarosuel = [
    imgCarosuel,
    imgCarosuelSecond,
    imgCarosuelThrid,
    imgCarosuelFourth,
    imgCarosuelFifth,
    img6,
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1200, min: 960 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 960, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ width: "100%", mb: 4 }}>
        <Typography
          variant="h3"
          component="div"
          sx={{
            textAlign: "center",
            color: 'black',
            fontWeight: '600',
          }}
          fontSize={largeFontSize}
        >
          <span>SOME</span>{" "}
          <span style={{ color: '#7065f0', fontWeight: 'bold' }}>GLIMPSES FROM</span>{" "}
          <span style={{ textTransform: "uppercase" }}>THE MASSIVELY SUCCESSFUL</span>{" "}
          <span style={{ color: '#7065f0', fontWeight: 'bold' }}>PAST EVENTS</span>
        </Typography>
      </Box>


      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Carousel
            responsive={responsive}
            swipeable
            draggable
            showDots
            infinite
            autoPlay
            autoPlaySpeed={3000}
            keyBoardControl
            customTransition="all 0.5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item-padding-40-px"
          >
            {images.map((src, index) => (
              <Box
                key={index}
                sx={{
                  height: { xs: "250px", md: "200px" },
                  overflow: "hidden",
                  padding: "10px",
                }}
              >
                <img
                  src={src}
                  alt={`gallery-small-${index}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            ))}
          </Carousel>
        </Grid>

        <Grid item xs={12}>
          <Carousel
            responsive={responsive}
            swipeable
            draggable
            showDots
            infinite
            autoPlay
            autoPlaySpeed={3000}
            keyBoardControl
            customTransition="all 0.5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item-padding-40-px"
          >
            {imagesCarosuel.map((src, index) => (
              <Box
                key={index}
                sx={{
                  height: { xs: "350px", md: "450px" },
                  overflow: "hidden",
                  padding: "10px",
                }}
              >
                <img
                  src={src}
                  alt={`gallery-large-${index}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PastEvents;
