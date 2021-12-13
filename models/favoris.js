const mongoose = require('mongoose')

const favorisSchema = new mongoose.Schema({
    idProduit:{
        type : mongoose.Types.ObjectId,
            ref: "produits"
    },
    idUser:{type : mongoose.Types.ObjectId,
        ref: "users"
    },
    idAnimal: {type : mongoose.Types.ObjectId,
        ref: "animals"
    },

})
module.exports = mongoose.model('favoris',favorisSchema)