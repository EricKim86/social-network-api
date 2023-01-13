const { Schema, model } = require('mongoose');

// Schema to create User model
const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: 1,
            max: 280,
        },
        createdAt: {
            Date: { type: Date, default: Date.now },
        },
        username: {
            type: String,
            required: true,
        },
        reactions: {}
    },

    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

thoughtsSchema
    .virtual('reactionCount')

    .get(function () {
        return this.reactions.length;
    })

const Thoughts = model('Thoughts', userSchema);

module.exports = Thoughts;
