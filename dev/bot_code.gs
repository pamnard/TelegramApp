const token = '154354351435:AFGAFGAFDGFGAFDGAFGAFGAFGAFGAFDG';
const myBot = new TelegramApp(token, true);

function main(update) {
    // do something
    var user = myBot.Type().User();
}

function setTgWebhook(webhook_url) {
    myBot.setWebhook({
        url: webhook_url,
        max_connections: 1,
        drop_pending_updates: true
    });
}
