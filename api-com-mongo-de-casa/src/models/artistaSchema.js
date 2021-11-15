const mongoose = require('mongoose');

const artistasSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    artista: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
    },
    
    deslikes: {
        type: Number,
    },

    musicas: {
        type: Array,
    },

})

module.exports = mongoose.model("artista", artistasSchema)