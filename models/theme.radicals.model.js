const mongoose = require('mongoose')
const schema = mongoose.Schema
const database = require("../database.json")
const keyboardBtn = require('../bot_modules/keyboardButtons')

const themeSchema = new schema ({
    name: String,
    links: [String],
    short_description: String
})

const radicalsButtons = {
    reply_markup: {
        inline_keyboard: [
            [{text: keyboardBtn.Theme_radicals.rad_1, callback_data: "rad_1"}],
            [{text: keyboardBtn.Theme_radicals.rad_2, callback_data: "rad_2"}],
            [{text: keyboardBtn.Theme_radicals.rad_3, callback_data: "rad_3"}],
        ]
    },
}
const themeRadicals = mongoose.model('radicals', themeSchema)
module.exports = {themeRadicals, radicalsButtons}