const Highscore = require('../models/Highscore'); // Import the Highscore model

// Controller function to retrieve the highscore
const getHighscore = async (req, res) => {
    try {
        const highscore = await Highscore.findOne({}); // Find a single highscore document
        
        res.status(200).json({ highscore }); // Respond with the highscore object
    } catch (error) {
        res.status(500).json({ msg: error }); // Handle server error
    }
};

// Controller function to update the highscore
const updateHighscore = async (req, res) => {
    try {
        const highscore = await Highscore.findOneAndUpdate({}, req.body, {
            new: true,           // Return the updated document
            runValidators: true, // Apply validation during update
        });

        if (!highscore) {
            return res.status(404).json({ msg: 'No highscore found' });
        }

        res.status(200).json({msg:'New Global Highscore!', highscore }); // Respond with the updated highscore
    } catch (error) {
        res.status(500).json({ msg: error }); // Handle server error
    }
};

module.exports = {
    getHighscore,
    updateHighscore,
};