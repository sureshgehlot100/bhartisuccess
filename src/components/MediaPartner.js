import React from 'react';
import { Box, Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import img1 from '../assets/bigfm.jpg';
import img2 from '../assets/sakal.jpg';
import img3 from '../assets/saam.jpg';
import img4 from '../assets/pudhari.jpg';
import img5 from '../assets/mirchi.jpg';

const Root = styled(Box)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(10, 0),
    },
}));

const Gradient = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(180deg, #1a237e 0%, #7c4dff 100%)',
});

const Container = styled(Box)({
    position: 'relative',
    zIndex: 1,
});

const StyledPaper = styled(Paper)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    backgroundColor: 'white',
    transition: 'transform 0.3s ease-in-out',
    margin: 'auto',
    '&:hover': {
        transform: 'scale(1.05)',
    },
}));

const partners = [
    { name: 'BIG FM', logo: img1, alt: 'BIG FM logo' },
    { name: 'Radio Mirchi', logo: img5, alt: 'Radio Mirchi logo' },
    { name: 'Saam TV', logo: img2, alt: 'Saam TV logo' },
    { name: 'Pudhari', logo: img4, alt: 'Pudhari logo' },
    { name: 'Sakal', logo: img3, alt: 'Sakal logo' },
];

export default function MediaPartners() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <Root>
            <Gradient />
            <Container maxWidth="lg" margin="auto">
                <Typography
                    variant="h5"
                    align="center"
                    gutterBottom
                    sx={{
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: { xs: '2.5rem', md: '3.75rem' },
                        marginBottom: theme.spacing(6),
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    Our Media Partners
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {partners.map((partner) => (
                        <Grid item xs={12} sm={4} md={2.4} key={partner.name}>
                            <StyledPaper elevation={3}style={{ width: isMobile ? '250px' : 'auto' }}>
                                <img
                                    src={partner.logo}
                                    alt={partner.alt}
                                    width={isMobile ? 100 : 150}
                                    height={isMobile ? 75 : 75}
                                    style={{ objectFit: 'contain' }} 
                                />
                            </StyledPaper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Root>
    );
}