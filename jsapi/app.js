const express = require('express')
const app = express()
const { json } = require('body-parser')
const cors = require('cors')

// Imports
const Main = require('./routes/main')


// Middleware
app.use(json());



// Start the app
const start = async () => {
    try {
        app.listen('3001', () => {
            console.log('listening n 3001')
        })
    } catch (err) {
        console.error(err)
    }
}
start()

// Use routes
app.use('/api/data', Main)

