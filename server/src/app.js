const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')


const app = express()

app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())

app.get('/status', (req, res) => {
    res.send({
        message: 'Hello From API'
    })
})

app.listen(process.env.PORT || 8081, () => {
    console.log("Server is Running @ Port: 8081")
})
