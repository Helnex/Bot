const keyboardButtons = require('./keyboardButtons')

module.exports = {
    BackToHome: [[keyboardButtons.BackToHome]],
    Home: [
        [keyboardButtons.Home.functions, keyboardButtons.Home.radicals, keyboardButtons.Home.sin,  keyboardButtons.Home.progression],
        [keyboardButtons.Home.inequalities, keyboardButtons.Home.statistics,],
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
    Theme_sin : [
        [keyboardButtons.Theme_sin.sin_1, keyboardButtons.Theme_sin.sin_2,keyboardButtons.Theme_sin.sin_3],
        [keyboardButtons.Theme_sin.sin_4,keyboardButtons.Theme_sin.sin_5,keyboardButtons.Theme_sin.sin_6,],
        [keyboardButtons.Theme_sin.sin_7,keyboardButtons.Theme_sin.sin_8,keyboardButtons.Theme_sin.sin_9,],
        [keyboardButtons.BackToHome]
    ],
    
}