import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useResponsiveFontSize from "../useResponsiveFontSize";
import useMediaQuery from "@mui/material/useMediaQuery";
import introduce from "../assets/introduce-min.jpg";
import EventIcon from "@mui/icons-material/Event";

export const GetTickets = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#deab35",
        border: "1px solid #fff",
        borderRadius: "22px",
        transition: "transform 0.25s",
        "&:hover": {
          transform: "scale(0.95, 0.95)",
        },
      }}
    >
      <Button
        variant="contained"
        fullWidth
        sx={{
          p: 1.5,
          fontWeight: 700,
          fontSize: "1rem",
          bgcolor: "buttoncolor",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <EventIcon sx={{ mr: 1 }} />
        GRAB YOUR TICKETS
      </Button>
    </Box>
  );
};

const Introduce = () => {
  const { smallFontSize, largeFontSize } = useResponsiveFontSize();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const introListText = [
    "Introducing Success Secrets of Business & Life by Mr. Ravindra Bharti!",
    "With over 15 years of experience, Mr. Ravindra Bharti has hosted 1000+ seminars (both offline and online) and mentored more than 75,000 students and professionals. He is now back with a powerful, transformational event. ",
    "In this LIVE session, you’ll join 150+ top-tier entrepreneurs and business leaders to uncover exclusive business strategies and gain life-changing insights that will shape your personal and professional success. ",
    "Don’t miss the chance to be mentored by a seasoned expert and TEDx speaker who will guide you toward achieving success in both business and life! ",
  ];
  return (
    <Container maxWidth={"lg"} sx={{ mb: 4, bgcolor: "minor" }}>
      <Box sx={{ p: 2 }}>
        <Box sx={{ width: "100%", mb: 4 }}>
          <Typography
            variant="h3"
            component="div"
            sx={{
              textAlign: "center",
              color: "black",
              textTransform: "uppercase",
              fontSize: { xs: "1.5rem", md: "2.5rem" },
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            <span style={{ color: "black" }}>Introducing</span> <br />
            “Success Secrets of Business & Life” <br />
            <Typography
              component="span"
              sx={{
                color: "#616161",
                fontSize: "1rem",
                display: "block",
                mt: 1,
                "&:after": {
                  content: '""',
                  display: "block",
                  width: "100%",
                  height: "4px",
                  backgroundColor: "#7065f0",
                  margin: "8px auto 0",
                },
              }}
            >
              OFFLINE Event by{" "}
              <span
                style={{
                  fontWeight: "bold",
                  color: "black",
                  display: "inline-block",
                }}
              >
                Mr. Ravindra Bharti
              </span>{" "}
              in Pune
            </Typography>
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ width: "100%", mb: 4 }}>
          <Grid item xs={12} md={4} sx={{ overflow: "hidden" }}>
            <Box
              component="img"
              sx={{
                width: "100%",
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "4px",
                height: "100%",
              }}
              alt="Sample"
              src={introduce}
            />
          </Grid>

          <Grid item xs={12} md={8} sx={{ m: 0, p: 0 }}>
            <List>
              {introListText.map((text, index) => (
                <ListItem
                  key={index}
                  sx={{
                    padding: isSmallScreen ? 0 : 1,
                    mb: 2,
                    textAlign: "justify",
                  }}
                >
                  <ListItemText>{text}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        <GetTickets />
      </Box>
    </Container>
  );
};

export default Introduce;
