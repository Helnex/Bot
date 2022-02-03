const keyboardButtons = require('./keyboardButtons')

module.exports = {
    BackToHome: [[keyboardButtons.BackToHome]],
    Home: [
        [keyboardButtons.Home.functions, keyboardButtons.Home.radicals, keyboardButtons.Home.chance,  keyboardButtons.Home.progression],
        [keyboardButtons.Home.inequalities, keyboardButtons.Home.combinatorics,],
    ],
    Theme_funcions: [
        [keyboardButtons.Theme_funcions.func_1, keyboardButtons.Theme_funcions.func_2],
        [keyboardButtons.Theme_funcions.func_3, keyboardButtons.Theme_funcions.func_4],
        [keyboardButtons.BackToHome],
    ],
    Theme_radicals: [
        
    ],
    Theme_inequalities: [
        [keyboardButtons.Theme_inequalities.ineq_1, keyboardButtons.Theme_inequalities.ineq_2,],
        [keyboardButtons.BackToHome]
    ],
}