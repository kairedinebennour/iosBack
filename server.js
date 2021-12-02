const express = require('express')
const app = express()
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const bodyParser = require("body-parser")
const connectDB = require('../NodeJsiOs/DB/connectionMdb')


const PORT = process.env.PORT || 3000


//set our server to accept JSON
app.use(express.json()) //body parser to parse json

connectDB();

app.use(bodyParser.urlencoded({extended: true}));






// const animalsRouter = require("./routes/animals")
// app.use('/animals',animalsRouter)

// const productsRouter = require("./routes/products")
// app.use('/products',productsRouter)

// const elevageRouter = require("./routes/elevages")
// app.use('/elevages',elevageRouter)

// const commandeProduitRouter = require("./routes/commandesP")
// app.use('/commandesP',commandeProduitRouter)

const userRouter = require("./routes/users");

app.use('/users',userRouter)



app.listen(PORT, ()=> {console.log(`Server is running on http://localhost:${PORT}`)})



// const panierRouter = require("./routes/paniers")
// app.use('/paniers',panierRouter)

// const favorisRouter = require("./routes/favoris")
// app.use('/favoris',favorisRouter)


