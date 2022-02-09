const mongoose = require('mongoose')
const Schema = mongoose.Schema
const database = require("../database.json")
const keyboardBtn = require('../bot_modules/keyboardButtons')

const ThemeSchema = new Schema ({
    name: String,
    links: [String],
    short_description: String,
})

const functionsButtons = {
    reply_markup: {
        inline_keyboard: [
            [{text: keyboardBtn.Theme_funcions.func_1, callback_data: "func_1"}],
            [{text: keyboardBtn.Theme_funcions.func_2, callback_data: "func_2"}],
            [{text: keyboardBtn.Theme_funcions.func_3, callback_data: "func_3"}],
            [{text: keyboardBtn.Theme_funcions.func_4, callback_data: "func_4"}]
        ]
    },
}
const ThemeFunc = mongoose.model('functions', ThemeSchema)
//database.Theme_radicals.forEach(f => new ThemeFunc(f).save())
module.exports = {ThemeFunc, functionsButtons}

