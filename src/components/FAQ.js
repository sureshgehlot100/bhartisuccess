import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useResponsiveFontSize from "../useResponsiveFontSize";

const FAQ = () => {
const { smallFontSize, largeFontSize } = useResponsiveFontSize();
  const accordionData = [
    {
      title: "Is this event going to be a physical event?",
      content: "Yes this is a physical event at Hyatt Regency, Pune, Maharashtra on 15th September 2024.",
    },
    {
      title: "Is lunch included in the ticket price?",
      content: "Yes lunch is included in the ticket price of the event.",
    },
    {
      title: "How will I get the exact details and more information about the event?",
      content: "This is the content for Accordion 3.We will send you more information like reminders, location etc on email, whatsapp and if you have any doubts, you can contact us via email support@rahulmalodia.com or phone number 7650067000 (10AM to 6:30PM).",
    },
    {
      title: "Will there be a networking opportunity at the event?",
      content: "Yes, you can interact with other businessmen and join our private communities to network with quality people.",
    },

    {
        title: "How will I get access to bonuses?",
        content: "You will get the bonuses delivered via email after successful registration of the event. Please contact us if you do not receive bonuses within 24 hours of payment.",
    },
  ];

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4, bgcolor: '#fff'}}>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          component="div"
          align="center"
          fontSize={largeFontSize}
          color={'#7065f0'}
        >
          <span>Frequently</span> Asked Questions
        </Typography>
      </Box>

      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{m: '0.5em 0em'}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography variant="h6" fontWeight={600}>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontWeight={500}>{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQ;
