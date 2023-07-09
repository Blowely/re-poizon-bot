const express = require('express')
global.WebSocket = require('ws');

const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log('')
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})