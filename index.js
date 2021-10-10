const TelegramApi = require('node-telegram-bot-api');
const {KeyboardOptions} = require('./options')
const debug = require('./helpers')
const token = '2007096615:AAGkDS8IhTzXiBzuxueo4a5xp-dcoTextDo';

const bot = new TelegramApi(token, {polling:true})

const startBot = () => {
    bot.on('message', msg => {
    
        const chatId = msg.chat.id
        let UserName = msg.from.first_name; 
        let SurName = msg.from.last_name; 
    
        bot.sendMessage(chatId, `клавиатура`, KeyboardOptions)
    })
    bot.setMyCommands([
        {command: '/start', description: 'Приветствие'},
        {command: '/info', description: 'Получить  информацию о пользователе'},
    ])
}
startBot()

bot.on('callback_query', msg => {
    //bot.sendMessage(msg.message.chat.id, debug(msg))
}) 
