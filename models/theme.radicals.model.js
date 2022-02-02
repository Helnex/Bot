const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const keyboardBtn = require('../bot_modules/keyboardButtons');
const database = require("../database.json");
const ThemeSchema = new Schema ({
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
            [{text: keyboardBtn.Theme_radicals.rad_4, callback_data: "rad_4"}],
        ]
    },
}
const ThemeRadicals = mongoose.model('radicals', ThemeSchema)
//database.Theme_radicals.forEach(f => new ThemeRadicals(f).save())
module.exports = {ThemeRadicals, radicalsButtons}
