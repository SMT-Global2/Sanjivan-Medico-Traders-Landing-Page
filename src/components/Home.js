import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  Link,
  useTheme,
  alpha,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedIcon from "@mui/icons-material/Verified";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const Home = () => {
  const theme = useTheme();
  const contacts = ["+91 94221 37362", "+91 79426 94656", "+91 90280 72888"];
  const whatsappNumber = "+91 94221 37362";
  const email = "info@sanjivanmedico.in";
  const mapLink = "https://maps.app.goo.gl/cLxxvuZJ2aKKSyJHA";

  const features = [
    {
      icon: (
        <LocalShippingIcon
          sx={{ fontSize: 40, color: theme.palette.primary.main }}
        />
      ),
      title: "Fast Delivery",
      description:
        "Quick and reliable delivery service across the region, ensuring timely supply of essential medicines",
    },
    {
      icon: (
        <VerifiedIcon
          sx={{ fontSize: 40, color: theme.palette.primary.main }}
        />
      ),
      title: "Quality Assured",
      description:
        "All products are sourced from reputed manufacturers with proper quality checks and certifications",
    },
    {
      icon: (
        <SupportAgentIcon
          sx={{ fontSize: 40, color: theme.palette.primary.main }}
        />
      ),
      title: "100% Satisfaction Support",
      description:
        "Dedicated customer service team committed to providing complete satisfaction and reliable assistance",
    },
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I would like to enquire about,");
    window.open(
      `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${message}`
    );
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          minHeight: "100vh",
          pt: 8,
          pb: 4,
          display: "flex",
          alignItems: "center",
          background: `linear-gradient(135deg, ${alpha(
            theme.palette.primary.main,
            0.05
          )} 0%, ${alpha(theme.palette.primary.main, 0.1)} 100%)`,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <MotionTypography
                  variant="h1"
                  component="h1"
                  gutterBottom
                  color="primary"
                  sx={{ fontWeight: 700 }}
                >
                  Sanjivan Medico Traders
                </MotionTypography>
                <MotionTypography
                  variant="h4"
                  color="text.secondary"
                  paragraph
                  sx={{ mb: 4 }}
                >
                  Your Trusted Wholesale Medicine Partner
                </MotionTypography>
                <MotionButton
                  variant="contained"
                  size="large"
                  color="primary"
                  component={Link}
                  href="#contact"
                  sx={{ mr: 2, mb: { xs: 2, sm: 0 } }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </MotionButton>
                <MotionButton
                  variant="outlined"
                  size="large"
                  onClick={handleWhatsAppClick}
                  startIcon={<WhatsAppIcon />}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  WhatsApp
                </MotionButton>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                component="img"
                src="/hero-image.svg"
                alt="Medical Distribution"
                sx={{
                  width: "100%",
                  maxWidth: 500,
                  mx: "auto",
                  display: "block",
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box
        id="features"
        sx={{
          py: 10,
          mt: 6,
          backgroundColor: "background.paper",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      textAlign: "center",
                      height: "100%",
                      backgroundColor: "transparent",
                    }}
                  >
                    <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                    <Typography variant="h5" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Paper>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box
        id="about"
        sx={{
          py: 10,
          mt: 6,
          backgroundColor: alpha(theme.palette.primary.main, 0.05),
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h2" gutterBottom color="primary">
                  About Us
                </Typography>
                <Typography paragraph variant="h6" sx={{ mb: 3 }}>
                  Sanjivan Medico Traders is a leading and growing wholesale
                  distributor of pharmaceutical products, serving healthcare
                  providers and retailers across the region.
                </Typography>
                <Typography paragraph>
                  With years of experience and partnerships with reputed brands,
                  we ensure reliable supply of quality medicines. Our commitment
                  to excellence and customer satisfaction has made us a trusted
                  name in the industry.
                </Typography>
                <Typography variant="h6" sx={{ mt: 3 }}>
                  <strong>Owner:</strong> Mr. Sachin Sarda
                </Typography>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                component="img"
                src="/about-image.svg"
                alt="About Us"
                sx={{
                  width: "100%",
                  maxWidth: 500,
                  mx: "auto",
                  display: "block",
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        id="contact"
        sx={{
          py: 10,
          mt: 6,
          backgroundColor: "background.paper",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            gutterBottom
            align="center"
            color="primary"
            sx={{ mb: 6 }}
          >
            Contact Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: "100%",
                  background: `linear-gradient(135deg, ${alpha(
                    theme.palette.primary.main,
                    0.05
                  )} 0%, ${alpha(theme.palette.primary.main, 0.1)} 100%)`,
                }}
              >
                <Box>
                  <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
                    Get in Touch
                  </Typography>
                  {contacts.map((contact, index) => (
                    <Button
                      key={index}
                      variant="text"
                      startIcon={<PhoneIcon />}
                      href={`tel:${contact}`}
                      sx={{
                        color: "text.primary",
                        justifyContent: "flex-start",
                        mb: 1,
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "primary.main",
                        },
                      }}
                    >
                      {contact}
                    </Button>
                  ))}
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
                    Mail
                  </Typography>
                  <Button
                    variant="text"
                    startIcon={<EmailIcon />}
                    href={`mailto:${email}`}
                    sx={{
                      color: "text.primary",
                      justifyContent: "flex-start",
                      mb: 1,
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "primary.main",
                      },
                    }}
                  >
                    {email}
                  </Button>
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
                    Quick Connect
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<WhatsAppIcon />}
                    onClick={handleWhatsAppClick}
                    sx={{
                      backgroundColor: "#25D366",
                      mb: 1,
                      "&:hover": {
                        backgroundColor: "#128C7E",
                      },
                    }}
                  >
                    Chat on WhatsApp
                  </Button>
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
                    Visit Us
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                    <LocationOnIcon sx={{ mr: 1, mt: 0.5, color: 'text.secondary' }} />
                    <Typography variant="body1" color="text.secondary">
                      Medicine Complex, Opposite to Anuja Hotel, Ekori Ward,
                      Chandrapur, Maharashtra, India - 442402
                    </Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    startIcon={<LocationOnIcon />}
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      mb: 1,
                      "&:hover": {
                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      },
                    }}
                  >
                    View on Map
                  </Button>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <ContactForm />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
