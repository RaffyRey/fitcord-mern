require('dotenv').config()
const express = require('express')
const colors = require('colors')
const connectMongoDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')

// mognodb
connectMongoDB();

// port 
const port = process.env.PORT || 5000
// app
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// getting the routes
app.use('/api/user', require('./routes/userRoutes'))
app.use('/api/workout', require('./routes/workoutRoutes'))

// error middleware
app.use(errorHandler)

// lisent to port
app.listen(port, () => {
 console.log(`listening on port ${port}`.red.underline.bold)
})
