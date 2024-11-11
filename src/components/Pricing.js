import React from "react";
import useResponsiveFontSize from "../useResponsiveFontSize";
import {
  Container,
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  Button,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const PricingSection = () => {
  const { smallFontSize, largeFontSize } = useResponsiveFontSize();
  const planDetails = [
    {
      planTitle: "Gold",
      originalPrice: 6990,
      discountPrice: 3990,
      listItems: [
        { text: "Registration Kit", available: true },
        {
          text: "Access to Success Secret of Business & Life Pune Event (24th Nov)",
          available: true,
        },
        { text: "Access To Exclusive Community", available: true },
        { text: "Seating behind VIP Chair Seating", available: true },
        { text: "Morning High Tea", available: true },
        { text: "Lunch", available: true },
        { text: "Evening High Tea", available: true },
        {
          text: "Selfie & Autograph with Mr. Ravindra Bharti ",
          available: false,
        },
        {
          text: `Special Session With Mr. Ravindra Bharti - Financial Planning & Money Management session (Worth Rs.50,000/-) `,
          available: false,
        },
        {
          text: `Billionaire Blue Print - Share Market Book by Mr.Ravindra Bharti Sir (Rs. Worth 999/-) `,
          available: false,
        },
      ],
    },

    {
      planTitle: "Diamond",
      originalPrice: 9990,
      discountPrice: 6990,
      listItems: [
        { text: "Registration Kit", available: true },
        {
          text: "Access to Success Secret of Business & Life Pune Event (24th Nov)",
          available: true,
        },
        { text: "Access To Exclusive Community ", available: true },
        { text: "Seating behind VIP Round Table", available: true },
        { text: "Morning High Tea", available: true },
        { text: "Lunch", available: true },
        { text: "Evening High Tea", available: true },
        {
          text: "Selfie & Autograph with Mr. Ravindra Bharti ",
          available: true,
        },
        {
          text: `Special Session With Mr. Ravindra Bharti - Financial Planning & Money Management session (Worth Rs.50,000/-) `,
          available: true,
        },
        {
          text: `Billionaire Blue Print - Share Market Book by Mr.Ravindra Bharti Sir (Rs. Worth 999/-) `,
          available: true,
        },
      ],
    },

    {
      planTitle: "VIP",
      originalPrice: 14990,
      discountPrice: 9990,
      listItems: [
        { text: "Registration Kit", available: true },
        {
          text: "Access to Success Secret of Business & Life Pune Event (24th Nov)",
          available: true,
        },
        { text: "Access To Exclusive Community ", available: true },
        { text: "Seating on First Row Premium-Sofa", available: true },
        { text: "Morning High Tea", available: true },
        { text: "Lunch", available: true },
        { text: "Evening High Tea", available: true },
        {
          text: "Selfie & Autograph with Mr. Ravindra Bharti ",
          available: true,
        },
        {
          text: `Special Session With Mr. Ravindra Bharti - Financial Planning & Money Management session (Worth Rs.50,000/-) `,
          available: true,
        },
        {
          text: `Billionaire Blue Print - Share Market Book by Mr.Ravindra Bharti Sir (Rs. Worth 999/-) `,
          available: true,
        },
      ],
    },
  ];
  return (
    <Container maxWidth="lg" sx={{ py: 4, bgcolor: "#fff" }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: smallFontSize, md: largeFontSize },
            color: "patch",
          }}
        >
          Book Your Seat
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {planDetails.map((detail, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "100%", boxShadow: 2, borderRadius: 3, transition: "transform 0.3s ease", 
                  '&:hover': {
                    transform: 'scale(1.05)', 
                  },}}>
              <CardContent id="pricingCard">
                <Typography
                  variant="h4"
                  fontWeight={600}
                  sx={{
                    fontSize: "1.5rem",
                    color: "#fff",
                    textAlign: "center",
                    backgroundColor:
                      detail.planTitle === "Gold"
                        ? "#ffc800"
                        : detail.planTitle === "VIP"
                          ? "#02c5b4"
                          : "#0762e4",
                    padding: "0.5rem 0",
                    borderRadius: "8px",
                  }}
                >
                  {detail.planTitle} <br />
                  <span style={{ fontSize: smallFontSize, color: "#e0e0e0" }}>
                    {detail.planDescription}
                  </span>
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: 2,
                    mt: 2,
                  }}
                >
                  <Typography
                    variant="body1"
                    fontWeight={400}
                    sx={{
                      textDecoration: "line-through",
                      mr: 1,
                      fontSize: "1.25rem",
                      color: "gray",
                      mt: 2,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    ₹{detail.originalPrice}
                  </Typography>
                  <Typography
                    variant="h3"
                    color="black"
                    fontWeight={500}
                    sx={{
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    ₹{detail.discountPrice}
                  </Typography>
                </Box>

                <List>
                  {detail.listItems.map((listData, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        fontSize: parseInt(smallFontSize) - 5,
                        fontWeight: 500,
                        margin: "1rem 0rem",
                        display: "flex",
                        gap: 1,
                        alignItems: "center",
                      }}
                    >
                      {listData.available ? (
                        <CheckCircleOutlineIcon sx={{ color: "green" }} />
                      ) : (
                        <HighlightOffIcon sx={{ color: "red" }} />
                      )}
                      <span>{listData.text}</span>
                    </ListItem>
                  ))}
                </List>

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      width: "100%",
                      backgroundColor: "white",
                      color: "#7065f0",
                      fontWeight: "bold",
                      '&:hover': {
                        // backgroundColor: "darkgray", 
                      },
                    }}
                    onClick={() => {
                      const isSmallScreen = window.innerWidth < 768;
                      const scrollToPosition = isSmallScreen ? 600 : 0;
                      window.scrollTo(0, scrollToPosition);
                    }}
                  >
                    Buy Now
                  </Button>

                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      width: "100%",
                      backgroundColor: "#7065f0",
                      color: "white",
                      '&:hover': {
                        backgroundColor: "darkpurple", // Optional hover effect
                      },
                    }}
                    onClick={() => {
                      const isSmallScreen = window.innerWidth < 768;
                      const scrollToPosition = isSmallScreen ? 600 : 0;
                      window.scrollTo(0, scrollToPosition);
                    }}
                  >
                    Buy 2 seats @
                    {detail.planTitle === "Gold"
                      ? (detail.discountPrice * 2) - 1000
                      : detail.planTitle === "VIP"
                        ? (detail.discountPrice * 2) - 1500
                        : (detail.discountPrice * 2) - 2000
                    }
                  </Button>
                </Box>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PricingSection;
