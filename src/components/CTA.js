  // changed cta code 

  import React from "react";
  import { Container, Typography, Button, Box, Grid } from "@mui/material";
  import PlayArrowIcon from "@mui/icons-material/PlayArrow";
  import AccessTimeIcon from "@mui/icons-material/AccessTime";
  import EventIcon from "@mui/icons-material/Event";
  import LocationOnIcon from "@mui/icons-material/LocationOn";
  import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
  import { useTheme } from "@mui/material/styles";
  import useMediaQuery from "@mui/material/useMediaQuery";
  import { GetTickets } from "./Introduce";
  import RegistrationForm from "./RegistrationForm";

  const CTA = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
      <Container maxWidth="lg" sx={{ pt: 6 }}>
        {/* Main Section */}
        <Box
          sx={{
            mb: 6,
            p: 1,
            borderRadius: "10px",
            backgroundColor: "#f7f7f9",
          }}
        >
          <Grid container spacing={4} alignItems="center">
            {/* Text Section */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  color: "black",
                  mb: 2,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                Maharashtra's #1 Business Coach, TEDx Speaker, Investor
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  color: "#333",
                  mb: 3,
                  lineHeight: 1.3,
                }}
              >
                Discover the Secrets to Scaling Your Business to 100X
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: "1.1rem",
                  color: "#666",
                  fontWeight: 500,
                  mb: 3,
                  lineHeight: 1.6,
                }}
              >
                Unlock life-changing insights on business growth, personal branding, IPOs, funding, and achieving a 100-crore company valuation. Join us to learn directly from top CEOs.
              </Typography>
            </Grid>

            {/* Form Section */}
            <Grid item xs={12} md={6} sx={{ pl: isSmallScreen ? 0 : 4 }}>
              <Box
                sx={{
                  // backgroundColor: "#fff",
                  p: 3,
                  borderRadius: "10px",
                  // boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <RegistrationForm />
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Video and Event Details Section */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
          <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%", 
          cursor: "pointer",
        }}
        onClick={() =>
          window.open("https://www.youtube.com/watch?v=Trm59KOAq3E", "_blank")
        }
      >
        <img
          src="https://img.youtube.com/vi/Trm59KOAq3E/0.jpg
  "       alt="Video Thumbnail"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PlayArrowIcon sx={{ color: "#fff", fontSize: 40 }} />
        </Box>
      </Box>
          </Grid>

          <Grid item xs={12} md={6} mt={3} mb={2}>
            <Grid container spacing={3}>
              {/* Date and Time */}
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    bgcolor: "#fff",
                    padding: 1,
                    borderRadius: 2,
                    color: "black",
                    border: "1px solid #ccc",
                  }}
                >
                  <EventIcon
                    sx={{
                      bgcolor: "#1976d2",
                      color: "#FFF",
                      fontSize: 40,
                      padding: 0.5,
                      borderRadius: 1,
                      mr: 2,
                    }}
                  />
                  <Box>
                    <Typography variant="body1" fontWeight={600}>
                      Date
                    </Typography>
                    <Typography variant="body2">23 November 2024</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    bgcolor: "#fff",
                    padding: 1,
                    marginRight: 5,
                    borderRadius: 2,
                    color: "black",
                    border: "1px solid #ccc",
                  }}
                >
                  <AccessTimeIcon
                    sx={{
                      bgcolor: "#1976d2",
                      color: "#FFF",
                      fontSize: 40,
                      padding: 0.5,
                      borderRadius: 1,
                      mr: 2,
                    }}
                  />
                  <Box>
                    <Typography variant="body1" fontWeight={600}>
                      Time
                    </Typography>
                    <Typography variant="body2">9 AM to 6:30 PM</Typography>
                  </Box>
                </Box>
              </Grid>

              {/* Venue */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    bgcolor: "#fff",
                    padding: 1,

                    marginRight: 5,
                    borderRadius: 2,
                    color: "black",
                    border: "1px solid #ccc",
                  }}
                >
                  <LocationOnIcon
                    sx={{
                      bgcolor: "#1976d2",
                      color: "#FFF",
                      fontSize: 40,
                      padding: 0.5,
                      borderRadius: 1,
                      mr: 2,
                    }}
                  />
                  <Box>
                    <Typography variant="body1" fontWeight={600}>
                      Venue
                    </Typography>
                    <Typography variant="body2">
                    The Central Park Hotel, Near Council Hall, Pune
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* Bonus */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    bgcolor: "#fff",
                    padding: 1,

                    marginRight: 5,
                    borderRadius: 2,
                    color: "black",
                    border: "1px solid #ccc",
                  }}
                >
                  <EmojiEventsIcon
                    sx={{
                      bgcolor: "#1976d2",
                      color: "#FFF",
                      fontSize: 40,
                      padding: 0.5,
                      borderRadius: 1,
                      mr: 2,
                    }}
                  />
                  <Box>
                    <Typography variant="body1" fontWeight={600}>
                      Bonus
                    </Typography>
                    <Typography variant="body2">
                      Enroll Now & Get Bonuses worth ₹15,000/-
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* CTA Button */}
        {/* <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            id="cta_btn"
            fullWidth
            sx={{
              backgroundColor: "#7065f0",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1.2rem",
              borderRadius: "5px",
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
              py: 1.5,
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <LocalActivityIcon sx={{ mr: 1, fontSize: "1.5rem" }} />
            Grab Your Tickets Now
          </Button>
        </Box> */}
        <GetTickets/>
      </Container>
    );
  };

  export default CTA;
