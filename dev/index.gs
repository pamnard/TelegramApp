class TelegramApp {
  constructor(token) {
    this.token = token;
    this.apiVersion = '5.0';
    this.Type = function type() {
      return new Type();
    };
    this.Utils = function utils() {
      return new Utils();
    };
    this.connect = function connect(token, method, data) {
      var url = `https://api.telegram.org/bot${token}/${method}`;
      var options = {
        muteHttpExceptions: true,
        method: 'POST',
        contentType: 'application/json'
      };
      if (data != null) {
        options.payload = JSON.stringify(data);
      }
      // Logger.log(options);
      // Logger.log(url);
      var response = UrlFetchApp.fetch(url, options);
      var json = JSON.parse(response);
      if (!!json.result) {
        return json.result;
      } else {
        Logger.log(response);
        return
      }
    };
  }
  setWebhook(params) {
    if (!!params) {
      return this.connect(this.token, 'setWebhook', params);
    } else {
      if (ScriptApp.getService().isEnabled()) {
        var hookUrl = ScriptApp.getService().getUrl().replace('/dev', '/exec') + '?from=tgbot';
        return this.connect(this.token, 'setWebhook', { url: hookUrl });
      } else {
        throw new Error('Set Webhook url or deploy your script as web app to enable default url')
      }
    }
  }
  deleteWebhook(params) {
    return this.connect(this.token, 'deleteWebhook', params);
  }
  getWebhookInfo() {
    return this.connect(this.token, 'getWebhookInfo');
  }
  sendSticker(params) {
    return this.connect(this.token, 'sendSticker', params);
  }
  getStickerSet(params) {
    return this.connect(this.token, 'getStickerSet', params);
  }
  uploadStickerFile(params) {
    return this.connect(this.token, 'uploadStickerFile', params);
  }
  createNewStickerSet(params) {
    return this.connect(this.token, 'createNewStickerSet', params);
  }
  addStickerToSet(params) {
    return this.connect(this.token, 'addStickerToSet', params);
  }
  setPositionInSet(params) {
    return this.connect(this.token, 'setStickerPositionInSet', params);
  }
  setSetThumb(params) {
    return this.connect(this.token, 'setStickerSetThumb', params);
  }
  deleteFromSet(params) {
    return this.connect(this.token, 'deleteStickerFromSet', params);
  }
  kickChatMember(params) {
    return this.connect(this.token, 'kickChatMember', params);
  }
  unbanChatMember(params) {
    return this.connect(this.token, 'unbanChatMember', params);
  }
  restrictChatMember(params) {
    return this.connect(this.token, 'restrictChatMember', params);
  }
  promoteChatMember(params) {
    return this.connect(this.token, 'promoteChatMember', params);
  }
  getChatMember(params) {
    return this.connect(this.token, 'getChatMember', params);
  }
  sendMessage(params) {
    return this.connect(this.token, 'sendMessage', params);
  }
  forwardMessage(params) {
    return this.connect(this.token, 'forwardMessage', params);
  }
  copyMessage(params) {
    return this.connect(this.token, 'copyMessage', params);
  }
  editMessageLiveLocation(params) {
    return this.connect(this.token, 'editMessageLiveLocation', params);
  }
  editMessageLiveLocation(params) {
    return this.connect(this.token, 'editMessageLiveLocation', params);
  }
  editMessageText(params) {
    return this.connect(this.token, 'editMessageText', params);
  }
  editMessageCaption(params) {
    return this.connect(this.token, 'editMessageCaption', params);
  }
  editMessageMedia(params) {
    return this.connect(this.token, 'editMessageMedia', params);
  }
  editMessageReplyMarkup(params) {
    return this.connect(this.token, 'editMessageReplyMarkup', params);
  }
  deleteMessage(params) {
    return this.connect(this.token, 'deleteMessage', params);
  }
  pinChatMessage(params) {
    return this.connect(this.token, 'pinChatMessage', params);
  }
  unpinChatMessage(params) {
    return this.connect(this.token, 'unpinChatMessage', params);
  }
  unpinAllChatMessages(params) {
    return this.connect(this.token, 'unpinAllChatMessages', params);
  }
  sendChatAction(params) {
    return this.connect(this.token, 'sendChatAction', params);
  }
  sendPhoto(params) {
    return this.connect(this.token, 'sendPhoto', params);
  }
  sendAudio(params) {
    return this.connect(this.token, 'sendAudio', params);
  }
  sendDocument(params) {
    return this.connect(this.token, 'sendDocument', params);
  }
  sendVideo(params) {
    return this.connect(this.token, 'sendVideo', params);
  }
  sendAnimation(params) {
    return this.connect(this.token, 'sendAnimation', params);
  }
  sendVoice(params) {
    return this.connect(this.token, 'sendVoice', params);
  }
  sendVideoNote(params) {
    return this.connect(this.token, 'sendVideoNote', params);
  }
  sendMediaGroup(params) {
    return this.connect(this.token, 'sendMediaGroup', params);
  }
  sendLocation(params) {
    return this.connect(this.token, 'sendLocation', params);
  }
  sendVenue(params) {
    return this.connect(this.token, 'sendVenue', params);
  }
  sendContact(params) {
    return this.connect(this.token, 'sendContact', params);
  }
  sendPoll(params) {
    return this.connect(this.token, 'sendPoll', params);
  }
  stopPoll(params) {
    return this.connect(this.token, 'stopPoll', params);
  }
  sendDice(params) {
    return this.connect(this.token, 'sendDice', params);
  }
  setChatAdministratorCustomTitle(params) {
    return this.connect(this.token, 'setChatAdministratorCustomTitle', params);
  }
  setChatPermissions(params) {
    return this.connect(this.token, 'setChatPermissions', params);
  }
  exportChatInviteLink(params) {
    return this.connect(this.token, 'exportChatInviteLink', params);
  }
  setChatPhoto(params) {
    return this.connect(this.token, 'setChatPhoto', params);
  }
  deleteChatPhoto(params) {
    return this.connect(this.token, 'deleteChatPhoto', params);
  }
  setChatTitle(params) {
    return this.connect(this.token, 'setChatTitle', params);
  }
  setChatDescription(params) {
    return this.connect(this.token, 'setChatDescription', params);
  }
  leaveChat(params) {
    return this.connect(this.token, 'leaveChat', params);
  }
  getChat(params) {
    return this.connect(this.token, 'getChat', params);
  }
  getChatAdministrators(params) {
    return this.connect(this.token, 'getChatAdministrators', params);
  }
  getChatMembersCount(params) {
    return this.connect(this.token, 'getChatMembersCount', params);
  }
  setStickerSet(params) {
    return this.connect(this.token, 'setChatStickerSet', params);
  }
  deleteChatStickerSet(params) {
    return this.connect(this.token, 'deleteChatStickerSet', params);
  }
  getUserProfilePhotos(params) {
    return this.connect(this.token, 'getUserProfilePhotos', params);
  }
  getUpdates() {
    return this.connect(this.token, 'getUpdates');
  }
  getFile(params) {
    return this.connect(this.token, 'getFile', params);
  }
  answerCallbackQuery(params) {
    return this.connect(this.token, 'answerCallbackQuery', params);
  }
  setMyCommands(params) {
    return this.connect(this.token, 'setMyCommands', params);
  }
  getMyCommands() {
    return this.connect(this.token, 'getMyCommands');
  }
  getMe() {
    return this.connect(this.token, 'getMe');
  }
  logOut() {
    var token = this.token;
    return this.connect(this.token, 'logOut');
  }
  close() {
    return this.connect(this.token, 'close');
  }
}
