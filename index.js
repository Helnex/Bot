const TelegramApi = require('node-telegram-bot-api');
const keyboardBtn = require('./bot_modules/keyboardButtons');
const keyboard = require('./bot_modules/keyboard');
const debug = require('./bot_modules/debugInfo');
const mongoose = require('mongoose');
const bot = new TelegramApi(process.env.TOKEN, {polling:true});
const {ThemeFunc, functionsButtons} = require('./models/theme.functions.model');
const {ThemeRadicals , radicalsButtons} = require('./models/theme.radicals.model');
const {ThemeIneq, inequalitiesButtons} = require('./models/theme.inequalities.model');
const {ThemeChance, chanceButtons} = require('./models/theme.chance.model');
const {ThemeComb, combinatoricsButtons} = require('./models/theme.combinatorics.model');
const {ThemeProg, progressionButtons} = require('./models/theme.progression.model');

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
        let resultLinks = docs.links;
        let resultDescription = docs.short_description;
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
            case 'rad_2':
                process.once(findDatabase(ThemeRadicals, 'Кубический корень и его свойства'));
                break;
            case 'rad_3':
                bot.sendPhoto(chatId, 'https://lh4.googleusercontent.com/proxy/0lmxuGW2TrzVI_uAnjoqz79pfAgpo2GKlvOqu6YF9dPcRdrTUEK_VRnfxAjzFvOA2SzY-buibmT65VIv7m0N-GKExB_7DGjiS9tI0CUzyrCvRrsqbOw7MuGeNiv4=w1200-h630-p-k-no-nu')
            break;
            case 'rad_4':
                bot.sendPhoto(chatId, 'https://doza.pro/art/math/algebra/img/table-cubes-1-1.png')
            break;

            case 'chan_1':
                process.once(findDatabase(ThemeChance, 'Определение вероятности'));
                break;
            case 'chan_2':
                process.once(findDatabase(ThemeChance, 'Решение задач'));
                break;

            case 'comb_1':
            process.once(findDatabase(ThemeComb, 'Определение'));
                break;
            case 'comb_2':
            process.once(findDatabase(ThemeComb, 'Решение задач'));
                break;

            case 'ineq_1':
            process.once(findDatabase(ThemeIneq, 'Решение квадратных уравнений'));
                break;
            case 'ineq_2':
            process.once(findDatabase(ThemeIneq, 'Метод интервалов'));
                break;

            case 'prog_1':
            process.once(findDatabase(ThemeProg, 'Определение и формулы'));
                break;
            case 'prog_2':
            process.once(findDatabase(ThemeProg, 'Решение задач'));
                break;
        }})
    }
    callbackData()
    switch (text) {
        case keyboardBtn.Home.functions:
            bot.sendMessage(chatId, 'Выбери тему:', functionsButtons);
            break;
        case keyboardBtn.Home.radicals: 
        bot.sendMessage(chatId, 'Выбери тему:', radicalsButtons);
            break;
        case keyboardBtn.Home.inequalities: 
        bot.sendMessage(chatId, 'Выбери тему:', inequalitiesButtons);
            break;
        case keyboardBtn.Home.chance: 
        bot.sendMessage(chatId, 'Выбери тему:', chanceButtons);
            break;
        case keyboardBtn.Home.combinatorics: 
        bot.sendMessage(chatId, 'Выбери тему:', combinatoricsButtons);
            break;
        case keyboardBtn.Home.progression: 
        bot.sendMessage(chatId, 'Выбери тему:', progressionButtons);
            break;
        case keyboardBtn.BackToHome:
            bot.sendMessage(chatId, 'Хочешь посмотреть что-то еще?', {
                reply_markup: { keyboard: keyboard.Home}
            });
            break;
    }    
    bot.setMyCommands([
            { command: '/start', description: 'Начало работы' },
    ]);
    if (text === '/start') {
        return bot.sendMessage(chatId, `Привет, ${UserName}\nВыбери раздел:`, {
            reply_markup: { keyboard: keyboard.Home }      
        });
    }
    return(bot.sendMessage(chatId, 'Я тебя не понимаю, выбери команду /start'))
});

