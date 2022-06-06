//Tagóvoda séma kamu property-kel
/*
{
    "name": "Joe",
    "description": "hgf",
    "price": "566",
    "active": true
}
*/
const mongoose = require('mongoose')

const TagovodaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
    },
})

module.exports = mongoose.model('Tagovoda', TagovodaSchema)