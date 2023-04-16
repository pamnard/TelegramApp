const token = '154354351435:AFGAFGAFDGFGAFDGAFGAFGAFGAFGAFDG';
const myBot = new TelegramApp(token, true);
const type = myBot.Type();

function main(update) {
  // do something
  var message = type.Message(
    type.Update(update).message
  );

  myBot.sendMessage({
    chat_id: message.chat.id,
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

function setTgWebhook() {
  myBot.setWebhook({
    url: 'webhook_url',
    max_connections: 1,
    drop_pending_updates: true
  });
}
