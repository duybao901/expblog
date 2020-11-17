const mongoose = require('mongoose');
const Scheme = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
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
        level: {
            type: String,
            required: true,
        },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: true,
});
module.exports = mongoose.model('Course', Course);
