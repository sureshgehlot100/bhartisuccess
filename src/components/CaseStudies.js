import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import useResponsiveFontSize from "../useResponsiveFontSize";
import "react-multi-carousel/lib/styles.css";

const CaseStudies = () => {
  const { smallFontSize, largeFontSize } = useResponsiveFontSize();

  const videoSources = [
    "https://www.youtube.com/watch?v=Ka44cSIlBsU",
    "https://www.youtube.com/watch?v=wPRbwS79At8",
    "https://www.youtube.com/watch?v=e6gVZdKImUE",
    "https://www.youtube.com/watch?v=92B6J-CY07Q",
  ];

  const caseStudiesText = [
    "I feel blessed to have a business coach like Mr. Ravindra Bharti. He taught me to write affirmations and it actually helped me to grow my business. My mindset has completely changed and because of him, I am constantly working towards my goals and objectives. Thank you Mr. Ravindra Bharti and Team.",
    "I am really grateful that I came across Mr. Ravindra Bharti and his course has absolutely changed my life. Earlier I didn’t know that business not only requires hard work but also strategies and plans for the long-run. Mr. Ravindra Bharti taught me how to build strategies and plan for the future as well. I am really thankful to Mr. Ravindra Bharti and his team who have been constantly supporting me in the journey of business.",
    `My sincere gratitude to Mr. Rahul Malodiya whom I met first at BNI Conference in Jaipur & after that it has been a wonderful ride for myself & Tesca Technologies Pvt. Ltd. Right from setting up my Affirmations & Gratitude, Mission, Vision, SOP's, JD, KRA, KPI, Checklists my whole processes are system driven and with this I have become more organized, humble and empathetic with my employees & customers. From the bottom of my heart I am really obliged to Rahul ji for his extraordinary efforts for my business.`,
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1200, min: 960 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 960, min: 600 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          component="div"
          align="center"
          color="#7065f0"
          fontWeight={'bold'}
        >
          CASE STUDIES AND TESTIMONIALS
        </Typography>
      </Box>

      <Grid container spacing={4} mb={6}>
        {videoSources.map((videoSrc, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                position: "relative",
                paddingTop: "56.25%",
                overflow: "hidden",
              }}
            >
              <Box
                component="iframe"
                src={videoSrc.replace("watch?v=", "embed/")}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Carousel for text testimonials */}
      {/* <Carousel
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
        id="carousel-case-studies"
      >
        {caseStudiesText.map((text, index) => (
          <React.Fragment key={index}>
            <Box
              key={index}
              sx={{
                maxHeight: { xs: "250px", md: "200px" },
                overflow: "hidden",
                padding: "10px",
                maxWidth: "900px",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <Typography
                fontSize={parseInt(smallFontSize) - 2}
                textAlign={"center"}
                fontStyle={"italic"}
              >
                {text}
              </Typography>
            </Box>
          </React.Fragment>
        ))}
      </Carousel> */}
    </Container>
  );
};

export default CaseStudies;
