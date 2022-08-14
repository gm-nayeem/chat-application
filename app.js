// external imports
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')

// internal imports
const { notFoundHandler, errorHandler } = require('./middleware/common/errorHandler')


const app = express()
const PORT = process.env.PORT

// create middleware
const middleware = [
    morgan('dev'),
    express.static(path.join(__dirname, 'public')),
    express.json(),
    express.urlencoded({ extended: true }),
    cookieParser(process.env.Cookie_Secret),
]

// set view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// database connection
mongoose
    .connect(process.env.MongoDB_Connection_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDb connection successfull'))
    .catch(err => console.log(err))


// use middleware
app.use(middleware)


// routing setup

app.get('/', (req, res) => {
    res.json({
        message: 'This is a chat-application project'
    })

})

// 404 not found
app.use(notFoundHandler)

// common error handler
app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})