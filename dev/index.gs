/**
 * A class representing the Telegram API wrapper.
 * @class
 * @param {string} token - The authentication token for the Telegram bot.
 * @param {boolean} [logging=false] - Whether or not to log API responses.
 * @property {string} token - The authentication token for the Telegram bot.
 * @property {boolean} logging - Whether or not to log API responses.
 * @property {string} apiVersion - The version of the Telegram API to use.
 * @property {function} Type - A factory function for creating new Type objects.
 * @property {function} Utils - A factory function for creating new Utils objects.
 * @property {function} apiCall - A function for making API requests to the Telegram API.
 */

class TelegramApp {
  constructor(token, logging) {
    this.token = token;
    this.logging = logging || false;
    this.apiVersion = '6.6';
    this.Type = () => new Type();
    this.Utils = () => new Utils();

    /**
     * Makes an API request to the Telegram API.
     * @function
     * @param {string} token - The authentication token for the Telegram bot.
     * @param {string} method - The Telegram API method to call.
     * @param {object} [data] - The data to include in the API request.
     * @returns {object} The result of the API request, if successful.
     */

    this.apiCall = (token, method, data) => {
      const url = `https://api.telegram.org/bot${token}/${method}`;
      const options = {
        muteHttpExceptions: true,
        method: 'POST',
        contentType: 'application/json',
      };
      if (data != null) {
        options.payload = JSON.stringify(data);
      }
      const response = UrlFetchApp.fetch(url, options);
      if (this.logging) {
        Logger.log(response);
      }
      const json = JSON.parse(response);
      if (json.result) {
        return json.result;
      } else {
        Logger.log(response);
        return;
      }
    };
  }

  // Getting updates

  /**
   * Retrieves updates using the Telegram API.
   * @return {Object[]} An array of update objects.
   */
  getUpdates() {
    return this.apiCall(this.token, 'getUpdates').map(function (element) {
      return this.Type().Update(element);
    });
  }

  /**
   * Sets a new incoming webhook for the Telegram Bot API.
   * 
   * @param {Object} [params] - The parameters for the new incoming webhook.
   * @param {string} [params.url] - HTTPS url to send updates to. Use an empty string to remove webhook integration.
   * @param {Buffer} [params.certificate] - Public key certificate (PEM format) for the webhook server.
   * @param {string} [params.ip_address] - The fixed IP address which should be used to send webhook requests instead of the IP address resolved through DNS.
   * @param {number} [params.max_connections] - Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40.
   * @param {string[]} [params.allowed_updates] - List the types of updates you want your bot to receive.
   * @param {boolean} [params.drop_pending_updates] - Pass true to drop all pending updates.
   * @param {string} [params.secret_token] - A secret token for the webhook URL has been specified, we will use this token to generate a unique URL for each user visiting the bot's webhook.
   * 
   * @returns {Object} - Object representing the result of the API call.
   * @throws {Error} - If `params` is not provided.
   */
  setWebhook(params = {
    url,
    certificate,
    ip_address,
    max_connections,
    allowed_updates,
    drop_pending_updates,
    secret_token
  }) {
    if (params) {
      return this.apiCall(this.token, 'setWebhook', params);
    } else {
      throw new Error('Set setWebhook params');
    }
  }

  /**
   * Deletes the current webhook.
   *
   * @param {Object} [params] - The parameters to pass to the API request.
   * @returns {boolean} - Returns True on success.
   * @throws {Error} - If the `params` argument is not provided.
   */
  deleteWebhook(params = {
    drop_pending_updates
  }) {
    if (params) {
      return this.apiCall(this.token, 'deleteWebhook', params);
    } else {
      throw new Error('Set deleteWebhook params');
    }
  }

  /**
   * Retrieves information about the current webhook.
   *
   * @returns {Object} The webhook information.
   */
  getWebhookInfo() {
    return this.Type().WebhookInfo(
      this.apiCall(this.token, 'getWebhookInfo')
    );
  }

  // Available methods

  /**
   * Retrieves information about the bot.
   * @returns {User} Returns basic information about the bot in form of a User object.
   */
  getMe() {
    return this.Type().User(
      this.apiCall(this.token, 'getMe')
    );
  }

  /**
   * Logs the bot out by calling the API's `logOut` method.
   * @returns {boolean} Returns True on success.
   */
  logOut() {
    return this.apiCall(this.token, 'logOut');
  }

  /**
   * Use this method to close the bot instance before moving it from one local server to another. 
   * @returns {boolean} Returns True on success.
   */
  close() {
    return this.apiCall(this.token, 'close');
  }

  /**
   * Sends a message with the given parameters to a chat.
   *
   * @param {Object} [params={}] - An object containing the parameters for the message.
   * @param {number} [params.chat_id] - The ID of the chat where the message should be sent.
   * @param {number} [params.message_thread_id] - The ID of the message thread.
   * @param {string} [params.text] - The text of the message.
   * @param {string} [params.parse_mode] - The mode for parsing entities in the message text.
   * @param {Object[]} [params.entities] - An array of message entities.
   * @param {boolean} [params.disable_web_page_preview] - Whether to disable web page previews for links in the message.
   * @param {boolean} [params.disable_notification] - Whether to disable notifications for the message.
   * @param {boolean} [params.protect_content] - Whether to protect the content of the message.
   * @param {number} [params.reply_to_message_id] - The ID of the message being replied to.
   * @param {boolean} [params.allow_sending_without_reply] - Whether to allow sending the message without a reply.
   * @param {Object} [params.reply_markup] - The reply markup for the message.
   * @returns {Object} A message object.
   */
  sendMessage(params = {
    chat_id,
    message_thread_id,
    text,
    parse_mode,
    entities,
    disable_web_page_preview,
    disable_notification,
    protect_content,
    reply_to_message_id,
    allow_sending_without_reply,
    reply_markup
  }) {
    return this.Type().Message(
      this.apiCall(this.token, 'sendMessage', params)
    );
  }

  /**
   * Forward a message from one chat to another.
   *
   * @param {Object} params - Parameters for forwarding the message.
   * @param {number} params.chat_id - The ID of the chat to forward the message to.
   * @param {number} params.message_thread_id - The ID of the message thread to forward.
   * @param {number} params.from_chat_id - The ID of the chat the message is being forwarded from.
   * @param {boolean} [params.disable_notification=false] - Whether to disable notifications for the forwarded message.
   * @param {boolean} [params.protect_content=false] - Whether to protect the forwarded message's content from being forwarded again.
   * @param {number} [params.message_id] - The ID of the message to forward, if known.
   *
   * @returns {Object} - The forwarded message.
   */
  forwardMessage(params = {
    chat_id,
    message_thread_id,
    from_chat_id,
    disable_notification,
    protect_content,
    message_id
  }) {
    return this.Type().Message(
      this.apiCall(this.token, 'forwardMessage', params)
    );
  }

  /**
   * Copies a message to a different chat or channel.
   *
   * @param {Object} params - The parameters for the message copy operation.
   * @param {number} params.chat_id - The ID of the chat where the message will be copied to.
   * @param {number} params.message_thread_id - The ID of the thread where the message will be copied to.
   * @param {number} params.from_chat_id - The ID of the chat where the original message was sent.
   * @param {number} params.message_id - The ID of the original message to be copied.
   * @param {string} params.caption - The caption to be sent with the copied message.
   * @param {string} params.parse_mode - The parsing mode for the caption.
   * @param {Array} params.caption_entities - An array of special entities in the caption, such as usernames or hashtags.
   * @param {boolean} params.disable_notification - Whether to disable notifications for the copied message.
   * @param {boolean} params.protect_content - Whether to protect the copied content with a password.
   * @param {number} params.reply_to_message_id - The ID of the message to reply to with the copied message.
   * @param {boolean} params.allow_sending_without_reply - Whether to allow sending the copied message without a reply.
   * @param {Object} params.reply_markup - The reply markup for the copied message.
   *
   * @returns {Object} - The message ID of the copied message.
   */
  copyMessage(params = {
    chat_id,
    message_thread_id,
    from_chat_id,
    message_id,
    caption,
    parse_mode,
    caption_entities,
    disable_notification,
    protect_content,
    reply_to_message_id,
    allow_sending_without_reply,
    reply_markup
  }) {
    return this.Type().MessageId(
      this.apiCall(this.token, 'copyMessage', params)
    );
  }

  /**
   * Sends a photo message to a chat.
   *
   * @param {Object} [params] - The parameters object.
   * @param {number|string} [params.chat_id] - The chat ID where the photo will be sent.
   * @param {number} [params.message_thread_id] - The ID of the message thread.
   * @param {string|ReadableStream|Buffer} [params.photo] - The photo to send. Can be a file ID, a ReadableStream or a Buffer.
   * @param {string} [params.caption] - The caption for the photo.
   * @param {string} [params.parse_mode] - The parse mode to use for the caption.
   * @param {Object[]} [params.caption_entities] - List of special entities that appear in the caption.
   * @param {boolean} [params.has_spoiler] - Whether the photo contains a spoiler.
   * @param {boolean} [params.disable_notification] - Whether to disable the notification for the message.
   * @param {boolean} [params.protect_content] - Whether the content should be protected.
   * @param {number} [params.reply_to_message_id] - The ID of the message to reply to.
   * @param {boolean} [params.allow_sending_without_reply] - Whether to allow sending the message without a reply.
   * @param {Object} [params.reply_markup] - The reply markup for the message.
   * @returns {Object} - On success, the sent Message is returned.
   */
  sendPhoto(params = {
    chat_id,
    message_thread_id,
    photo,
    caption,
    parse_mode,
    caption_entities,
    has_spoiler,
    disable_notification,
    protect_content,
    reply_to_message_id,
    allow_sending_without_reply,
    reply_markup
  }) {
    return this.Type().Message(
      this.apiCall(this.token, 'sendPhoto', params)
    );
  }

  sendAudio(params) {
    return this.Type().Message(
      this.apiCall(this.token, 'sendAudio', params)
    );
  }

  sendDocument(params) {
    return this.Type().Message(
      this.apiCall(this.token, 'sendDocument', params)
    );
  }

  sendVideo(params) {
    return this.Type().Message(
      this.apiCall(this.token, 'sendVideo', params)
    );
  }

  sendAnimation(params) {
    return this.Type().Message(
      this.apiCall(this.token, 'sendAnimation', params)
    );
  }

  sendVoice(params) {
    var response = this.apiCall(this.token, 'sendVoice', params);
    return this.Type().Message(response);
  }

  sendVideoNote(params) {
    var response = this.apiCall(this.token, 'sendVideoNote', params);
    return this.Type().Message(response);
  }

  sendMediaGroup(params) {
    var response = this.apiCall(this.token, 'sendMediaGroup', params);
    return this.Type().Message(response);
  }

  sendLocation(params) {
    var response = this.apiCall(this.token, 'sendLocation', params);
    return this.Type().Message(response);
  }

  sendVenue(params) {
    var response = this.apiCall(this.token, 'sendVenue', params);
    return this.Type().Message(response);
  }

  sendContact(params) {
    var response = this.apiCall(this.token, 'sendContact', params);
    return this.Type().Message(response);
  }

  sendPoll(params) {
    var response = this.apiCall(this.token, 'sendPoll', params);
    return this.Type().Message(response);
  }
  sendDice(params) {
    var response = this.apiCall(this.token, 'sendDice', params);
    return this.Type().Message(response);
  }
  sendChatAction(params) {
    var response = this.apiCall(this.token, 'sendChatAction', params);
    return response;
  }
  getUserProfilePhotos(params) {
    var response = this.apiCall(this.token, 'getUserProfilePhotos', params);
    return this.Type().UserProfilePhotos(response);
  }

  getFile(params) {
    var response = this.apiCall(this.token, 'getFile', params);
    return this.Type().File(response);
  }

  banChatMember(params) {
    var response = this.apiCall(this.token, 'banChatMember', params);
    return response;
  }

  unbanChatMember(params) {
    var response = this.apiCall(this.token, 'unbanChatMember', params);
    return response;
  }

  restrictChatMember(params) {
    var response = this.apiCall(this.token, 'restrictChatMember', params);
    return response;
  }

  promoteChatMember(params) {
    var response = this.apiCall(this.token, 'promoteChatMember', params);
    return response;
  }

  setChatAdministratorCustomTitle(params) {
    var response = this.apiCall(this.token, 'setChatAdministratorCustomTitle', params);
    return response;
  }

  banChatSenderChat(params) {
    var response = this.apiCall(this.token, 'banChatSenderChat', params);
    return response;
  }

  unbanChatSenderChat(params) {
    var response = this.apiCall(this.token, 'unbanChatSenderChat', params);
    return response;
  }

  setChatPermissions(params) {
    var response = this.apiCall(this.token, 'setChatPermissions', params);
    return response;
  }

  exportChatInviteLink(params) {
    var response = this.apiCall(this.token, 'exportChatInviteLink', params);
    return response;
  }

  createChatInviteLink(params) {
    return this.Type().ChatInviteLink(
      this.apiCall(this.token, 'createChatInviteLink', params)
    );
  }
  editChatInviteLink(params) {
    return this.Type().ChatInviteLink(
      this.apiCall(this.token, 'editChatInviteLink', params)
    );
  }
  revokeChatInviteLink(params) {
    return this.Type().ChatInviteLink(
      this.apiCall(this.token, 'revokeChatInviteLink', params)
    );
  }
  approveChatJoinRequest(params) {
    return this.apiCall(this.token, 'approveChatJoinRequest', params);
  }
  declineChatJoinRequest(params) {
    return this.apiCall(this.token, 'declineChatJoinRequest', params);
  }
  setChatPhoto(params) {
    return this.apiCall(this.token, 'setChatPhoto', params);
  }
  deleteChatPhoto(params) {
    return this.apiCall(this.token, 'deleteChatPhoto', params);
  }
  setChatTitle(params) {
    return this.apiCall(this.token, 'setChatTitle', params);
  }
  setChatDescription(params) {
    return this.apiCall(this.token, 'setChatDescription', params);
  }
  pinChatMessage(params) {
    return this.apiCall(this.token, 'pinChatMessage', params);
  }
  unpinChatMessage(params) {
    return this.apiCall(this.token, 'unpinChatMessage', params);
  }
  unpinAllChatMessages(params) {
    return this.apiCall(this.token, 'unpinAllChatMessages', params);
  }
  leaveChat(params) {
    return this.apiCall(this.token, 'leaveChat', params);
  }
  getChat(params) {
    return this.Type().Chat(
      this.apiCall(this.token, 'getChat', params)
    );
  }
  getChatAdministrators(params) {
    return this.apiCall(this.token, 'getChatAdministrators', params);
  }
  getChatMemberCount(params) {
    return this.apiCall(this.token, 'getChatAdministrators', params);
  }
  getChatMember(params) {
    return this.Type().ChatMember(
      this.apiCall(this.token, 'getChatMember', params)
    );
  }
  setChatStickerSet(params) {
    return this.apiCall(this.token, 'setChatStickerSet', params);
  }
  deleteChatStickerSet(params) {
    return this.apiCall(this.token, 'deleteChatStickerSet', params);
  }
  getForumTopicIconStickers(params) {
    return this.apiCall(this.token, 'getForumTopicIconStickers', params);
  }
  createForumTopic(params) {
    return this.Type().ForumTopic(
      this.apiCall(this.token, 'createForumTopic', params)
    );
  }
  editForumTopic(params) {
    return this.apiCall(this.token, 'editForumTopic', params);
  }
  closeForumTopic(params) {
    return this.apiCall(this.token, 'closeForumTopic', params);
  }
  reopenForumTopic(params) {
    return this.apiCall(this.token, 'reopenForumTopic', params);
  }
  deleteForumTopic(params) {
    return this.apiCall(this.token, 'deleteForumTopic', params);
  }
  unpinAllForumTopicMessages(params) {
    return this.apiCall(this.token, 'unpinAllForumTopicMessages', params);
  }
  editGeneralForumTopic(params) {
    return this.apiCall(this.token, 'editGeneralForumTopic', params);
  }
  closeGeneralForumTopic(params) {
    return this.apiCall(this.token, 'closeGeneralForumTopic', params);
  }
  reopenGeneralForumTopic(params) {
    return this.apiCall(this.token, 'reopenGeneralForumTopic', params);
  }
  hideGeneralForumTopic(params) {
    return this.apiCall(this.token, 'hideGeneralForumTopic', params);
  }
  unhideGeneralForumTopic(params) {
    return this.apiCall(this.token, 'unhideGeneralForumTopic', params);
  }
  answerCallbackQuery(params) {
    return this.apiCall(this.token, 'answerCallbackQuery', params);
  }
  setMyCommands(params) {
    if (!!params) {
      return this.apiCall(this.token, 'setMyCommands', params);
    } else {
      throw new Error('Empty setMyCommands params.')
    }
  }
  deleteMyCommands(params) {
    if (!!params) {
      return this.apiCall(this.token, 'deleteMyCommands', params);
    } else {
      throw new Error('Empty deleteMyCommands params.')
    }
  }
  getMyCommands(params) {
    return this.apiCall(this.token, 'getMyCommands', params);
  }
  setMyDescription(params) {
    return this.apiCall(this.token, 'setMyDescription', params);
  }
  getMyDescription(params) {
    return this.Type().BotDescription(
      this.apiCall(this.token, 'getMyDescription', params)
    );
  }
  setMyShortDescription(params) {
    return this.apiCall(this.token, 'setMyShortDescription', params);
  }
  getMyShortDescription(params) {
    return this.Type().BotShortDescription(
      this.apiCall(this.token, 'getMyShortDescription', params)
    );
  }
  setChatMenuButton(params) {
    return this.apiCall(this.token, 'setChatMenuButton', params);
  }
  getChatMenuButton(params) {
    return this.Type().MenuButton(
      this.apiCall(this.token, 'getChatMenuButton', params)
    );
  }
  setMyDefaultAdministratorRights(params) {
    return this.apiCall(this.token, 'setMyDefaultAdministratorRights', params);
  }
  getMyDefaultAdministratorRights(params) {
    return this.Type().ChatAdministratorRights(
      this.apiCall(this.token, 'getMyDefaultAdministratorRights', params)
    );
  }

  // Updating messages

  editMessageText(params) {
    return this.apiCall(this.token, 'editMessageText', params);
  }
  editMessageCaption(params) {
    return this.apiCall(this.token, 'editMessageCaption', params);
  }
  editMessageMedia(params) {
    return this.apiCall(this.token, 'editMessageMedia', params);
  }
  editMessageLiveLocation(params) {
    return this.apiCall(this.token, 'editMessageLiveLocation', params);
  }
  stopMessageLiveLocation(params) {
    return this.apiCall(this.token, 'stopMessageLiveLocation', params);
  }
  editMessageReplyMarkup(params) {
    return this.apiCall(this.token, 'editMessageReplyMarkup', params);
  }
  stopPoll(params) {
    return this.apiCall(this.token, 'stopPoll', params);
  }
  deleteMessage(params) {
    return this.apiCall(this.token, 'deleteMessage', params);
  }

  // Stickers

  sendSticker(params) {
    return this.apiCall(this.token, 'sendSticker', params);
  }
  getStickerSet(params) {
    return this.apiCall(this.token, 'getStickerSet', params);
  }
  getCustomEmojiStickers(params) {
    return this.apiCall(this.token, 'getCustomEmojiStickers', params);
  }
  uploadStickerFile(params) {
    return this.apiCall(this.token, 'uploadStickerFile', params);
  }
  createNewStickerSet(params) {
    return this.apiCall(this.token, 'createNewStickerSet', params);
  }
  addStickerToSet(params) {
    return this.apiCall(this.token, 'addStickerToSet', params);
  }
  setStickerPositionInSet(params) {
    return this.apiCall(this.token, 'setStickerPositionInSet', params);
  }
  deleteStickerFromSet(params) {
    return this.apiCall(this.token, 'deleteStickerFromSet', params);
  }
  setStickerEmojiList(params) {
    return this.apiCall(this.token, 'setStickerEmojiList', params);
  }
  setStickerKeywords(params) {
    return this.apiCall(this.token, 'setStickerKeywords', params);
  }
  setStickerMaskPosition(params) {
    return this.apiCall(this.token, 'setStickerMaskPosition', params);
  }
  setStickerSetTitle(params) {
    return this.apiCall(this.token, 'setStickerSetTitle', params);
  }
  setStickerSetThumbnail(params) {
    return this.apiCall(this.token, 'setStickerSetThumbnail', params);
  }
  setCustomEmojiStickerSetThumbnail(params) {
    return this.apiCall(this.token, 'setCustomEmojiStickerSetThumbnail', params);
  }
  deleteStickerSet(params) {
    return this.apiCall(this.token, 'deleteStickerSet', params);
  }

  // Inline mode

  answerInlineQuery(params) {
    return this.apiCall(this.token, 'answerInlineQuery', params);
  }
  answerWebAppQuery(params) {
    return this.apiCall(this.token, 'answerWebAppQuery', params);
  }

  // Payments

  sendInvoice(params) {
    return this.apiCall(this.token, 'sendInvoice', params);
  }
  createInvoiceLink(params) {
    return this.apiCall(this.token, 'createInvoiceLink', params);
  }
  answerShippingQuery(params) {
    return this.apiCall(this.token, 'answerShippingQuery', params);
  }
  answerPreCheckoutQuery(params) {
    return this.apiCall(this.token, 'answerPreCheckoutQuery', params);
  }

  // Telegram Passport

  setPassportDataErrors(params) {
    return this.apiCall(this.token, 'setPassportDataErrors', params).map(function (element) {
      return this.Type().PassportElementError(element)
    });
  }

  // Games

  sendGame(params) {
    return this.apiCall(this.token, 'sendGame', params);
  }
  setGameScore(params) {
    return this.apiCall(this.token, 'setGameScore', params);
  }
  getGameHighScores(params) {
    return this.apiCall(this.token, 'getGameHighScores', params);
  }
}
