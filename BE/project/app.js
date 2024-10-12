const express = require("express");
const dotenv = require('dotenv');
const userRoutes = require('./src/routes/userRoutes');
const paymentRoutes = require('./src/routes/paymentRoutes');
const subscriptionRoutes = require('./src/routes/subscriptionRoutes');
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;  
app.use(express.json());
app.use('/api/user', userRoutes);  // Routes for user signup, login, and logout
app.use('/api/payment', paymentRoutes);  // Routes for payment processing
app.use('/api/subscription', subscriptionRoutes);  // Routes for subscription management
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
