import React from "react";
import useResponsiveFontSize from "../useResponsiveFontSize";
import {
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Card,
  Grid,
  CardContent,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import bhartiSirImage from "../assets/IMG_3205-min.jpg";

const Mentor = () => {
  const { smallFontSize, largeFontSize } = useResponsiveFontSize();
  const socialMediaDetails = [
    {
      icon: <FacebookIcon sx={{ fontSize: "5em", color: "#7065f0" }} />,
      subs: "107K",
      description: "Bharti Share Market - Marathi",
    },
    {
      icon: <YouTubeIcon sx={{ fontSize: "5em", color: "#7065f0" }} />,
      subs: "15.5M",
      description: "Ravindra Bharti Social, Business & Life",
    },
    {
      icon: <TelegramIcon sx={{ fontSize: "5em", color: "#7065f0" }} />,
      subs: "50k+ ",
      description: "Bharti Share Market",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h3"
        component="h1"
        color="black"
        sx={{ textAlign: "center", mb: 4 }}
        fontSize={largeFontSize}
        fontWeight={"bold"}
      >
        Meet The{" "}
        <Typography
          variant="span"
          fontSize={largeFontSize}
          color="#7065f0"
          fontWeight={"bold"}
        >
          Mentor
        </Typography>
      </Typography>
      <Box
        component="img"
        src={bhartiSirImage}
        alt="Sample Image"
        sx={{
          width: "100%",
          height: "auto",
          display: "block",
          mb: 3,
          borderRadius: "8px",
          transition: "transform 0.3s ease",
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      />
      <Typography
        variant="h4"
        component="h2"
        color="patch"
        sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}
      >
        Mr. Ravindra Bharti
      </Typography>
      <Typography
        color="patch"
        sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}
      >
        CMD, Bharti Business Group | TEDx Speaker{" "}
      </Typography>

      {/* social cards */}

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {socialMediaDetails.map(({ icon, subs, description }, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  background: "linear-gradient(135deg, #333333, #1a1a1a)",
                  color: "white",
                  borderRadius: 3,
                  boxShadow: 3,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                  <Box display="flex" justifyContent="center" mb={2}>
                    {icon}
                  </Box>
                  <Typography
                    variant="h4"
                    component="div"
                    align="center"
                    sx={{
                      mb: 1,
                      fontWeight: "bold",
                      letterSpacing: 1,
                    }}
                  >
                    {subs}
                  </Typography>
                  <Box
                    sx={{
                      height: 1,
                      backgroundColor: "#7065f0",
                      width: "40%",
                      margin: "0.5rem auto",
                    }}
                  />
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{
                      color: "#cfcfcf",
                      fontSize: "0.95rem",
                      fontWeight: "bold",
                      mt: 2,
                    }}
                  >
                    {description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default Mentor;
