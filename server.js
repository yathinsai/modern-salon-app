const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the src directory
app.use(express.static(path.join(__dirname, 'src')));

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// Main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Pages routes
app.get('/pages/:page', (req, res) => {
  const page = req.params.page;
  res.sendFile(path.join(__dirname, 'src', 'pages', page));
});

// Extra pages routes
app.get('/extra-pages/:page', (req, res) => {
  const page = req.params.page;
  res.sendFile(path.join(__dirname, 'src', 'extra-pages', page));
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
app.listen(PORT, async () => {
  const url = `http://localhost:${PORT}`;
  console.log(`🎨 Veridia Salon Server is running at ${url}`);
  console.log(`Press Ctrl+C to stop the server`);
  
  // Auto-open browser
  try {
    const openBrowser = await import('open');
    openBrowser.default(url).catch(err => {
      console.log('Note: Could not auto-open browser. Visit the URL manually.');
    });
  } catch (err) {
    console.log('Note: Could not auto-open browser. Visit the URL manually.');
  }
});
