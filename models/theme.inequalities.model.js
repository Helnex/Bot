const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const database = require("../database.json");
const keyboardBtn = require('../bot_modules/keyboardButtons');

const ThemeSchema = new Schema ({
    name: String,
    links: [String],
    short_description: String,
})

const inequalitiesButtons = {
    reply_markup: {
        inline_keyboard: [
            [{text: keyboardBtn.Theme_inequalities.ineq_1, callback_data: "ineq_1"}],
            [{text: keyboardBtn.Theme_inequalities.ineq_2, callback_data: "ineq_2"}],
            [{text: keyboardBtn.Theme_inequalities.ineq_3, callback_data: "ineq_3"}],
            [{text: keyboardBtn.Theme_inequalities.ineq_2, callback_data: "ineq_4"}],
            [{text: keyboardBtn.Theme_inequalities.ineq_3, callback_data: "ineq_5"}],
        ]
    },
}
const ThemeIneq = mongoose.model('inequalities', ThemeSchema)
//database.Theme_inequalities.forEach(f => new ThemeIneq(f).save())
module.exports = {ThemeIneq, inequalitiesButtons}
