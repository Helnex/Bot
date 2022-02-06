const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const database = require("../database.json");
const keyboardBtn = require('../bot_modules/keyboardButtons');

const ThemeSchema = new Schema ({
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
const ThemeChance = mongoose.model('chance', ThemeSchema)
module.exports = {ThemeChance, chanceButtons}