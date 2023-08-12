const express = require('express');
const { getHighscore, updateHighscore } = require('../controllers/highscore'); // Import controller functions

const router = express.Router(); // Create an instance of an Express router

// Define route handling for the root path ('/'), supporting GET and PATCH methods
router.route('/')
    .get(getHighscore)     // Attach the getHighscore controller function to the GET request
    .patch(updateHighscore); // Attach the updateHighscore controller function to the PATCH request

module.exports = router; // Export the router to make it available for other modules