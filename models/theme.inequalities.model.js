const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const database = require("../database.json")

const ThemeSchema = new Schema ({
    name: String,
    link_video: [String],
    link_article: [String]
})

mongoose.model('inequalities', ThemeSchema)

const Theme = mongoose.model('inequalities')
//database.Theme_inequalities.forEach(f => new Theme(f).save())
