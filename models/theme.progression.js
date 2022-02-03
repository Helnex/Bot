const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const database = require("../database.json");
const keyboardBtn = require('../bot_modules/keyboardButtons');

const ThemeSchema = new Schema ({
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
const ThemeProg = mongoose.model('progression', ThemeSchema)
//database.Theme_inequalities.forEach(f => new ThemeProg(f).save())
module.exports = {ThemeProg, progressionButtons}