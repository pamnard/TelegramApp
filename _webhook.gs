class Webhook { // Webhook
  constructor(token) {
    this.token = token;
  }
  setWebhook(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры setWebhook');
    }
    var response = setWebhook_(this.token, params);
    function setWebhook_(token, data) {
      if (data.url == undefined) {
        throw new Error('setWebhook - Не указан обязательный параметр "url"');
      }
      return telegramApi_(token, 'setWebhook', data);
    }
    return response;
  }
  deleteWebhook(params) {
    var response = deleteWebhook_(this.token, params);
    function deleteWebhook_(token, data) {
      if (data != null) {
        return telegramApi_(token, 'deleteWebhook', data);
      } else {
        return telegramApi_(token, 'deleteWebhook');
      }
    }
    return response;
  }
  getWebhookInfo() {
    var response = unbanChatMember_(this.token);
    function unbanChatMember_(token) {
      return telegramApi_(token, 'getWebhookInfo');
    }
    return response;
  }
}













