const mongoose = require('mongoose')
const schema = mongoose.Schema
const database = require("../database.json")
const keyboardBtn = require('../bot_modules/keyboardButtons')

const themeSchema = new schema ({
    name: String,
    links: [String],
    short_description: String,
})

const progressionButtons = {
    reply_markup: {
        inline_keyboard: [
            [{text: keyboardBtn.Theme_progression.prog_1, callback_data: "prog_1"}],
            [{text: keyboardBtn.Theme_progression.prog_2, callback_data: "prog_2"}],
        ]
    },
}
const themeProg = mongoose.model('progression', themeSchema)
module.exports = {themeProg, progressionButtons}