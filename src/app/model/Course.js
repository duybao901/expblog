const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const Course = new Scheme({
    name: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    },
    image: {
        type: String,
        default: '',
    },
    createAt: {
        type: Date,
        default: Date,
    },
});

module.exports = mongoose.model('Course', Course);
