const TelegramApi = require('node-telegram-bot-api');
const {KeyboardOptions} = require('./bot_modules/keyboardOptions')
const debug = require('./bot_modules/debugInfo');
const token = require('./TOKEN')

const bot = new TelegramApi(token, {polling:true});

bot.on('callback_query', msg => {
    bot.sendMessage(msg.message.chat.id, debug(msg))
}) 

const startBot = () => {
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        let UserName = msg.from.first_name; 
        let SurName = msg.from.last_name; 
    
        bot.sendMessage(chatId, `клавиатура`, KeyboardOptions)
        //return bot.sendMessage(chatId, `Я тебя не понимаю!Попробуй еще раз`);
    })
    bot.setMyCommands([
        {command: '/start', description: 'Приветствие'},
        {command: '/info', description: 'Получить  информацию о пользователе'},
    ])
}
startBot()

