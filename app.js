require('dotenv').config()
const express = require('express')

const app = express()
const PORT = process.env.PORT

app.use('/', (req, res, next) => {
    res.json({
        message: 'This is a chat-application project'
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})