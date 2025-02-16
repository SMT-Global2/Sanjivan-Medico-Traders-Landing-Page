import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Link,
  useTheme,
  alpha,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.primary.main,
        color: "white",
        py: 6,
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: `linear-gradient(90deg, ${
            theme.palette.secondary.main
          } 0%, ${alpha(theme.palette.primary.main, 0.3)} 100%)`,
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Sanjivan Medico Traders
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
              Your trusted partner in pharmaceutical distribution, serving
              healthcare providers with quality medicines and reliable service.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="/"
                color="inherit"
                sx={{
                  opacity: 0.8,
                  "&:hover": { opacity: 1 },
                  width: "fit-content",
                }}
              >
                Home
              </Link>
              <Link
                href="/#about"
                color="inherit"
                sx={{
                  opacity: 0.8,
                  "&:hover": { opacity: 1 },
                  width: "fit-content",
                }}
              >
                About Us
              </Link>
              <Link
                href="/#contact"
                color="inherit"
                sx={{
                  opacity: 0.8,
                  "&:hover": { opacity: 1 },
                  width: "fit-content",
                }}
              >
                Contact
              </Link>
              <Link
                href="/services"
                color="inherit"
                sx={{
                  opacity: 0.8,
                  "&:hover": { opacity: 1 },
                  width: "fit-content",
                }}
              >
                Services
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Contact Info
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <LocationOnIcon sx={{ opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Medicine Complex, Opposite to Anuja Hotel, Ekori Ward,
                Chandrapur, Maharashtra, India - 442402
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <PhoneIcon sx={{ opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  +91 94221 37362
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <EmailIcon sx={{ opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  info@sanjivanmedico.in
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
          }}
        >
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                © {currentYear} | Sanjivan Medico Traders | All rights reserved.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Designed, Developed, and maintained by{" "}
                <Box
                  component="span"
                  sx={{ color: theme.palette.secondary.light }}
                >
                  Noobacker
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
