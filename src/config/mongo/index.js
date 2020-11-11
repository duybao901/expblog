const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/courses', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connect successfully');
    } catch (err) {
        console.log('connect false:', err);
    }
}

module.exports = { connect };
