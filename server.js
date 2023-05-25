// Declare Variables
const express = require('express')
const app = express()
const path = require('path')

// Import Functions / routes
const connectDB = require('./config/database')
const loadRoutes = require('./routes/loads')
const editRoutes = require('./routes/edit')

require('dotenv').config({path: './config/.env'})

// Connect to Database
connectDB()

// Connect to PORT
const PORT = process.env.PORT || 8500;

// Set Middleware
app.set('view engine', 'ejs');
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Set Routes
app.use('/edit', editRoutes)
app.use('/', loadRoutes)

app.listen(PORT, () => {
    console.log(`Connected to the Port: ${PORT}`)
})
