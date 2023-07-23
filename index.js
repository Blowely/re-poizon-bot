const express = require('express')
const axios = require("axios");
require('dotenv').config()

const app = express()
const port = 3002

const token = process.env.BOT_TOKEN;
const TELEGRAM_URI = `https://api.telegram.org/bot5815209672:AAGETufx2DfZxIdsm1q18GSn_bLpB-2-3Sg/sendMessage`
//const TELEGRAM_URI = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`


app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
    })
)

let chatId = '';

app.get('/', (req, res) => {
    res.send('its working');
})

app.post('/new-order', async (req, res) => {
    try {
        await axios.post(TELEGRAM_URI, {
            chat_id: chatId,
            text: 'new-order'
        })
        res.send('Done')
    } catch (e) {
        console.log(e)
        res.send(e)
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
