import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  useTheme,
  alpha,
  CardActionArea,
} from "@mui/material";
import ReceiptIcon from "@mui/icons-material/Receipt";
import DescriptionIcon from "@mui/icons-material/Description";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

const Services = () => {
  const theme = useTheme();

  const services = [
    {
      title: "Receipt Management",
      icon: (
        <ReceiptIcon sx={{ fontSize: 60, color: theme.palette.primary.main }} />
      ),
      description: "Manage and track all receipts efficiently.",
      link: "http://receipt.sanjivanmedicotraders.in",
      delay: 0.2,
      bgImage: "/receipt-bg.jpg",
    },
    {
      title: "Invoice Management",
      icon: (
        <DescriptionIcon
          sx={{ fontSize: 60, color: theme.palette.primary.main }}
        />
      ),
      description: "Handle invoices and workflow. ",
      link: "http://invoice.sanjivanmedicotraders.in",
      delay: 0.4,
      bgImage: "/invoice-bg.jpg",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: 12,
        pb: 8,
        background: `linear-gradient(135deg, ${alpha(
          theme.palette.primary.main,
          0.05
        )} 0%, ${alpha(theme.palette.primary.main, 0.1)} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            component={motion.h2}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            variant="h2"
            color="primary"
            gutterBottom
          >
            Employee Services
          </Typography>
          <Typography
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: "800px", mx: "auto", mb: 4 }}
          >
            Access powerful tools to manage your daily operations efficiently
            and effectively
          </Typography>
        </Box>

        
<Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: service.delay }}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${service.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.1,
                    transition: "all 0.3s ease-in-out",
                  },
                  "&:hover": {
                    "&::before": {
                      opacity: 0.15,
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <CardActionArea
                  component="a"
                  href={service.link}
                  sx={{
                    height: "100%",
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <CardContent sx={{ textAlign: "center", width: "100%" }}>
                    <Box
                      sx={{
                        mb: 3,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                        mx: "auto",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.1)",
                          backgroundColor: alpha(
                            theme.palette.primary.main,
                            0.15
                          ),
                        },
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: theme.palette.primary.main,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 3 }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
