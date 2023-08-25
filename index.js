const express = require('express');
const PORT = 3001;
const app = express();

// CORS setup for all requests
const cors = require('cors');
app.use(cors());

// Parse JSON and URL-encoded form data
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data


app.use('/', (req, res) => {
    return res.status(200).json({
        success: true,
        message: 'Welcome to node server'
    });
})




app.listen(PORT, (req, res) => {
    console.log('listening on port  ' + PORT);
});