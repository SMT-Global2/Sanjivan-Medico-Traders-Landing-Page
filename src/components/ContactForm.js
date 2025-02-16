import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box, Typography, Paper, useTheme, alpha } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const MotionButton = motion(Button);

const ContactForm = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    purpose: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          to_email: 'harshalpimpalshwnde@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          city: formData.city,
          purpose: formData.purpose,
          message: formData.message
        },
        'YOUR_USER_ID'
      );
      
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        purpose: '',
        message: ''
      });
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 4,
        background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.paper, 0.95)} 100%)`,
        backdropFilter: 'blur(10px)',
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" gutterBottom color="primary" sx={{ mb: 3 }}>
        Submit Enquiry
      </Typography>
      <Box 
        component="form" 
        onSubmit={handleSubmit}
        sx={{
          '& .MuiTextField-root': {
            mb: 2,
          },
        }}
      >
        <TextField
          fullWidth
          required
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: theme.palette.primary.main,
              },
            },
          }}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          fullWidth
          required
          label="Contact Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          fullWidth
          required
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          fullWidth
          required
          select
          label="Purpose of Enquiry"
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          variant="outlined"
          sx={{ mb: 2 }}
        >
          <MenuItem value="General Enquiry">General Enquiry</MenuItem>
          <MenuItem value="Medicine / Price enquiry">Medicine / Price Enquiry</MenuItem>
          <MenuItem value="Distribution Enquiry">Distribution Enquiry</MenuItem>
        </TextField>
        <TextField
          fullWidth
          required
          multiline
          rows={4}
          label="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          variant="outlined"
          sx={{ mb: 3 }}
        />
        <MotionButton
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          disabled={loading}
          endIcon={<SendIcon />}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          sx={{
            py: 1.5,
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
            '&:hover': {
              background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.main} 90%)`,
            }
          }}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </MotionButton>
      </Box>
    </Paper>
  );
};

export default ContactForm;
