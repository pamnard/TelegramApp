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

    getUpdates() {
        return this.apiCall(this.token, 'getUpdates');
    }
    setWebhook(params) {
        if (params) {
            return this.apiCall(this.token, 'setWebhook', params);
        } else {
            if (ScriptApp.getService().isEnabled()) {
                const hookUrl = ScriptApp.getService().getUrl().replace('/dev', '/exec');
                return this.apiCall(this.token, 'setWebhook', {
                    url: hookUrl,
                    max_connections: 1,
                    drop_pending_updates: true
                });
            } else {
                throw new Error('Set Webhook url or deploy your script as web app to enable default url');
            }
        }
    }
    deleteWebhook(params) {
        return this.apiCall(this.token, 'deleteWebhook', params);
    }
    getWebhookInfo() {
        return this.Type().WebhookInfo(
            this.apiCall(this.token, 'getWebhookInfo')
        );
    }

    // Available methods

    getMe() {
        return this.apiCall(this.token, 'getMe');
    }
    logOut() {
        return this.apiCall(this.token, 'logOut');
    }
    close() {
        return this.apiCall(this.token, 'close');
    }
    sendMessage(params) {
        return this.Type().Message(
            this.apiCall(this.token, 'sendMessage', params)
        );
    }
    forwardMessage(params) {
        return this.Type().Message(
            this.apiCall(this.token, 'forwardMessage', params)
        );
    }
    copyMessage(params) {
        return this.Type().MessageId(
            this.apiCall(this.token, 'copyMessage', params)
        );
    }
    sendPhoto(params) {
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
        return this.Type().Message(
            this.apiCall(this.token, 'sendVoice', params)
        );
    }
    sendVideoNote(params) {
        return this.Type().Message(
            this.apiCall(this.token, 'sendVideoNote', params)
        );
    }
    sendMediaGroup(params) {
        return this.apiCall(this.token, 'sendMediaGroup', params);
    }
    sendLocation(params) {
        return this.Type().Message(
            this.apiCall(this.token, 'sendLocation', params)
        );
    }
    sendVenue(params) {
        return this.Type().Message(
            this.apiCall(this.token, 'sendVenue', params)
        );
    }
    sendContact(params) {
        return this.Type().Message(
            this.apiCall(this.token, 'sendContact', params)
        );
    }
    sendPoll(params) {
        return this.apiCall(this.token, 'sendPoll', params);
    }
    sendDice(params) {
        return this.apiCall(this.token, 'sendDice', params);
    }
    sendChatAction(params) {
        return this.apiCall(this.token, 'sendChatAction', params);
    }
    getUserProfilePhotos(params) {
        return this.apiCall(this.token, 'getUserProfilePhotos', params);
    }
    getFile(params) {
        return this.apiCall(this.token, 'getFile', params);
    }
    banChatMember(params) {
        return this.apiCall(this.token, 'banChatMember', params);
    }
    unbanChatMember(params) {
        return this.apiCall(this.token, 'unbanChatMember', params);
    }
    restrictChatMember(params) {
        return this.apiCall(this.token, 'restrictChatMember', params);
    }
    promoteChatMember(params) {
        return this.apiCall(this.token, 'promoteChatMember', params);
    }
    setChatAdministratorCustomTitle(params) {
        return this.apiCall(this.token, 'setChatAdministratorCustomTitle', params);
    }
    banChatSenderChat(params) {
        return this.apiCall(this.token, 'banChatSenderChat', params);
    }
    unbanChatSenderChat(params) {
        return this.apiCall(this.token, 'unbanChatSenderChat', params);
    }
    setChatPermissions(params) {
        return this.apiCall(this.token, 'setChatPermissions', params);
    }
    exportChatInviteLink(params) {
        return this.apiCall(this.token, 'exportChatInviteLink', params);
    }
    createChatInviteLink(params) {
        return this.apiCall(this.token, 'createChatInviteLink', params);
    }
    editChatInviteLink(params) {
        return this.apiCall(this.token, 'editChatInviteLink', params);
    }
    revokeChatInviteLink(params) {
        return this.apiCall(this.token, 'revokeChatInviteLink', params);
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
        return this.apiCall(this.token, 'getChat', params);
    }
    getChatAdministrators(params) {
        return this.apiCall(this.token, 'getChatAdministrators', params);
    }
    getChatMemberCount(params) {
        return this.apiCall(this.token, 'getChatAdministrators', params);
    }
    getChatMember(params) {
        return this.apiCall(this.token, 'getChatMember', params);
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
        return this.apiCall(this.token, 'createForumTopic', params);
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
        return this.apiCall(this.token, 'getMyDescription', params);
    }
    setMyShortDescription(params) {
        return this.apiCall(this.token, 'setMyShortDescription', params);
    }
    getMyShortDescription(params) {
        return this.apiCall(this.token, 'getMyShortDescription', params);
    }
    setChatMenuButton(params) {
        return this.apiCall(this.token, 'setChatMenuButton', params);
    }
    getChatMenuButton(params) {
        return this.apiCall(this.token, 'getChatMenuButton', params);
    }
    setMyDefaultAdministratorRights(params) {
        return this.apiCall(this.token, 'setMyDefaultAdministratorRights', params);
    }
    getMyDefaultAdministratorRights(params) {
        return this.apiCall(this.token, 'getMyDefaultAdministratorRights', params);
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
        return this.apiCall(this.token, 'setPassportDataErrors', params);
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
