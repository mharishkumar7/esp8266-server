const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;  // Render assigns a dynamic port

app.use(express.json());  // Middleware to parse JSON data

// Route to receive data from ESP8266
app.post('/send-data', (req, res) => {
    const receivedData = req.body;
    console.log('Received Data:', receivedData);
    res.send({ message: 'Data received successfully', data: receivedData });
});

// Default route
app.get('/', (req, res) => {
    res.send('ESP8266 Server is running!');
});

// Start server

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});

