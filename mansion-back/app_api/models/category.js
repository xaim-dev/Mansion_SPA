const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema ({
    category: {
        type: String,
        trim: true,
    }
})

module.exports = mongoose.model('Category', categorySchema)