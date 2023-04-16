# Dev version

Код как "proof of concept" задумки. Еще не все типы данных проработаны.

## Примеры

Получим тексты последних сообщений в чате
```javascript
const token = '154354351435:AFGAFGAFDGFGAFDGAFGAFGAFGAFGAFDG';
const myBot = new TelegramApp(token, true);
const type = myBot.Type();

function get_updates() {
  var updates = myBot.getUpdates();
  for (var i = 0; i < updates.length; i++) {
    var message_text = type.Update(updates[i]).message.text;
    Logger.log(message_text);
  }
}
```
- - -
Отправим в чат сообщение с прикреплённой клавиатурой
```javascript
const token = '154354351435:AFGAFGAFDGFGAFDGAFGAFGAFGAFGAFDG';
const myBot = new TelegramApp(token, true);
const type = myBot.Type();

function send_message() {
  myBot.sendMessage({
    chat_id: '123456,
    text: 'Ку-ку!',
    reply_markup: type.InlineKeyboardMarkup({
      inline_keyboard: [[
        type.InlineKeyboardButton({
          text: 'Да!',
          callback_data: 'yes'
        }),
        type.InlineKeyboardButton({
          text: 'Нет!',
          callback_data: 'no'
        })
      ]]
    })
  });
}
```
