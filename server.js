const express = require('express')
const app = express()
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const bodyParser = require("body-parser")
const connectDB = require('./DB/connectionMdb')

const PORT = process.env.PORT || 3000


//set our server to accept JSON
app.use(express.json()) //body parser to parse json

connectDB();

app.use(bodyParser.urlencoded({extended: true}));






 const animalsRouter = require("./routes/animals")
 app.use('/animals',animalsRouter)

const userRouter = require("./routes/users");

app.use('/users',userRouter)

const productsRouter = require("./routes/products");
app.use('/products',productsRouter )

const paniersRouter = require("./routes/paniers");
app.use('/panier', paniersRouter)


const commandePRouter = require("./routes/commandesP");
app.use('/commandeP',commandePRouter)

const favorisRouter = require("./routes/favoris");
app.use('/favoris', favorisRouter)

const elevagesRouter = require("./routes/elevages");
app.use('/elevages', elevagesRouter)


app.listen(PORT, ()=> {console.log(`Server is running on http://localhost:${PORT}`)})

 


