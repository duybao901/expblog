const mongoose = require('mongoose');
const Scheme = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const CourseScheme = new Scheme(
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
CourseScheme.query.sortTable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isvalidType = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: isvalidType ? req.query.type : 'desc',
        });
    }
    return this;
};

mongoose.plugin(slug);
CourseScheme.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: true,
});
module.exports = mongoose.model('Course', CourseScheme);
