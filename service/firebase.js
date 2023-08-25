// services/firebase.js
const admin = require('firebase-admin');

// Path to your service account JSON file
const serviceAccount = require('./your-firebase-admin-sdk-key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;