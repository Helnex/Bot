module.exports = {
    KeyboardOptions:{
        reply_markup:  {
            inline_keyboard: [
                [
                    {text: 'Текст кнопки', callback_data: 'абоба'}
                ],
                [
                    {text: 'Вторая кнопка', callback_data: 'абоба'},
                    {text: 'Третья кнопка', callback_data: 'абоба'}
                ]
            ]
        }
    }
}