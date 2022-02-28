const mongoose = require('mongoose')
const schema = mongoose.Schema
const database = require("../database.json")
const keyboardBtn = require('../bot_modules/keyboardButtons')

const themeSchema = new schema ({
    name: String,
    links: [String],
    short_description: String,
})

const combinatoricsButtons = {
    reply_markup: {
        inline_keyboard: [
            [{text: keyboardBtn.Theme_combinatorics.comb_1, callback_data: "comb_1"}],
        ]
    },
}
const themeComb = mongoose.model('combinatorics', themeSchema)
module.exports = {themeComb, combinatoricsButtons}