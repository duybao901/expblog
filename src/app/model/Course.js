const mongoose = require('mongoose');
const Scheme = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Course = new Scheme(
    {
        name: {
            type: String,
            default: '',
            required: true,
        },
        description: {
            type: String,
            default: '',
            required: true,
        },
        image: {
            type: String,
            default: '',
            required: true,
        },
        videoId: {
            type: String,
            required: true,
        },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
