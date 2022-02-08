const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const database = require("../database.json");
const keyboardBtn = require('../bot_modules/keyboardButtons');

const ThemeSchema = new Schema ({
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
const ThemeComb = mongoose.model('combinatorics', ThemeSchema)
module.exports = {ThemeComb, combinatoricsButtons}