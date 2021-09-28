
const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
        max: 500,
    },
    Image: {
        type: String,
        require: true,
    },
    likes: {
        type: Array,
        default: []
    }
},
{timestamps: true}
)

module.exports = mongoose.model("post",postSchema)