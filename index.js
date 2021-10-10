const TelegramApi = require('node-telegram-bot-api');
const {Home, Theme} = require('./bot_modules/keyboardButtons');
const keyboard = require('./bot_modules/keyboard')
const debug = require('./bot_modules/debugInfo');
const token = require('./TOKEN');
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramApi(token, {polling:true});
//module.exports = debug

const startApp = () => {
    //const text = msg.text;
    //const chatId = msg.chat.id;
    
    bot.on('message', async msg => {
        console.log('СТАРТУЕМ')
        const text = msg.text;
        const chatId = msg.chat.id;
        let UserName = msg.from.first_name; 
        switch(text) {

        }
        bot.setMyCommands([
            {command: '/start', description: 'Приветствие'},
            {command: '/info', description: 'Получить  информацию о пользователе'},
        ])
        if (text === '/start') {
            return bot.sendMessage (chatId, `Привет, ${UserName}\nВыбери команду для начала работы:`, {
                reply_markup: {
                    keyboard: keyboard.Home
                }
            })
        }
        return bot.sendMessage(chatId, `Я тебя не понимаю!Попробуй еще раз`);
    })
    
}
startApp()

