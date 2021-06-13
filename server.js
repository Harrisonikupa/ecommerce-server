const express = require('express');
const app = express();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// Declaring Routes and API's
app.use('/api/users', require('./routes/user-api'));
app.use('/api/products', require('./routes/product-api'));

app.get('/',(req, res) => {
    res.send('App has started');
    console.log('Hey, App has started');
});
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});