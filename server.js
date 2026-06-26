const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

/* =========================
   MIDDLEWARE
========================= */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =========================
   ROUTES
========================= */
app.use('/api/inventory', require('./routes/inventoryRoutes'));
app.use('/api/weather', require('./routes/weatherRoutes'));
app.use('/api/market-prices', require('./routes/marketRoutes'));

app.get('/', (req, res) => {
  res.send('Agro-Analytics Backend Running...');
});

/* =========================
   SERVER START
========================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});