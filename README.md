# Modern Salon - Eco-Premium Hair Artistry

A modern, responsive web application for booking premium salon services with an eco-conscious approach.

## Project Structure

```
modern-salon-app/
├── src/
│   ├── index.html                 # Main landing page
│   ├── pages/
│   │   ├── 01-veridia-salon-component-integration.html
│   │   ├── 02-our-services-veridia-salon-catalog.html
│   │   ├── 03-eco-premium-booking-interface.html
│   │   ├── 04-stylist-selection-veridia-salon.html
│   │   └── 05-booking-confirmation-veridia-salon.html
│   |   ├── 01-about-salon.html
│   |   ├── 02-contact-location.html
│   |   ├── 03-gallery-salon.html
│   |   └── 04-reviews.html
│   └── admin/
│       └── index.html
├── server.js                      # Express server
├── package.json                   # Node.js dependencies
└── README.md                      # This file
```

## Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd modern-salon-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Running the Application

The application runs two servers concurrently:
- **Express Server** on `http://localhost:3001` (serves HTML pages)
- **JSON Server** on `http://localhost:3000` (API for appointments)

### Production Mode (both servers)
```bash
npm start
```

### Development Mode (auto-reload with nodemon)
```bash
npm run dev
```

### Run Individual Servers
```bash
npm run server    # Express only
npm run api       # JSON Server only
```

**Application URL:** `http://localhost:3001`

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 🌿 Eco-premium salon branding
- 📅 Booking interface for appointments
- 👥 Stylist selection system
- 🏠 Comprehensive salon information pages
- ✅ Booking confirmation flow

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Tailwind CSS** - Utility-first CSS framework
- **Iconify Icons** - Icon library
- **HTML5** - Markup

## Color Scheme

- Primary Green: `#00AB8E`
- Secondary Gold: `#F0B13D`
- Structural Grey: `#929292`

## Routes

- `GET /` - Main landing page
- `GET /pages/:page` - Access pages from the pages folder
- `GET /extra-pages/:page` - Access extra pages

## Development

To add new pages:
1. Create HTML files in `src/pages/` or `src/extra-pages/`
2. Update `src/index.html` with links to new pages
3. Restart the server to see changes

## Commands
```sh
pkill -f "node server.js" && pkill -f "json-server" && sleep 1 && echo "Cleaned up"
```
## License
MIT
