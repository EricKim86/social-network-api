const { Schema, model } = require('mongoose');

// Schema to create reaction model
const reactionSchema = new Schema(
    {
        reactionID: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
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
            type: Date,
            default: Date.now,
        },
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
