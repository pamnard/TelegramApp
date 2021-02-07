var _ = Underscore.load();

/**
 * Create an Telegram API Client 
 * @param {Object} token API Token
 * @return {TelegramApp} return an Telegram API Client 
 */
function auth(token) {
  if (!!token) {
    return new TelegramApp(token);
  } else {
    throw new Error('.auth - Не указан token для подключения бота.');
  }
}

/**
 * Use this method to send text messages. On success, the sent Message is returned.
 * @param {Object} params sendMessage peremeters as object
 * @return {Object} api result
 */
function sendMessage(params) { // https://core.telegram.org/bots/api#sendmessage
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to forward messages of any kind. On success, the sent Message is returned.
 * @param {Object} params forwardMessage peremeters as object
 * @return {Object} api result
 */
function forwardMessage(params) { // https://core.telegram.org/bots/api#forwardmessage
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to copy messages of any kind. The method is analogous to the method forwardMessages, but the copied message doesn't have a link to the original message. Returns the MessageId of the sent message on success.
 * @param {Object} params copyMessage peremeters as object
 * @return {Object} api result
 */
function copyMessage(params) { // https://core.telegram.org/bots/api#copymessage
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
 * @param {Object} params editMessageLiveLocation peremeters as object
 * @return {Object} api result
 */
function editMessageLiveLocation(params) { // https://core.telegram.org/bots/api#editmessagelivelocation
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to stop updating a live location message before live_period expires. On success, if the message was sent by the bot, the sent Message is returned, otherwise True is returned.
 * @param {Object} params stopMessageLiveLocation peremeters as object
 * @return {Object} api result
 */
function stopMessageLiveLocation(params) { // https://core.telegram.org/bots/api#stopmessagelivelocation
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns True on success.
 * @param {Object} params sendChatAction peremeters as object
 * @return {Object} api result
 */
function sendChatAction(params) { // https://core.telegram.org/bots/api#sendchataction
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to kick a user from a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 * @param {Object} params kickChatMember peremeters as object
 * @return {Object} api result
 */
function kickChatMember(params) { // https://core.telegram.org/bots/api#kickchatmember
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to unban a previously kicked user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned. Returns True on success.
 * @param {Object} params unbanChatMember peremeters as object
 * @return {Object} api result
 */
function unbanChatMember(params) { // https://core.telegram.org/bots/api#unbanchatmember
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate admin rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.
 * @param {Object} params restrictChatMember peremeters as object
 * @return {Object} api result
 */
function restrictChatMember(params) { // https://core.telegram.org/bots/api#restrictchatmember
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Pass False for all boolean parameters to demote a user. Returns True on success.
 * @param {Object} params promoteChatMember peremeters as object
 * @return {Object} api result
 */
function promoteChatMember(params) { // https://core.telegram.org/bots/api#restrictchatmember
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.
 * @param {Object} params setChatAdministratorCustomTitle peremeters as object
 * @return {Object} api result
 */
function setChatAdministratorCustomTitle(params) { // https://core.telegram.org/bots/api#setchatadministratorcustomtitle
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members admin rights. Returns True on success.
 * @param {Object} params setChatPermissions peremeters as object
 * @return {Object} api result
 */
function setChatPermissions(params) { // https://core.telegram.org/bots/api#setchatpermissions
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to generate a new invite link for a chat; any previously generated link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the new invite link as String on success.
 * @param {Object} params exportChatInviteLink peremeters as object
 * @return {Object} api result
 */
function exportChatInviteLink(params) { // https://core.telegram.org/bots/api#exportchatinvitelink
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 * @param {Object} params setChatPhoto peremeters as object
 * @return {Object} api result
 */
function setChatPhoto(params) { // https://core.telegram.org/bots/api#setchatphoto
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 * @param {Object} params deleteChatPhoto peremeters as object
 * @return {Object} api result
 */
function deleteChatPhoto(params) { // https://core.telegram.org/bots/api#deletechatphoto
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 * @param {Object} params setChatTitle peremeters as object
 * @return {Object} api result
 */
function setChatTitle(params) { // https://core.telegram.org/bots/api#setchattitle
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 * @param {Object} params setChatDescription peremeters as object
 * @return {Object} api result
 */
function setChatDescription(params) { // https://core.telegram.org/bots/api#setchatdescription
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel. Returns True on success.
 * @param {Object} params pinChatMessage peremeters as object
 * @return {Object} api result
 */
function pinChatMessage(params) { // https://core.telegram.org/bots/api#pinchatmessage
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel. Returns True on success.
 * @param {Object} params unpinChatMessage peremeters as object
 * @return {Object} api result
 */
function unpinChatMessage(params) { // https://core.telegram.org/bots/api#unpinchatmessage
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel. Returns True on success.
 * @param {Object} params unpinAllChatMessages peremeters as object
 * @return {Object} api result
 */
function unpinAllChatMessages(params) { // https://core.telegram.org/bots/api#unpinchatmessage
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method for your bot to leave a group, supergroup or channel. Returns True on success.
 * @param {Object} params leaveChat peremeters as object
 * @return {Object} api result
 */
function leaveChat(params) { // https://core.telegram.org/bots/api#leavechat
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a Chat object on success.
 * @param {Object} params getChat peremeters as object
 * @return {Object} api result
 */
function getChat(params) { // https://core.telegram.org/bots/api#leavechat
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to get a list of administrators in a chat. On success, returns an Array of ChatMember objects that contains information about all chat administrators except other bots. If the chat is a group or a supergroup and no administrators were appointed, only the creator will be returned.
 * @param {Object} params getChatAdministrators peremeters as object
 * @return {Object} api result
 */
function getChatAdministrators(params) { // https://core.telegram.org/bots/api#getchatadministrators
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to get the number of members in a chat. Returns Int on success.
 * @param {Object} params getChatMembersCount peremeters as object
 * @return {Object} api result
 */
function getChatMembersCount(params) { // https://core.telegram.org/bots/api#getchatmemberscount
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to get information about a member of a chat. Returns a ChatMember object on success.
 * @param {Object} params getChatMember peremeters as object
 * @return {Object} api result
 */
function getChatMember(params) { // https://core.telegram.org/bots/api#getchatmember
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
 * @param {Object} params setChatStickerSet peremeters as object
 * @return {Object} api result
 */
function setChatStickerSet(params) { // https://core.telegram.org/bots/api#setchatstickerset
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
 * @param {Object} params deleteChatStickerSet peremeters as object
 * @return {Object} api result
 */
function deleteChatStickerSet(params) { // https://core.telegram.org/bots/api#deletechatstickerset
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * getUpdates
 * @return {Object} api result
 */
function getUpdates() {
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to send photos. On success, the sent Message is returned.
 * @param {Object} params sendPhoto peremeters as object
 * @return {Object} api result
 */
function sendPhoto(params) { // https://core.telegram.org/bots/api#sendphoto
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
 * @param {Object} params sendAudio peremeters as object
 * @return {Object} api result
 */
function sendAudio(params) { // https://core.telegram.org/bots/api#sendaudio
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
 * @param {Object} params sendDocument peremeters as object
 * @return {Object} api result
 */
function sendDocument(params) { // https://core.telegram.org/bots/api#senddocument
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to send video files, Telegram clients support mp4 videos (other formats may be sent as Document). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
 * @param {Object} params sendVideo peremeters as object
 * @return {Object} api result
 */
function sendVideo(params) { // https://core.telegram.org/bots/api#sendvideo
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.
 * @param {Object} params sendAnimation peremeters as object
 * @return {Object} api result
 */
function sendAnimation(params) { // https://core.telegram.org/bots/api#sendanimation
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.
 * @param {Object} params sendVoice peremeters as object
 * @return {Object} api result
 */
function sendVoice(params) { // https://core.telegram.org/bots/api#sendvoice
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * As of v.4.0, Telegram clients support rounded square mp4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned.
 * @param {Object} params sendVideoNote peremeters as object
 * @return {Object} api result
 */
function sendVideoNote(params) { // https://core.telegram.org/bots/api#sendvideonote
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Messages that were sent is returned.
 * @param {Object} params sendMediaGroup peremeters as object
 * @return {Object} api result
 */
function sendMediaGroup(params) { // https://core.telegram.org/bots/api#sendmediagroup
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to send point on the map. On success, the sent Message is returned.
 * @param {Object} params sendLocation peremeters as object
 * @return {Object} api result
 */
function sendLocation(params) { // https://core.telegram.org/bots/api#sendlocation
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to send information about a venue. On success, the sent Message is returned.
 * @param {Object} params sendVenue peremeters as object
 * @return {Object} api result
 */
function sendVenue(params) { // https://core.telegram.org/bots/api#sendvenue
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to send phone contacts. On success, the sent Message is returned.
 * @param {Object} params sendContact peremeters as object
 * @return {Object} api result
 */
function sendContact(params) { // https://core.telegram.org/bots/api#sendcontact
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to send a native poll. On success, the sent Message is returned.
 * @param {Object} params sendPoll peremeters as object
 * @return {Object} api result
 */
function sendPoll(params) { // https://core.telegram.org/bots/api#sendpoll
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.
 * @param {Object} params sendDice peremeters as object
 * @return {Object} api result
 */
function sendDice(params) { // https://core.telegram.org/bots/api#senddice
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.
 * @param {Object} params getUserProfilePhotos peremeters as object
 * @return {Object} api result
 */
function getUserProfilePhotos(params) { // https://core.telegram.org/bots/api#getuserprofilephotos
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to get basic info about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.
 * @param {Object} params getFile peremeters as object
 * @return {Object} api result
 */
function getFile(params) { // https://core.telegram.org/bots/api#getfile
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.
 * @param {Object} params answerCallbackQuery peremeters as object
 * @return {Object} api result
 */
function answerCallbackQuery(params) { // https://core.telegram.org/bots/api#answercallbackquery
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to change the list of the bot's commands. Returns True on success.
 * @param {Object} params setMyCommands peremeters as object
 * @return {Object} api result
 */
function setMyCommands(params) { // https://core.telegram.org/bots/api#setmycommands
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to get the current list of the bot's commands. Requires no parameters. Returns Array of BotCommand on success.
 * @return {Object} api result
 */
function getMyCommands() { // https://core.telegram.org/bots/api#getmycommands
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * A simple method for testing your bot's auth token. Requires no parameters. Returns basic information about the bot in form of a User object.
 * @return {Object} api result
 */
function getMe() { // https://core.telegram.org/bots/api#getme
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns True on success. Requires no parameters.
 * @return {Object} api result
 */
function logOut() { // https://core.telegram.org/bots/api#logout
  throw new Error("this method should not call direct, please call auth method.");
}

/**
 * Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns True on success. Requires no parameters.
 * @return {Object} api result
 */
function close() { // https://core.telegram.org/bots/api#close
  throw new Error("this method should not call direct, please call auth method.");
}

//-----------------------------------------

var _this_ = this,
  __bind_ = function (fn, me) {
    return function () {
      return fn.apply(me, arguments);
    };
  };

(function (exports) {
  var TelegramApp;
  TelegramApp = (function () {

    TelegramApp.name = 'TelegramApp';

    function TelegramApp(token) {
      this.token = token;

      // Message
      _this_.sendMessage = __bind_(_this_.sendMessage, this);
      _this_.forwardMessage = __bind_(_this_.forwardMessage, this);
      _this_.copyMessage = __bind_(_this_.copyMessage, this);
      _this_.editMessageLiveLocation = __bind_(_this_.editMessageLiveLocation, this);
      _this_.stopMessageLiveLocation = __bind_(_this_.stopMessageLiveLocation, this);

      // Chat

      _this_.sendChatAction = __bind_(_this_.sendChatAction, this);
      _this_.kickChatMember = __bind_(_this_.kickChatMember, this);
      _this_.unbanChatMember = __bind_(_this_.unbanChatMember, this);
      _this_.restrictChatMember = __bind_(_this_.restrictChatMember, this);
      _this_.promoteChatMember = __bind_(_this_.promoteChatMember, this);
      _this_.setChatAdministratorCustomTitle = __bind_(_this_.setChatAdministratorCustomTitle, this);
      _this_.setChatPermissions = __bind_(_this_.setChatPermissions, this);
      _this_.exportChatInviteLink = __bind_(_this_.exportChatInviteLink, this);
      _this_.setChatPhoto = __bind_(_this_.setChatPhoto, this);
      _this_.deleteChatPhoto = __bind_(_this_.deleteChatPhoto, this);
      _this_.setChatTitle = __bind_(_this_.setChatTitle, this);
      _this_.setChatDescription = __bind_(_this_.setChatDescription, this);
      _this_.pinChatMessage = __bind_(_this_.pinChatMessage, this);
      _this_.unpinChatMessage = __bind_(_this_.unpinChatMessage, this);
      _this_.unpinAllChatMessages = __bind_(_this_.unpinAllChatMessages, this);
      _this_.leaveChat = __bind_(_this_.leaveChat, this);
      _this_.getChat = __bind_(_this_.getChat, this);
      _this_.getChatAdministrators = __bind_(_this_.getChatAdministrators, this);
      _this_.getChatMembersCount = __bind_(_this_.getChatMembersCount, this);
      _this_.getChatMember = __bind_(_this_.getChatMember, this);
      _this_.setChatStickerSet = __bind_(_this_.setChatStickerSet, this);
      _this_.deleteChatStickerSet = __bind_(_this_.deleteChatStickerSet, this);

      // Other

      _this_.getUpdates = __bind_(_this_.getUpdates, this);
      _this_.sendPhoto = __bind_(_this_.sendPhoto, this);
      _this_.sendAudio = __bind_(_this_.sendAudio, this);
      _this_.sendDocument = __bind_(_this_.sendDocument, this);
      _this_.sendVideo = __bind_(_this_.sendVideo, this);
      _this_.sendAnimation = __bind_(_this_.sendAnimation, this);
      _this_.sendVoice = __bind_(_this_.sendVoice, this);
      _this_.sendVideoNote = __bind_(_this_.sendVideoNote, this);
      _this_.sendMediaGroup = __bind_(_this_.sendMediaGroup, this);
      _this_.sendLocation = __bind_(_this_.sendLocation, this);
      _this_.sendVenue = __bind_(_this_.sendVenue, this);
      _this_.sendContact = __bind_(_this_.sendContact, this);
      _this_.sendPoll = __bind_(_this_.sendPoll, this);
      _this_.sendDice = __bind_(_this_.sendDice, this);
      _this_.getUserProfilePhotos = __bind_(_this_.getUserProfilePhotos, this);
      _this_.getFile = __bind_(_this_.getFile, this);
      _this_.answerCallbackQuery = __bind_(_this_.answerCallbackQuery, this);
      _this_.setMyCommands = __bind_(_this_.setMyCommands, this);
      _this_.getMyCommands = __bind_(_this_.getMyCommands, this);
      _this_.getMe = __bind_(_this_.getMe, this);
      _this_.logOut = __bind_(_this_.logOut, this);
      _this_.close = __bind_(_this_.close, this);
    }

    // Message

    TelegramApp.prototype.sendMessage = function (obj) {
      return new Message(this.token).sendMessage(obj);
    };
    TelegramApp.prototype.forwardMessage = function (obj) {
      return new Message(this.token).forwardMessage(obj);
    };
    TelegramApp.prototype.copyMessage = function (obj) {
      return new Message(this.token).copyMessage(obj);
    };
    TelegramApp.prototype.editMessageLiveLocation = function (obj) {
      return new Message(this.token).editMessageLiveLocation(obj);
    };
    TelegramApp.prototype.stopMessageLiveLocation = function (obj) {
      return new Message(this.token).stopMessageLiveLocation(obj);
    };
    
    // Chat

    TelegramApp.prototype.sendChatAction = function (obj) {
      return new Chat(this.token).sendChatAction(obj);
    };
    TelegramApp.prototype.kickChatMember = function (obj) {
      return new Chat(this.token).kickChatMember(obj);
    };
    TelegramApp.prototype.unbanChatMember = function (obj) {
      return new Chat(this.token).unbanChatMember(obj);
    };
    TelegramApp.prototype.restrictChatMember = function (obj) {
      return new Chat(this.token).restrictChatMember(obj);
    };
    TelegramApp.prototype.promoteChatMember = function (obj) {
      return new Chat(this.token).promoteChatMember(obj);
    };
    TelegramApp.prototype.setChatAdministratorCustomTitle = function (obj) {
      return new Chat(this.token).setChatAdministratorCustomTitle(obj);
    };
    TelegramApp.prototype.setChatPermissions = function (obj) {
      return new Chat(this.token).setChatPermissions(obj);
    };
    TelegramApp.prototype.exportChatInviteLink = function (obj) {
      return new Chat(this.token).exportChatInviteLink(obj);
    };
    TelegramApp.prototype.setChatPhoto = function (obj) {
      return new Chat(this.token).setChatPhoto(obj);
    };
    TelegramApp.prototype.deleteChatPhoto = function (obj) {
      return new Chat(this.token).deleteChatPhoto(obj);
    };
    TelegramApp.prototype.setChatTitle = function (obj) {
      return new Chat(this.token).setChatTitle(obj);
    };
    TelegramApp.prototype.setChatDescription = function (obj) {
      return new Chat(this.token).setChatDescription(obj);
    };
    TelegramApp.prototype.pinChatMessage = function (obj) {
      return new Chat(this.token).pinChatMessage(obj);
    };
    TelegramApp.prototype.unpinChatMessage = function (obj) {
      return new Chat(this.token).unpinChatMessage(obj);
    };
    TelegramApp.prototype.unpinAllChatMessages = function (obj) {
      return new Chat(this.token).unpinAllChatMessages(obj);
    };
    TelegramApp.prototype.leaveChat = function (obj) {
      return new Chat(this.token).leaveChat(obj);
    };
    TelegramApp.prototype.getChat = function (obj) {
      return new Chat(this.token).getChat(obj);
    };
    TelegramApp.prototype.getChatAdministrators = function (obj) {
      return new Chat(this.token).getChatAdministrators(obj);
    };
    TelegramApp.prototype.getChatMembersCount = function (obj) {
      return new Chat(this.token).getChatMembersCount(obj);
    };
    TelegramApp.prototype.getChatMember = function (obj) {
      return new Chat(this.token).getChatMember(obj);
    };
    TelegramApp.prototype.setChatStickerSet = function (obj) {
      return new Chat(this.token).setChatStickerSet(obj);
    };
    TelegramApp.prototype.deleteChatStickerSet = function (obj) {
      return new Chat(this.token).deleteChatStickerSet(obj);
    };

    // Other

    TelegramApp.prototype.getUpdates = function () {
      return new Other(this.token).getUpdates();
    };
    TelegramApp.prototype.sendPhoto = function (obj) {
      return new Other(this.token).sendPhoto(obj);
    };
    TelegramApp.prototype.sendAudio = function (obj) {
      return new Other(this.token).sendAudio(obj);
    };
    TelegramApp.prototype.sendDocument = function () {
      return new Other(this.token).sendDocument(obj);
    };
    TelegramApp.prototype.sendVideo = function (obj) {
      return new Other(this.token).sendVideo(obj);
    };
    TelegramApp.prototype.sendAnimation = function (obj) {
      return new Other(this.token).sendAnimation(obj);
    };
    TelegramApp.prototype.sendVoice = function (obj) {
      return new Other(this.token).sendVoice(obj);
    };
    TelegramApp.prototype.sendVideoNote = function (obj) {
      return new Other(this.token).sendVideoNote(obj);
    };
    TelegramApp.prototype.sendVideoNote = function (obj) {
      return new Other(this.token).sendVideoNote(obj);
    };
    TelegramApp.prototype.sendMediaGroup = function (obj) {
      return new Other(this.token).sendMediaGroup(obj);
    };
    TelegramApp.prototype.sendMediaGroup = function (obj) {
      return new Other(this.token).sendMediaGroup(obj);
    };
    TelegramApp.prototype.sendLocation = function (obj) {
      return new Other(this.token).sendLocation(obj);
    };
    TelegramApp.prototype.sendVenue = function (obj) {
      return new Other(this.token).sendVenue(obj);
    };
    TelegramApp.prototype.sendContact = function (obj) {
      return new Other(this.token).sendContact(obj);
    };
    TelegramApp.prototype.sendPoll = function (obj) {
      return new Other(this.token).sendPoll(obj);
    };
    TelegramApp.prototype.sendsendDicePoll = function (obj) {
      return new Other(this.token).sendDice(obj);
    };
    TelegramApp.prototype.getUserProfilePhotos = function () {
      return new Other(this.token).getUserProfilePhotos(obj);
    };
    TelegramApp.prototype.getFile = function (obj) {
      return new Other(this.token).getFile(obj);
    };
    TelegramApp.prototype.answerCallbackQuery = function (obj) {
      return new Other(this.token).answerCallbackQuery(obj);
    };
    TelegramApp.prototype.setMyCommands = function (obj) {
      return new Other(this.token).setMyCommands(obj);
    };
    TelegramApp.prototype.getMyCommands = function () {
      return new Other(this.token).getMyCommands();
    };
    TelegramApp.prototype.getMe = function () {
      return new Other(this.token).getMe();
    };
    TelegramApp.prototype.logOut = function () {
      return new Other(this.token).logOut();
    };
    TelegramApp.prototype.close = function () {
      return new Other(this.token).close();
    };

    return TelegramApp;

  })();
  return exports.TelegramApp = TelegramApp;
})(this);