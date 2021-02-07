# TelegramApp
Обёртка над Telegram Bot API для Google Apps Scripts

## Библиотека

```
1d-NtEFafrN7A3oXAeCCIqQNHBAQvfCaesr3JHZZc2ZO9RzP7E3_v5oEE
```

## Пример использования

Параметры метода заворачиваем в js-объект и передаём в метод в качестве единственного параметра. 

```javascript
var token = 'XXXXXXXX:XXXXXXXXXXXXXXXXXXXXXXX'; // токен от @BotFather
var tAPI = TelegramApp.auth(token);
var message = {
    chat_id: '11111111', // целевой чат
    text: 'Hello World!' // cообщение
}
tAPI.sendMessage(data);
```

Все названия методов и параметров аналогичны официальной документации - https://core.telegram.org/bots/api#available-methods
