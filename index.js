const express = require('express');
const PORT = 3001;
const app = express();
const firebaseAdmin = require('./service/firebase');

// CORS setup for all requests
const cors = require('cors');
app.use(cors());

// Parse JSON and URL-encoded form data
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data


app.get('/', (req, res) => {
    return res.status(200).json({
        success: true,
        message: 'Welcome to node server'
    });
})


// Route for sending notifications
app.post('/send-notification', (req, res) => {

    const { title, body } = req.body;

    let tokens = []; // your app fcm token

    if (tokens.length === 0) {
        return res.status(400).json({
            success: false,
            error: 'Invalid FCM tokens'
        });
    }

    const message = {
        notification: {
            title,
            body,
            // image: 'https://developernoob.in/wp-content/uploads/2023/08/developernoob-logo.webp',
        },
        android: {
            notification: {
                image: 'https://developernoob.in/wp-content/uploads/2023/08/developernoob-logo.webp',
            },
        },
        data: {
            payLoadOne: 'payLoadOne One',
            payLoadTwo: 'payLoadTwo Two',
        },
        tokens: tokens,
    };


    firebaseAdmin.messaging().sendMulticast(message)
        .then(response => {
            console.log('Notification sent:', response);
            res.status(200).json({ success: true });
        })
        .catch(error => {
            console.error('Error sending notification:', error);
            res.status(500).json({ error: 'Failed to send notification' });
        });
});



app.listen(PORT, (req, res) => {
    console.log('listening on port  ' + PORT);
});