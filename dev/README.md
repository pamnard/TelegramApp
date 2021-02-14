# Dev version

Код как "proof of concept" задумки. Проработана только часть методов и типов данных

## Примеры

Получим тексты последних сообщений в чате
```javascript
function test() {
  var token = '1234567890:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
  var tAPI = new TelegramApp(token);
  var type = tAPI.Type();
  var updates = tAPI.getUpdates();
  for (var i = 0; i < updates.length; i++) {
    var message_text = type.Update(updates[i]).getMessage().getText();
    Logger.log(message_text);
  }
}
```
- - -
Отправим в чат сообщение с прикреплённой клавиатурой
```javascript
function test() {
  var token = '1234567890:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
  var tAPI = new TelegramApp(token);
  var type = tAPI.Type();
  var result = tAPI.sendMessage({
    chat_id: 12345678,
    text: 'Hello World!',
    reply_markup: type.ReplyKeyboardMarkup().create([[
      { text: 'Button 1', callback_data: 1 },
      { text: 'Button 2', callback_data: 2 },
      { text: 'Button 3', callback_data: 3 },
    ]])
  });
  Logger.log(result);
}
```
