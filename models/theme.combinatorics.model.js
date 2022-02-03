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
            [{text: keyboardBtn.Theme_combinatorics.comb_2, callback_data: "comb_2"}],
        ]
    },
}
const ThemeComb = mongoose.model('inequalities', ThemeSchema)
//database.Theme_combinatorics.forEach(f => new ThemeComb(f).save())
module.exports = {ThemeComb, combinatoricsButtons}