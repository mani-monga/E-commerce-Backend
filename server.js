const express = require('express')
const data = require('./data.json')
const app = express()
const port = 3000

app.use(express.json())

app.post('/', (req, res) => {
    res.send(data)
})

app.get('/', (req, res) => {
    res.send('Got a POST request')
})

app.delete('/', (req, res) => {
    res.send('Got a POST request')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})