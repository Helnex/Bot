const TelegramApi = require('node-telegram-bot-api');
const keyboardBtn = require('./bot_modules/keyboardButtons');
const keyboard = require('./bot_modules/keyboard');
const debug = require('./bot_modules/debugInfo');
const {TOKEN, DB_URL} = require('./config');
const mongoose = require('mongoose');
//const bot = new TelegramApi(TOKEN, {polling:true});
const bot = new TelegramApi(process.env.TOKEN, {polling:true});

const {ThemeFunc, functionsButtons} = require('./models/theme.functions.model');
const {ThemeRadicals , radicalsButtons} = require('./models/theme.radicals.model');
//const themeIneq = require('./models/theme.inequalities.model');
//module.exports = debug
/*mongoose.connect(DB_URL, {
    useNewUrlParser: true
})*/
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true
})
    .then (() => console.log('Бд работает'))
    .catch ((err) => console.log(err))




bot.on('message', async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    let UserName = msg.from.first_name;

    const findDatabase = (themeName, findName) => {
        themeName.findOne({name: findName}, function(err, docs) {
        if(err) return console.log(err);
        /*let resultLinks = docs.links;
        let resultDescription = docs.short_description;*/
        let resultLinks = docs.link_video;
        let resultDescription = docs.link_article;
    bot.sendMessage(chatId, `${resultDescription}
${resultLinks}`, {
            parse_mode: 'HTML',
            reply_markup: { keyboard: keyboard.BackToHome },
        });
        })
    }
    const callbackData = () => {
        bot.on('callback_query', msg => {
          console.log(msg)
          const data = msg.data;
          const chatId = msg.message.chat.id;
          switch (data) {
            case 'func_1':
                process.once(findDatabase(ThemeFunc, 'Свойства функции'));
                break;
            case 'func_2':
                process.once(findDatabase(ThemeFunc, 'Графики функции'));
                break;
            case 'func_3':
                process.once(findDatabase(ThemeFunc, 'Функция: область определения и область значений'));
                break;
            case 'func_4':
                process.once(findDatabase(ThemeFunc, 'Геометрические преобразования'));
                break;
            
            case 'rad_1':
                process.once(findDatabase(ThemeRadicals, 'Квадратный корень и его свойства'));
                break;
        }})
    }
    callbackData()
    switch (text) {
        case keyboardBtn.Home.functions:
            bot.sendMessage(chatId, 'Что именно тебя интересует?', functionsButtons);
            break;
        case keyboardBtn.Home.radicals: 
        bot.sendMessage(chatId, 'Что именно тебя интересует?', radicalsButtons);
        break;
        case keyboardBtn.BackToHome:
            bot.sendMessage(chatId, 'Может посмотришь что-то еще?', {
                reply_markup: { keyboard: keyboard.Home}
            });
            break;
    }    
    bot.setMyCommands([
            { command: '/start', description: 'Приветствие' },
    ]);
    if (text === '/start') {
        return bot.sendMessage(chatId, `Привет, ${UserName}\nВыбери тему:`, {
            reply_markup: { keyboard: keyboard.Home }      
        });
    }
});

