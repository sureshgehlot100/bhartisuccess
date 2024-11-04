import React from "react";
import useResponsiveFontSize from "../useResponsiveFontSize";
import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { Cancel, Check, CheckCircle } from "@mui/icons-material";

const BeforeAndAfter = () => {
  const listItems = [
    "List item 1",
    "List item 2",
    "List item 3",
    "List item 4",
    "List item 5",
    "List item 6",
  ];

  const beforeTheEventListItems = [
    "Unable to Manage & Build high performing teams in the business.",
    "Not able to scale the business with existing team.",
    "Always stuck in business operations & day to day activities.",
    "No system or business automation.",
    "No plan to grow leads, sales and marketing activities.",
    "No knowledge of financial statements & cashflow .",
  ];

  const afterTheEventListItems = [
    "Having proper systems to hire, fire, manage & get the maximum potential out from the teams.",
    "Having Proper plan to scale the business & delegating most of the business processes.",
    "Free from day to day activities with auto pilot systems and people working for you.",
    "Proper growth plan for generating leads, closing sales and regular marketing and brand building activities.",
    "Become an expert at business fundamentals, cashflow and understanding healthy financial statements.",
  ];

  const { smallFontSize, largeFontSize } = useResponsiveFontSize();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h3"
        component="div"
        sx={{ textAlign: "center", mb: 4 }}
        fontSize={largeFontSize}
        color="#7065f0"
      >
        See The Difference
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              border: "2px solid red",
              p: 2,
              bgcolor: "minor",
              height: "100%",
            }}
          >
            {/* <Box
              component="img"
              src="https://via.placeholder.com/300"
              alt="Placeholder"
              sx={{ width: "100%", mb: 2}}
            /> */}

            <Typography
              variant="h5"
              component="div"
              fontSize={parseInt(largeFontSize) - 6}
              sx={{ mb: 2 }}
              fontWeight={700}
              color="red"
              textAlign={"center"}
            >
              Before the Event
            </Typography>

            <List>
              {beforeTheEventListItems.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    fontWeight: "500",
                    fontSize: parseInt(smallFontSize) - 2,
                    lineHeight: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1em",
                    marginBottom: "1em",
                  }}
                >
                  <Cancel
                    sx={{ color: "#fff", bgcolor: "red", borderRadius: "50%" }}
                  />
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ border: "2px solid green", p: 2, bgcolor: "minor" }}>
            {/* <Box
              component="img"
              src="https://via.placeholder.com/300"
              alt="Placeholder"
              sx={{ width: "100%", mb: 2 }}
            /> */}

            <Typography
              variant="h5"
              component="div"
              fontSize={parseInt(largeFontSize) - 6}
              sx={{ mb: 2 }}
              fontWeight={700}
              color={"green"}
              textAlign={"center"}
            >
              After the Event
            </Typography>

            <List>
              {afterTheEventListItems.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    fontWeight: "500",
                    fontSize: parseInt(smallFontSize) - 2,
                    lineHeight: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1em",
                    marginBottom: "1rem",
                    paddingY: "0.5rem", 
                  }}
                >
                  <CheckCircle
                    sx={{
                      color: "#fff",
                      bgcolor: "green",
                      borderRadius: "50%",
                      fontSize: `${parseInt(smallFontSize) - 2}px`, 
                      verticalAlign: "middle",
                    }}
                  />
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BeforeAndAfter;
