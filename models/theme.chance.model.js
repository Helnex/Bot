const mongoose = require('mongoose')
const schema = mongoose.Schema
const database = require("../database.json")
const keyboardBtn = require('../bot_modules/keyboardButtons')

const themeSchema = new schema ({
    name: String,
    links: [String],
    short_description: String,
})

const chanceButtons = {
    reply_markup: {
        inline_keyboard: [
            [{text: keyboardBtn.Theme_chance.chan_1, callback_data: "chan_1"}],
            [{text: keyboardBtn.Theme_chance.chan_2, callback_data: "chan_2"}],
        ]
    },
}
const themeChance = mongoose.model('chance', themeSchema)
module.exports = {themeChance, chanceButtons}