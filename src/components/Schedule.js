import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Box,
  Typography,
  List,
  ListItem,
  Grid,
  Container,
  Card,
  Chip,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import useResponsiveFontSize from "../useResponsiveFontSize";
import { GetTickets } from "./Introduce";
import backgroundImage from "../assets/SSP_1184-min.jpg";

const CustomConnector = styled(StepConnector)(({ theme }) => ({
  "& .MuiStepConnector-line": {
    borderColor: "transparent",
    borderLeftWidth: 3,
    marginLeft: "0",
    height: 80,
  },
}));

const scheduleData = [
  {
    title: "Welcome & Introduction",
    time: "09:00 AM to 12 PM",
    scheduleListData: [
      "Use of Marketing & Branding to Grow Your Business",
      "Financial Planning & Money Meditation",
      "Understanding the Four Types of Income",
    ],
  },
  {
    title: "Family Importance, Meditation & Business Success, Emotional Sentiments in Business, Steps to Launch an IPO & Scaling to ₹100 Crore",
    time: "12:00 PM – 1:30 PM",
    scheduleListData: [],
  },
  {
    title: "Lunch Break",
    time: "1:30 PM – 2:30 PM",
    scheduleListData: [],
  },
  {
    title: "Risk - Success & Handling Power Challenges",
    time: "2:30 PM – 5.30 PM",
    scheduleListData: [
      " 20 Years in 2 Years Principle & Family Involvement & Importance",
      "Overcoming Ego, Barriers in Business & Life, Goal Setting & Balancing Life Priorities, Active Listening, Acceptance, & Women Empowerment",
    ],
  },
  {
    title: "Hi Tea",
    time: "5:30 PM – 6:00 PM",
    scheduleListData: [],
  },
  {
    title: "Building Networks & Commitment to Success",
    time: "6:15 PM – 7:00 PM",
    scheduleListData: [],
  },
  {
    title: "Closing Remarks",
    time: "7:30 PM",
    scheduleListData: [],
  },
];

const Schedule = () => {
  const { smallFontSize, largeFontSize } = useResponsiveFontSize();
  return (
    <Container maxWidth="lg" sx={{
      position: "relative",
      padding: "5em 1em 4em 1em",
      border: '1px dashed patch'
    }}>
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />

      <Typography
        fontSize={parseInt(largeFontSize)}
        textAlign={"center"}
        color="#f8f9fa"
        fontWeight={700}
        mb={6}
        zIndex={2}
        position={"relative"}
      >
        Here is the schedule for the session
      </Typography>
      <Stepper
        orientation="vertical"
        connector={<CustomConnector />}
        activeStep={-1}
        sx={{ mb: 10 }}
        nonLinear
      >
        {scheduleData.map(({ title, time, scheduleListData }, index) => (
          <Step key={title}>
            <Grid
              container
              justifyContent={index % 2 === 0 ? "flex-start" : "flex-end"}
            >
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    p: 3,
                    backgroundColor: "black",
                    borderRadius: "8px",
                    backdropFilter: "blur(0px)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    boxShadow: 3,
                    zIndex: 2,
                    position: 'relative',
                    transition: "transform 0.3s ease",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Box display="flex" alignItems="start" flexDirection="column" gap={2}>
                    <Chip
                      label={index + 1}
                      sx={{
                        backgroundColor: "#333333",
                        color: "white",
                        borderRadius: "50%",
                        width: 40,
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "20px"
                      }} />
                    <Typography
                      fontSize={parseInt(smallFontSize) + 4}
                      fontWeight={600}
                      sx={{
                        background: 'linear-gradient(90deg, #FFD700, #FF8C00)', 
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {title}
                    </Typography>
                    <Chip
                      label={time}
                      icon={<AccessTimeIcon sx={{ stroke: '#7065F0'}} />}
                      sx={{ color: "white", padding: "2px", fontSize: "large" }}
                    />
                  </Box>
                  <List sx={{ mt: 2 }}>
                    {scheduleListData.map((item, i) => (
                      <ListItem key={i} sx={{ p: 0, pl: 2, mt: 1, color: "white" }}>
                        <Typography component="li" sx={{ listStyleType: 'disc' }}>
                          {item}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Card>
              </Grid>
            </Grid>
          </Step>
        ))}
      </Stepper>

      <div sx={{ mt: "40px" }}>
        <GetTickets />
      </div>
    </Container>
  );
};

export default Schedule;
