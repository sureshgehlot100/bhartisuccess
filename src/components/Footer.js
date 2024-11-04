import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  List,
  ListItem,
} from "@mui/material";
import { Facebook, YouTube, Instagram, Telegram } from '@mui/icons-material';

const Footer = () => {
  const footerSections = [
    {
      title: "Address",
      items: [
        "Marvel Fuego",
        "Magarpatta, Hadapsar",
        "Pune - 411033, Maharashtra",
      ],
    },
    {
      title: "Contact Us",
      items: ["0000099999", "0981187634", "09090-80808"],
    },
    {
      title: "Our Services",
      items: ["Consultancy", "Share Market", "IPO"],
    },
    {
      title: "Social Media",
      isSocialMedia: true,
      items: [
        { icon: <Facebook />, link: "https://www.facebook.com/BhartiShareMarketMarathi/" },
        { icon: <YouTube />, link: "https://www.youtube.com/@ravindra_bharti_official" },
        { icon: <Instagram />, link: "https://www.instagram.com/bhartisharemarket/" },
        { icon: <Telegram />, link: "https://t.me/s/bhartisharemkt" },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#333", color: '#fff', py: 4, mt: 3 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {footerSections.map((section, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Typography variant="h6" gutterBottom>
                {section.title}
              </Typography>
              <List
                sx={{
                  display: section.isSocialMedia ? "flex" : "block",
                }}
              >
                {section.items.map((item, idx) => (
        <ListItem
          key={idx}
          sx={{
            p: 0,
            m: "0.5em 0",
            cursor: section.isSocialMedia ? "pointer" : "none",
          }}
        >
          {section.isSocialMedia && item.link ? (
            <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
              {item.icon}
            </a>
          ) : (
            item
          )}
        </ListItem>
      ))}
              </List>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: "#222", py: 3, mt: 4 }}>
        <Container maxWidth="lg">
          <Typography align="center" variant="body2">
            © Copyright 2024. All Rights Reserved By R.Bharti SoftTech Pvt.Ltd
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
