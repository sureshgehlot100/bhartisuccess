import React from "react";
import { Container, Box, Typography, List, ListItem, Grid, Card, CardContent } from "@mui/material";
import useResponsiveFontSize from "../useResponsiveFontSize";
import useMediaQuery from "@mui/material/useMediaQuery";
import CancelIcon from "@mui/icons-material/Cancel";
import SchoolIcon from "@mui/icons-material/School";
import { useTheme } from "@mui/material/styles";

const ListInfo = () => {
  const listItems = [
    "Struggling to Grow Your Business Despite Hard Work?",
    "Unsure How to Use Technology and Marketing to Scale?",
    "Lack of Clarity on Financial Planning and Investments?",
    "Struggling to Balance Work and Family Life?",
    "Difficulty in Setting Long-term Business and Personal Goals?",
    "Need Guidance on Creating a Scalable, Sustainable Business?",
  ];

  const learningTopics = [
    "How to Grow Your Business?",
    "How to Build a 100 Crore Company?",
    "How to Launch A Company’s IPO?",
    "Marketing & Personal Branding Strategy?",
    "How to Raise Funding?",
  ];

  const theme = useTheme();
  const { smallFontSize, largeFontSize } = useResponsiveFontSize();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Struggles List Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          align="center"
          fontWeight={600}
          overflow="hidden"
          textTransform="uppercase"
          fontSize={isSmallScreen ? parseInt(smallFontSize) + 4 : largeFontSize}
        >
          <span>You Call  Yourself a Businessman But...</span>{" "}
          <Typography component="span" sx={{ color: "#7065f0" }}>

          </Typography>
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <List>
          {listItems.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                width: "100%",
                padding: 1.5,
                mb: 3,
                display: "flex",
                gap: "1.2em",
                alignItems: "center",
                borderRadius: "4px",
                boxShadow: "0px 0px 4px 0px rgba(0,0,0,0.2)",
                fontSize: 12,
                backgroundColor: "#f5f5f5",
              }}
            >
              <CancelIcon sx={{ color: "#e74c3c" }} />
              <Typography variant="body1" fontSize={16} fontWeight={500}>
                {item}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          p: `0.5em ${isSmallScreen ? "0.2em" : "2em"}`,
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "#7065f0",
          color: "#fff",
          borderRadius: "4px",
        }}
      >
        <Typography variant="body1" fontWeight={700} fontSize={isSmallScreen ? 16 : smallFontSize}>
          If this sounds like you, I have something special planned for you.
        </Typography>
      </Box>

      {/* What You'll Learn Section */}
      <Box sx={{ mt: 5 }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight={600}
          textTransform="uppercase"
          color="black"
          mb={4}
        >
          What You’ll Learn
        </Typography>
        <Grid container spacing={3}>
          {learningTopics.map((topic, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  p: 3,
                  textAlign: "center",
                  backgroundColor: "#f5f5f5",
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                  height: "100%",
                  transition: "transform 0.3s ease", 
                  '&:hover': {
                    transform: 'scale(1.05)', 
                  },
                }}
              >
                <CardContent>
                  <SchoolIcon sx={{ fontSize: 40, color: "#7065f0", mb: 1 }} />
                  <Typography variant="h6" fontWeight={600} color="textPrimary">
                    {topic}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ListInfo;
