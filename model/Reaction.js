const { Schema, model } = require('mongoose');

// Schema to create User model
const reactionSchema = new Schema(
    {
        reactionID: {
       
        },
        reactionBody: {
            type: String,
            required: true,
            min: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            Date: { type: Date, default: Date.now },
        }
    },

    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;
