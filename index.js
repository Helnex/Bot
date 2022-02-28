const telegramApi = require('node-telegram-bot-api')
const keyboardBtn = require('./bot_modules/keyboardButtons')
const keyboard = require('./bot_modules/keyboard')
const debug = require('./bot_modules/debugInfo')
const mongoose = require('mongoose')
const bot = new telegramApi(process.env.TOKEN, {polling:true})
const {themeFunc, functionsButtons} = require('./models/theme.functions.model')
const {themeRadicals, radicalsButtons} = require('./models/theme.radicals.model')
const {themeIneq, inequalitiesButtons} = require('./models/theme.inequalities.model')
const {themeChance, chanceButtons} = require('./models/theme.chance.model')
const {themeComb, combinatoricsButtons} = require('./models/theme.combinatorics.model')
const {themeProg, progressionButtons} = require('./models/theme.progression.model')

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true
})
    .then (() => console.log('Бд работает'))
    .catch ((err) => console.log(err))


bot.on('message', async (msg) => {
    const text = msg.text
    const chatId = msg.chat.id
    let userName = msg.from.first_name

    const databaseSearch = (themeName, findName) => {
        themeName.findOne({name: findName}, function(err, docs) {
        if(err) return console.log(err)
        let fountLinks = docs.links
        let fountDescription = docs.short_description
    bot.sendMessage(chatId, `${fountDescription}
${fountLinks}`, {
            parse_mode: 'HTML',
            reply_markup: { keyboard: keyboard.BackToHome },
        })
        })
    }
    const callbackData = () => {
        bot.on('callback_query', msg => {
          console.log(msg)
          const data = msg.data
          const chatId = msg.message.chat.id
          switch (data) {
            case 'func_1':
                process.once(databaseSearch(themeFunc, 'Свойства функции'))
                break
            case 'func_2':
                process.once(databaseSearch(themeFunc, 'Графики функции'))
                break
            case 'func_3':
                process.once(databaseSearch(themeFunc, 'Функция: область определения и область значений'))
                break
            case 'func_4':
                process.once(databaseSearch(themeFunc, 'Геометрические преобразования'))
                break
            
            case 'rad_1':
                process.once(databaseSearch(themeRadicals, 'Квадратный корень и его свойства'))
                break
            case 'rad_2':
                process.once(bot.sendPhoto(chatId, 'https://lh4.googleusercontent.com/proxy/0lmxuGW2TrzVI_uAnjoqz79pfAgpo2GKlvOqu6YF9dPcRdrTUEK_VRnfxAjzFvOA2SzY-buibmT65VIv7m0N-GKExB_7DGjiS9tI0CUzyrCvRrsqbOw7MuGeNiv4=w1200-h630-p-k-no-nu'))
                break
            case 'rad_3':
                process.once(bot.sendPhoto(chatId, 'https://doza.pro/art/math/algebra/img/table-cubes-1-1.png'))
            break
            
            case 'chan_1':
                process.once(databaseSearch(themeChance, 'Определение вероятности'));
                break
            case 'chan_2':
                process.once(databaseSearch(themeChance, 'Решение задач'));
                break

            case 'comb_1':
            process.once(databaseSearch(themeComb, 'Решение задач'));
                break

            case 'ineq_1':
            process.once(databaseSearch(themeIneq, 'Решение квадратных уравнений'));
                break
            case 'ineq_2':
            process.once(databaseSearch(themeIneq, 'Метод интервалов'));
                break

            case 'prog_1':
            process.once(databaseSearch(themeProg, 'Определение и формулы'));
                break
            case 'prog_2':
            process.once(databaseSearch(themeProg, 'Решение задач'));
                break
        }})
    }
    callbackData()
    switch (text) {
        case keyboardBtn.Home.functions:
            bot.sendMessage(chatId, 'Выбери тему:', functionsButtons)
            break
        case keyboardBtn.Home.radicals: 
        bot.sendMessage(chatId, 'Выбери тему:', radicalsButtons)
            break
        case keyboardBtn.Home.inequalities: 
        bot.sendMessage(chatId, 'Выбери тему:', inequalitiesButtons)
            break
        case keyboardBtn.Home.chance: 
        bot.sendMessage(chatId, 'Выбери тему:', chanceButtons)
            break
        case keyboardBtn.Home.combinatorics: 
        bot.sendMessage(chatId, 'Выбери тему:', combinatoricsButtons)
            break
        case keyboardBtn.Home.progression: 
        bot.sendMessage(chatId, 'Выбери тему:', progressionButtons)
            break
        case keyboardBtn.BackToHome:
            bot.sendMessage(chatId, 'Хочешь посмотреть что-то еще?', {
                reply_markup: { keyboard: keyboard.Home}
            })
            break
    }    
    bot.setMyCommands([
            { command: '/start', description: 'Начало работы' },
    ])
    if (text === '/start') {
        return bot.sendMessage(chatId, `Привет, ${userName}\nВыбери раздел:`, {
            reply_markup: { keyboard: keyboard.Home }      
        })
    }
})

