const express = require('express')
const TelegramApi = require('node-telegram-bot-api');
require('dotenv').config()

const startBot = require('./service').startBot;

global.WebSocket = require('ws');

const app = express()
const port = 3002

const token = process.env.BOT_TOKEN;
const TELEGRAM_URI = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`


const bot = new TelegramApi(token, {polling: true});

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
    })
)
app.post('/new-order', (req, res) => {
    // Создание экземпляра объекта Centrifuge

    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})