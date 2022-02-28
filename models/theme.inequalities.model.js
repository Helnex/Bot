const mongoose = require('mongoose')
const schema = mongoose.Schema
const database = require("../database.json")
const keyboardBtn = require('../bot_modules/keyboardButtons')

const themeSchema = new schema ({
    name: String,
    links: [String],
    short_description: String,
})

const inequalitiesButtons = {
    reply_markup: {
        inline_keyboard: [
            [{text: keyboardBtn.Theme_inequalities.ineq_1, callback_data: "ineq_1"}],
            [{text: keyboardBtn.Theme_inequalities.ineq_2, callback_data: "ineq_2"}],
        ]
    },
}
const themeIneq = mongoose.model('inequalities', themeSchema)
module.exports = {themeIneq, inequalitiesButtons}
