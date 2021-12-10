const mongoose = require('mongoose')

const elevageSchema = new mongoose.Schema({
dateElevage: {
type:Date,
},
dateApprouve: {
    type:Date,
},
etat:{
    type:Boolean,
    default: 0
}
})
module.exports = mongoose.model('elevages',elevageSchema)