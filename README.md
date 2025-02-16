# Sanjivan Medico Traders Website

A modern, responsive website for Sanjivan Medico Traders, a wholesale medicine distributor.

## Features

- Beautiful and responsive landing page
- Interactive contact forms with email integration
- WhatsApp integration for quick inquiries
- Google Maps integration for location
- Employee services portal
- Mobile-friendly design

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure EmailJS:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a new service and template
   - Update the following in `src/components/ContactForm.js`:
     - YOUR_SERVICE_ID
     - YOUR_TEMPLATE_ID
     - YOUR_USER_ID

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Build for Production

```bash
npm run build
```

This creates a production-ready build in the `build` folder.

## Technologies Used

- React
- Material-UI
- React Router
- EmailJS
- React Loader Spinner

## Maintenance

Designed and maintained by Noobacker

## License

This project is proprietary and confidential.
