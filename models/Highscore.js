const mongoose = require('mongoose');

// Define the schema for the Highscore model
const HighscoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide a name'], // Field is required with custom error message
        trim: true, // Remove whitespace from the beginning and end of the name
        maxlength: [20, 'Name cannot be more than 20 characters'], // Maximum length constraint with custom error message
    },
    value: {
        type: Number, // Score field is of type Number
    }
});

// Create a model named 'Highscore' using the HighscoreSchema
module.exports = mongoose.model('Highscore', HighscoreSchema);