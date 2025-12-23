const mongoose = require('mongoose');

const watchSchema = mongoose.Schema({
    watch_name: {
        type: String,
        required: true,
    },
    watch_model: {
        type: String,
        required: true
    },
    watch_color: {
        type: String,
        required: true,
    },
    watch_price: {
        type: Number,
        required: true
    },
    watch_image: {
        type: String,
        required: true
    }
});

const watch = mongoose.model("watch", watchSchema, "watches");

module.exports = watch;