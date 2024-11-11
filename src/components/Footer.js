import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  List,
  ListItem,
} from "@mui/material";
import { Facebook, YouTube, Instagram, Telegram, Email, Phone } from '@mui/icons-material';

const Footer = () => {
  const footerSections = [
    {
      title: "Address",
      items: [
        "Head Office: No 4010, ",
        "4th Floor, Marvel Fuego ",
        "Near Amanora Mall",
        "Opp WeWork/Seasons Mall,",
        "Magarpatta, Pune 411036.",
      ],
    },
    {
      title: "Contact Us",
      items: [
        <div style={{ cursor: 'pointer' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <Phone /><p>+918700987654</p>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            maxWidth: '270px',
            paddingTop: '10px',
            wordBreak: 'break-word',
            gap: '4px'
          }}>
            <Email /> :<span>support@bhartibusinessconsultancy.com</span>
          </div>
        </div>
      ],
    },
    {
      title: "Our Services",
      items: [
        "Consultancy",
        <a href="/Privacy_Policy" style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</a>,
        "Share Market",
        "IPO",
      ],
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
              <Typography variant="h6" gutterBottom cursor="pointer">
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
