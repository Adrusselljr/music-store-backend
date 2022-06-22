require("dotenv").config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const productRouter = require('./routes/productRouter')

const app = express()
const port = 8000

mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Established a connection to the database'))
.catch(err => console.log('Something went wrong when connecting to the database ', err))

app.use(cors())
app.use(bodyParser.json())
app.use(productRouter)

app.get('/', () => {
    console.log('Hey the server was hit')
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})