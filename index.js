const express = require('express');
const PORT = 3001;
const app = express();



app.use('/', (req, res) => {
    return res.status(200).json({
        success: true,
        message: 'Welcome to node server'
    });
})




app.listen(PORT, (req, res) => {
    console.log('listening on port  ' + PORT);
});