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
   * @param {Object} [params] - The parameters for the new incoming webhook.
   * @param {string} [params.url] - HTTPS url to send updates to. Use an empty string to remove webhook integration.
   * @param {Buffer} [params.certificate] - Public key certificate (PEM format) for the webhook server.
   * @param {string} [params.ip_address] - The fixed IP address which should be used to send webhook requests instead of the IP address resolved through DNS.
   * @param {number} [params.max_connections] - Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40.
   * @param {string[]} [params.allowed_updates] - List the types of updates you want your bot to receive.
   * @param {boolean} [params.drop_pending_updates] - Pass true to drop all pending updates.
   * @param {string} [params.secret_token] - A secret token for the webhook URL has been specified, we will use this token to generate a unique URL for each user visiting the bot's webhook.
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
   * @param {Object} params - Parameters for forwarding the message.
   * @param {number} params.chat_id - The ID of the chat to forward the message to.
   * @param {number} params.message_thread_id - The ID of the message thread to forward.
   * @param {number} params.from_chat_id - The ID of the chat the message is being forwarded from.
   * @param {boolean} [params.disable_notification=false] - Whether to disable notifications for the forwarded message.
   * @param {boolean} [params.protect_content=false] - Whether to protect the forwarded message's content from being forwarded again.
   * @param {number} [params.message_id] - The ID of the message to forward, if known.
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

  /**
  * Sends an audio message with parameters supplied as an object
  * @param {Object} params - An object with the parameters for sending an audio
  * @param {String} params.chat_id - Unique identifier of the chat 
  * @param {String} params.message_thread_id - Unique identifier of the thread 
  * @param {String|InputFile} params.audio - Audio file 
  * @param {String} params.caption - Audio message caption, 0-1024 characters  
  * @param {String} params.parse_mode - Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption 
  * @param {Array} params.caption_entities - Array of InlineKeyboardMarkup objects 
  * @param {Integer} params.duration - Duration of the audio in seconds 
  * @param {String} params.performer - Performer 
  * @param {String} params.title - Track name 
  * @param {String|InputFile} params.thumbnail - Thumbnail of the audio file 
  * @param {boolean} params.disable_notification - Sends the message silently. 
  * @param {boolean} params.protect_content - True, if content should be protected 
  * @param {String} params.reply_to_message_id - If the message is a reply, ID of the original message 
  * @param {boolean} params.allow_sending_without_reply - Pass True, if the message should be sent even if the specified replied-to message is not found 
  * @param {Object} params.reply_markup - Keyboard of InlineKeyboardMarkup type
  * @return {Message} - Message object
  */
  sendAudio(params = {
    chat_id,
    message_thread_id,
    audio,
    caption,
    parse_mode,
    caption_entities,
    duration,
    performer,
    title,
    thumbnail,
    disable_notification,
    protect_content,
    reply_to_message_id,
    allow_sending_without_reply,
    reply_markup
  }) {
    return this.Type().Message(
      this.apiCall(this.token, 'sendAudio', params)
    );
  }

  /**
   * Sends a document
   * @param {Object} params - Object containing all the parameters
   * @param {number} params.chat_id - Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   * @param {string} params.message_thread_id - Identifier of the message thread in which the messaging participants are involved 
   * @param {string} params.document - File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet
   * @param {string} params.thumbnail - Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side
   * @param {string} params.caption - Optional. Document caption (may also be used when resending documents by file_id)
   * @param {string} params.parse_mode - Optional. Mode for parsing entities in the document caption. See formatting options for more details.
   * @param {Object[]} params.caption_entities - Optional. List of special entities that appear in the caption, which can be specified instead of “parse_mode”
   * @param {boolean} params.disable_content_type_detection - Optional. Disables automatic server-side content type detection for files uploaded using multipart/form-data
   * @param {boolean} params.disable_notification - Optional. Sends the message silently. Users will receive a notification with no sound
   * @param {boolean} params.protect_content -Optional. Use this parameter if you want Telegram to send a message as a Markdown or HTML
   * @param {number} params.reply_to_message_id - Optional. If the message is a reply, ID of the original message
   * @param {boolean} params.allow_sending_without_reply - Optional. Pass True, if the message should be sent even if the specified replied-to message is not found
   * @param {Object} params.reply_markup - Optional. Additional interface options. A JSON-serialized object for a custom reply keyboard, instructions to hide keyboard or to force a reply from the user    
   * @returns {Message} Data for a new sent message
   */
  sendDocument(params = {
    chat_id,
    message_thread_id,
    document,
    thumbnail,
    caption,
    parse_mode,
    caption_entities,
    disable_content_type_detection,
    disable_notification,
    protect_content,
    reply_to_message_id,
    allow_sending_without_reply,
    reply_markup
  }) {
    return this.Type().Message(
      this.apiCall(this.token, 'sendDocument', params)
    );
  }

  /**
    * Sends a video to the specified chat.
    * @param {Object} params - The request parameters 
    * @param {Number} params.chat_id - Unique identifier for the target chat or username of the target channel
    * @param {String} params.message_thread_id - The message thread identifier of the previous sent message.
    * @param {unit8Array} params.video  - Video file
    * @param {Number} [params.duration] - Duration of the video in seconds 
    * @param {Number} [params.width] - Video width 
    * @param {Number} [params.height] - Video height 
    * @param {Object|String} [params.thumbnail] - Video thumbnail 
    * @param {String} [params.caption] - Video caption 
    * @param {String} [params.parse_mode] - The parse mode used for the caption 
    * @param {Array} [params.caption_entities] - Additional caption formatting entities
    * @param {Boolean} [params.has_spoiler] - Boolean value to mark content that contains spoilers
    * @param {Boolean} [params.supports_streaming] - Boolean indicating if the video supports streaming
    * @param {Boolean} [params.disable_notification] - Sends the message silently. Users will receive a notification with no sound.
    * @param {Boolean} [params.protect_content] - Boolean value disallow users to capture and share the video  
    * @param {Number} [params.reply_to_message_id] - If the message is a reply, ID of the original message
    * @param {Boolean} [params.allow_sending_without_reply] - Pass True, if the message should be sent even if the specified replied-to message is not found
    * @param {Array} [params.reply_markup] - Additional interface options 
    * @returns {Object} Message
   */
  sendVideo(params = {
    chat_id,
    message_thread_id,
    video,
    duration,
    width,
    height,
    thumbnail,
    caption,
    parse_mode,
    caption_entities,
    has_spoiler,
    supports_streaming,
    disable_notification,
    protect_content,
    reply_to_message_id,
    allow_sending_without_reply,
    reply_markup
  }) {
    return this.Type().Message(
      this.apiCall(this.token, 'sendVideo', params)
    );
  }

  /**
   * Sends an animation to chat.
   * @param {Object} [params] The parameters to send along with the animation.
   * @param {number} [params.chat_id] Unique identifier for the target chat.
   * @param {string} [params.message_thread_id] The identifier of the message thread which sender want to send animation to.
   * @param {InputFile} [params.animation] Animation to send. You can either pass a file_id as String to resend an animation that is already on the Telegram servers, or upload a new animation file using multipart/form-data
   * @param {number} [params.duration] Duration of sent animation in seconds
   * @param {number} [params.width] Animation width
   * @param {number} [params.height] Animation height 
   * @param {InputFile} [params.thumbnail] Thumbnail of the animation file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>.
   * @param {string} [params.caption] Animation caption (may also be used when resending animation by file_id), 0-1024 characters
   * @param {string} [params.parse_mode] Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption.
   * @param {MessageEntity} [params.caption_entities] List of special entities that appear in the caption, which can be specified instead of parse_mode
   * @param {boolean} [params.has_spoiler] Pass True, if the message should be marked as a warning
   * @param {boolean} [params.disable_notification] Sends the message silently. Users will receive a notification with no sound.
   * @param {boolean} [params.protect_content] Pass True, if you want to upload animation which must be treated as safe by the clients.
   * @param {number} [params.reply_to_message_id] If the message is a reply, ID of the original message
   * @param {boolean} [params.allow_sending_without_reply] Pass True, if the message should be sent even if the specified replied-to message is not found
   * @param {InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply} [params.reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
   * @returns {Message} On success, the sent Message is returned.
   */
  sendAnimation(params = {
    chat_id,
    message_thread_id,
    animation,
    duration,
    width,
    height,
    thumbnail,
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
      this.apiCall(this.token, 'sendAnimation', params)
    );
  }

  /**
   * Sends an audio message using a voice.
   * @param { Object } [params] - Parameters for the request
   * @param { Number } [params.chat_id] - Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   * @param { Number } [params.message_thread_id] - Identifier of the message to reply to.
   * @param { String } params.voice - Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data
   * @param { String } [params.caption] - Voice message caption, 0-1024 characters
   * @param { String } [params.parse_mode] - Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption. 
   * @param { Array<objects> } [params.caption_entities] - List of special entities that appear in the caption, which can be specified instead of parse_mode
   * @param { Number } [params.duration] - Duration of the voice message in seconds.
   * @param { Boolean } [params.disable_notification] - Sends the message silently. Users will receive a notification with no sound.
   * @param { String } [params.protect_content] - Pass True, to enable server-side content notification protection for this message.
   * @param { Number } [params.reply_to_message_id] - If the message is a reply, ID of the original message
   * @param { Boolean } [params.allow_sending_without_reply] - Pass True, if the message should be sent even if the specified replied-to message is not found
   * @param { Object } [params.reply_markup] - Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
   * @returns { Message } - Returns the sent Message on success
   */
  sendVoice(params = {
    chat_id,
    message_thread_id,
    voice,
    caption,
    parse_mode,
    caption_entities,
    duration,
    disable_notification,
    protect_content,
    reply_to_message_id,
    allow_sending_without_reply,
    reply_markup
  }) {
    return this.Type().Message(
      this.apiCall(this.token, 'sendVoice', params)
    );
  }

  /**
   * Sends a video note to the specified chat.
   * @param {object} params - An object containing the necessary parameters to send a video note.
   * @param {number|string} params.chat_id - Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   * @param {string} params.message_thread_id - Identifier of the message thread to send the video note.
   * @param {string} params.video_note - Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. 
   * @param {number} params.duration - Duration of sent video in seconds.
   * @param {number} params.length - Video width and height.
   * @param {string} params.thumbnail - Thumbnail of the file sent. The thumbnail should be in JPEG format and less than 200 kB in size. 
   * @param {boolean} params.disable_notification - Sends the message silently. Users will receive a notification with no sound.
   * @param {boolean} params.protect_content - Disables content sharing in the message thread.
   * @param {number} params.reply_to_message_id - If the message is a reply, ID of the original message.
   * @param {boolean} params.allow_sending_without_reply - Pass True, if the message should be sent even if the specified replied-to message is not found. 
   * @param {object} params.reply_markup - Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, 
   * @return {Message} - Sent message object.
   */
  sendVideoNote(params = {
    chat_id,
    message_thread_id,
    video_note,
    duration,
    length,
    thumbnail,
    disable_notification,
    protect_content,
    reply_to_message_id,
    allow_sending_without_reply,
    reply_markup
  }) {
    return this.Type().Message(
      this.apiCall(this.token, 'sendVideoNote', params)
    );
  }

  /**
   * Send a group of media files.
   * @param {Object} params - Parameters for media group sending request. 
   * @param {Number|String} params.chat_id - Unique identifier for the target chat.
   * @param {String} params.message_thread_id - thread identifier that mediagroup belongs to.
   * @param {Object} params.media - An array containing media objects.
   * @param {Boolean} [params.disable_notification] - Sends the message silently.
   * @param {Boolean} [params.protect_content] - Pass True, if messages should be sent in media group should be protected.
   * @param {Number} [params.reply_to_message_id] - If the message is a reply, ID of the original message.
   * @param {Boolean} [params.allow_sending_without_reply] - Pass True, if messages should be sent in media group should be sent without mention.
   * @return {Message} - A message with its fields filled.
  */
  sendMediaGroup(params = {
    chat_id,
    message_thread_id,
    media,
    disable_notification,
    protect_content,
    reply_to_message_id,
    allow_sending_without_reply
  }) {
    return this.Type().Message(
      this.apiCall(this.token, 'sendMediaGroup', params)
    );
  }

  /**
   * Send a location
   * @param {Object=} params Object with optional params.
   * @prop {Number} params.chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   * @prop {String} params.message_thread_id Identifies the message thread the message will be sent in
   * @prop {Number} params.latitude Latitude of the location
   * @prop {Number} params.longitude Longitude of the location
   * @prop {Number} params.horizontal_accuracy The radius of uncertainty for the location, measured in meters
   * @prop {Number} params.live_period Period in seconds for which the location will be updated (see Live Locations)
   * @prop {Number} params.heading Direction in which the user is moving, in degrees
   * @prop {Number} params.proximity_alert_radius Maximum distance for proximity alerts about the user, in meters
   * @prop {Boolean} params.disable_notification Sends the message silently. Users will receive a notification with no sound.
   * @prop {Boolean} params.protect_content Pass True, if content should be protected
   * @prop {Number} params.reply_to_message_id If the message is a reply, ID of the original message
   * @prop {Boolean} params.allow_sending_without_reply Pass True, if the message should be sent even if the specified replied-to message is not found
   * @prop {Object} params.reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove keyboard or to force a reply from the user.
   * @returns {Message} - A message with its fields filled.
   */
  sendLocation(params = {
    chat_id,
    message_thread_id,
    latitude,
    longitude,
    horizontal_accuracy,
    live_period,
    heading,
    proximity_alert_radius,
    disable_notification,
    protect_content,
    reply_to_message_id,
    allow_sending_without_reply,
    reply_markup
  }) {
    return this.Type().Message(
      this.apiCall(this.token, 'sendLocation', params)
    );
  }

  /**
   * Sends a venue to a chat.
   * @param {Object} params - Parameters for the API call.
   * @param {Number} params.chat_id - Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   * @param {String} params.message_thread_id - Identifier of the message thread the message belongs to.
   * @param {Number} params.latitude - Latitude of the venue.
   * @param {Number} params.longitude - Longitude of the venue.
   * @param {String} params.title - Name of the venue.
   * @param {String} params.address - Address of the venue.
   * @param {String} params.foursquare_id - Foursquare identifier of the venue.
   * @param {String} params.foursquare_type - Foursquare type of the venue.
   * @param {String} params.google_place_id - Google Places identifier of the venue.
   * @param {String} params.google_place_type - Google Places type of the venue.
   * @param {Boolean} params.disable_notification - Sends the message silently. Users will receive a notification with no sound.
   * @param {Boolean} params.protect_content - Pass True, if the message should be sent with content protection.
   * @param {Number} params.reply_to_message_id - If the message is a reply, ID of the original message.
   * @param {Boolean} params.allow_sending_without_reply - Pass True, if the message should be sent even if the specified replied-to message is not found.
   * @param {Object} params.reply_markup - Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
   * @return {Message} - On success, the sent Message is returned.
   */
  sendVenue(params = {
    chat_id,
    message_thread_id,
    latitude,
    longitude,
    title,
    address,
    foursquare_id,
    foursquare_type,
    google_place_id,
    google_place_type,
    disable_notification,
    protect_content,
    reply_to_message_id,
    allow_sending_without_reply,
    reply_markup
  }) {
    return this.Type().Message(
      this.apiCall(this.token, 'sendVenue', params)
    );
  }

  /**
   * Sends a contact to the specified chat.
   * @param {Object} params - Parameters for the API call.
   * @param {Number} params.chat_id - Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   * @param {Number} [params.message_thread_id] - Identifier of the message thread the contact message belongs to.
   * @param {String} params.phone_number - Contact's phone number.
   * @param {String} params.first_name - Contact's first name.
   * @param {String} [params.last_name] - Contact's last name.
   * @param {String} [params.vcard] - Additional data about the contact in the form of a vCard, 0-2048 bytes.
   * @param {Boolean} [params.disable_notification] - Sends the message silently. Users will receive a notification with no sound.
   * @param {Boolean} [params.protect_content] - Pass True, if the message should be sent with content protection.
   * @param {Number} [params.reply_to_message_id] - If the message is a reply, ID of the original message.
   * @param {Boolean} [params.allow_sending_without_reply] - Pass True, if the message should be sent even if the specified replied-to message is not found.
   * @param {Object} [params.reply_markup] - Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
   * @returns {Message} - On success, the sent Message is returned.
   */
  sendContact(params = {
    chat_id,
    message_thread_id,
    phone_number,
    first_name,
    last_name,
    vcard,
    disable_notification,
    protect_content,
    reply_to_message_id,
    allow_sending_without_reply,
    reply_markup
  }) {
    return this.Type().Message(
      this.apiCall(this.token, 'sendContact', params)
    );
  }


  /**
   * Sends a poll to a chat.
   * @param {Object} params - Parameters for the API call.
   * @param {Number} params.chat_id - Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   * @param {Number} [params.message_thread_id] - Identifier of the message to reply to or 0.
   * @param {String} params.question - Poll question, 1-255 characters.
   * @param {Array} params.options - List of answer options, 2-10 strings 1-100 characters each.
   * @param {Boolean} [params.is_anonymous] - True, if the poll needs to be anonymous, defaults to True.
   * @param {String} [params.type] - Poll type, “quiz” or “regular”, defaults to “regular”.
   * @param {Boolean} [params.allows_multiple_answers] - True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False.
   * @param {Number} [params.correct_option_id] - 0-based identifier of the correct answer option, required for polls in quiz mode.
   * @param {String} [params.explanation] - Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing.
   * @param {String} [params.explanation_parse_mode] - Mode for parsing entities in the explanation.
   * @param {Array} [params.explanation_entities] - List of special entities that appear in the explanation, which can be specified instead of parse_mode.
   * @param {Number} [params.open_period] - Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date.
   * @param {Number} [params.close_date] - Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period.
   * @param {Boolean} [params.is_closed] - Pass True, if the poll needs to be immediately closed. This can be useful for poll preview.
   * @param {Boolean} [params.disable_notification] - Sends the message silently. Users will receive a notification with no sound.
   * @param {Boolean} [params.protect_content] - Pass True, if the message should be sent with content protection.
   * @param {Number} [params.reply_to_message_id] - If the message is a reply, ID of the original message.
   * @param {Boolean} [params.allow_sending_without_reply] - Pass True, if the message should be sent even if the specified replied-to message is not found.
   * @param {Object} [params.reply_markup] - Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
   * @returns {Message} - On success, the sent Message is returned.
   */
  sendPoll(params = {
    chat_id,
    message_thread_id,
    question,
    options,
    is_anonymous,
    type,
    allows_multiple_answers,
    correct_option_id,
    explanation,
    explanation_parse_mode,
    explanation_entities,
    open_period,
    close_date,
    is_closed,
    disable_notification,
    protect_content,
    reply_to_message_id,
    allow_sending_without_reply,
    reply_markup
  }) {
    return this.Type().Message(
      this.apiCall(this.token, 'sendPoll', params)
    );
  }

  /**
   * Sends a dice message to the specified chat.
   * @param {Object} params - Parameters for the API call.
   * @param {Number} params.chat_id - Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   * @param {String} [params.message_thread_id] - Identifier of the message thread the dice message belongs to.
   * @param {String} [params.emoji] - Emoji on which the dice throw animation is based. Currently, must be one of “🎲”, “🎯”, or “🏀”. Defaults to “🎲”.
   * @param {Boolean} [params.disable_notification] - Sends the message silently. Users will receive a notification with no sound.
   * @param {Boolean} [params.protect_content] - Disables link previews for links in this message.
   * @param {Number} [params.reply_to_message_id] - If the message is a reply, ID of the original message.
   * @param {Boolean} [params.allow_sending_without_reply] - Pass True, if the message should be sent even if the specified replied-to message is not found.
   * @param {Object} [params.reply_markup] - Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
   * @returns {Object} - Returns the sent Message.
   */
  sendDice(params = {
    chat_id,
    message_thread_id,
    emoji,
    disable_notification,
    protect_content,
    reply_to_message_id,
    allow_sending_without_reply,
    reply_markup
  }) {
    return this.Type().Message(
      this.apiCall(this.token, 'sendDice', params)
    );
  }

  /**
   * Sends a chat action to the specified chat.
   * @param {Object} params - Parameters for the API call.
   * @param {string} params.chat_id - Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   * @param {string} [params.message_thread_id] - Identifier of the message thread the action should be sent in.
   * @param {string} params.action - Type of action to broadcast.
   * @returns {Object} - Returns the API call.
   */
  sendChatAction(params = {
    chat_id,
    message_thread_id,
    action
  }) {
    return this.apiCall(this.token, 'sendChatAction', params);
  }

  /**
   * Retrieves a user's profile photos.
   * @param {Object} params - Parameters for the request.
   * @param {number} params.user_id - Unique identifier of the target user.
   * @param {number} [params.offset] - Sequential number of the first photo to be returned. By default, all photos are returned.
   * @param {number} [params.limit] - Limits the number of photos to be retrieved. Values between 1—100 are accepted. Defaults to 100.
   * @returns {UserProfilePhotos} - The user's profile photos.
   */
  getUserProfilePhotos(params = {
    user_id,
    offset,
    limit
  }) {
    return this.Type().UserProfilePhotos(
      this.apiCall(this.token, 'getUserProfilePhotos', params)
    );
  }

  /**
   * Retrieves information about a file and its download link.
   * @param {Object} params - Parameters for the API call.
   * @param {string} params.file_id - Unique identifier for the file.
   * @returns {Object} - A promise that resolves with the API call response.
   */
  getFile(params = {
    file_id
  }) {
    return this.apiCall(this.token, 'getFile', params);
  }

  /**
   * Bans a user from a chat.
   * @param {Object} params - Parameters for the API call.
   * @param {Number} params.chat_id - Unique identifier for the target chat.
   * @param {Number} params.user_id - Unique identifier of the target user.
   * @param {Number} [params.until_date] - Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever.
   * @param {Boolean} [params.revoke_messages] - Pass true, if the messages sent by the user in the chat should be deleted.
   * @returns {True}
   */
  banChatMember(params = {
    chat_id,
    user_id,
    until_date,
    revoke_messages
  }) {
    return this.apiCall(this.token, 'banChatMember', params);
  }

  /**
   * Unban a user from a chat
   * @param {Object} params - Parameters for the API call
   * @param {Number} params.chat_id - Unique identifier for the target chat
   * @param {Number} params.user_id - Unique identifier of the target user
   * @param {Boolean} [params.only_if_banned] - Optional. Pass true to unban only if the user is currently banned
   * @returns {True}
   */
  unbanChatMember(params = {
    chat_id,
    user_id,
    only_if_banned
  }) {
    return this.apiCall(this.token, 'unbanChatMember', params);
  }

  /**
   * Restricts a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate admin rights.
   * @param {Object} params - Parameters for the API call
   * @param {Number} params.chat_id - Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   * @param {Number} params.user_id - Unique identifier of the target user
   * @param {Object} params.permissions - New user permissions
   * @param {Boolean} params.use_independent_chat_permissions - Pass True, if the user will not be able to change chat title, photo and other settings
   * @param {Number} params.until_date - Date when restrictions will be lifted for the user, unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever
   * @returns {True}
   */
  restrictChatMember(params = {
    chat_id,
    user_id,
    permissions,
    use_independent_chat_permissions,
    until_date
  }) {
    return this.apiCall(this.token, 'restrictChatMember', params);
  }


  /**
   * Promote a user in a chat
   * @param {Object} params - Parameters for the API call
   * @param {Number} params.chat_id - Unique identifier for the target chat
   * @param {Number} params.user_id - Unique identifier of the target user
   * @param {Boolean} [params.is_anonymous] - Pass True, if the user's presence in the chat is hidden
   * @param {Boolean} [params.can_manage_chat] - Pass True, if the user is allowed to manage the chat
   * @param {Boolean} [params.can_post_messages] - Pass True, if the user is allowed to send messages, contacts, locations and venues
   * @param {Boolean} [params.can_edit_messages] - Pass True, if the user is allowed to edit messages of other users and can pin messages
   * @param {Boolean} [params.can_delete_messages] - Pass True, if the user is allowed to delete messages of other users
   * @param {Boolean} [params.can_manage_video_chats] - Pass True, if the user is allowed to manage video chats
   * @param {Boolean} [params.can_restrict_members] - Pass True, if the user is allowed to restrict, ban or unban chat members
   * @param {Boolean} [params.can_promote_members] - Pass True, if the user is allowed to add new members to the chat
   * @param {Boolean} [params.can_change_info] - Pass True, if the user is allowed to change the chat title, photo and other settings
   * @param {Boolean} [params.can_invite_users] - Pass True, if the user is allowed to invite new users to the chat
   * @param {Boolean} [params.can_pin_messages] - Pass True, if the user is allowed to pin messages
   * @param {Boolean} [params.can_manage_topics] - Pass True, if the user is allowed to manage chat topics
   * @returns {True}
   */
  promoteChatMember(params = {
    chat_id,
    user_id,
    is_anonymous,
    can_manage_chat,
    can_post_messages,
    can_edit_messages,
    can_delete_messages,
    can_manage_video_chats,
    can_restrict_members,
    can_promote_members,
    can_change_info,
    can_invite_users,
    can_pin_messages,
    can_manage_topics
  }) {
    return this.apiCall(this.token, 'promoteChatMember', params);
  }

  /**
   * Sets a custom title for an administrator in a chat.
   * @param {Object} params - Parameters for the API call
   * @param {Number} params.chat_id - Unique identifier for the target chat
   * @param {Number} params.user_id - Unique identifier of the target user
   * @param {String} params.custom_title - New custom title for the administrator; 0-16 characters, emoji are not allowed
   * @returns {True}
   */
  setChatAdministratorCustomTitle(params = {
    chat_id,
    user_id,
    custom_title
  }) {
    return this.apiCall(this.token, 'setChatAdministratorCustomTitle', params);
  }

  /**
   * Bans a user from a chat.
   * @param {Object} params - Parameters for the API call.
   * @param {Number} params.chat_id - Unique identifier for the target chat.
   * @param {Number} params.sender_chat_id - Unique identifier of the user to be banned.
   * @returns {True}
   */
  banChatSenderChat(params = {
    chat_id,
    sender_chat_id
  }) {
    return this.apiCall(this.token, 'banChatSenderChat', params);
  }

  /**
   * Unban a sender from a chat
   * @param {Object} params - Parameters for unbanning a sender from a chat
   * @param {Number} params.chat_id - The chat ID of the chat to unban the sender from
   * @param {Number} params.sender_chat_id - The chat ID of the sender to unban
   * @returns {True}
   */
  unbanChatSenderChat(params = {
    chat_id,
    sender_chat_id
  }) {
    return this.apiCall(this.token, 'unbanChatSenderChat', params);
  }

  /**
   * Sets the permissions for a chat.
   * @param {Object} params - Parameters for setting chat permissions.
   * @param {Number} params.chat_id - Unique identifier for the target chat or username of the target supergroup or channel.
   * @param {Object} params.permissions - New default chat permissions.
   * @param {Boolean} params.use_independent_chat_permissions - Pass true to use independent chat permissions.
   * @returns {True}
   */
  setChatPermissions(params = {
    chat_id,
    permissions,
    use_independent_chat_permissions
  }) {
    return this.apiCall(this.token, 'setChatPermissions', params);
  }

  /**
   * Generates a new invite link for a chat; any previously generated link is revoked.
   * The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
   * Returns the new invite link as String on success.
   * @param {Object} params - Parameters for the request
   * @param {Number} params.chat_id - Unique identifier for the target chat
   * @returns {String} - New invite link as String
   */
  exportChatInviteLink(params = {
    chat_id
  }) {
    return this.apiCall(this.token, 'exportChatInviteLink', params);
  }

  /**
   * Creates a new invite link for a chat.
   * @param {Object} params - Parameters for creating a chat invite link.
   * @param {Number} params.chat_id - Unique identifier for the target chat.
   * @param {String} [params.name] - Name of the chat.
   * @param {Number} [params.expire_date] - Date when the link will expire in Unix time.
   * @param {Number} [params.member_limit] - Maximum number of members allowed in the chat.
   * @param {Boolean} [params.creates_join_request] - True, if the link will create a join request.
   * @returns {ChatInviteLink} - The newly created chat invite link.
   */
  createChatInviteLink(params = {
    chat_id,
    name,
    expire_date,
    member_limit,
    creates_join_request
  }) {
    return this.Type().ChatInviteLink(
      this.apiCall(this.token, 'createChatInviteLink', params)
    );
  }

  /**
   * Edits the invite link of a chat.
   * @param {Object} params - Parameters for editing the invite link.
   * @param {Number} params.chat_id - Unique identifier for the target chat.
   * @param {String} params.invite_link - New invite link.
   * @param {String} [params.name] - Name of the chat.
   * @param {Number} [params.expire_date] - Expiration date of the invite link.
   * @param {Number} [params.member_limit] - Maximum number of members allowed in the chat.
   * @param {Boolean} [params.creates_join_request] - Whether the invite link should create a join request.
   * @returns {ChatInviteLink} - The new invite link.
   */
  editChatInviteLink(params = {
    chat_id,
    invite_link,
    name,
    expire_date,
    member_limit,
    creates_join_request
  }) {
    return this.Type().ChatInviteLink(
      this.apiCall(this.token, 'editChatInviteLink', params)
    );
  }

  /**
   * Revoke an invite link for a chat
   * @param {Object} params - Parameters for the API call
   * @param {Number} params.chat_id - Unique identifier for the target chat
   * @param {String} params.invite_link - Invite link to be revoked
   * @returns {ChatInviteLink} - Information about the revoked invite link
   */
  revokeChatInviteLink(params = {
    chat_id,
    invite_link
  }) {
    return this.Type().ChatInviteLink(
      this.apiCall(this.token, 'revokeChatInviteLink', params)
    );
  }

  /**
   * Approves a chat join request from a user
   * @param {Object} params - Parameters for approving the chat join request
   * @param {Number} params.chat_id - The chat ID of the chat to approve the join request for
   * @param {Number} params.user_id - The user ID of the user to approve the join request for
   * @returns {True}
   */
  approveChatJoinRequest(params = {
    chat_id,
    user_id
  }) {
    return this.apiCall(this.token, 'approveChatJoinRequest', params);
  }

  /**
   * Declines a chat join request from a user
   * @param {Object} params - Parameters for the API call
   * @param {Number} params.chat_id - Unique identifier for the target chat
   * @param {Number} params.user_id - Unique identifier of the user to be declined
   * @returns {True}
   */
  declineChatJoinRequest(params = {
    chat_id,
    user_id
  }) {
    return this.apiCall(this.token, 'declineChatJoinRequest', params);
  }

  /**
   * Sets the photo of a chat.
   * @param {Object} params - Parameters for the API call.
   * @param {Integer|String} params.chat_id - Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   * @param {InputFile} params.photo - New chat photo, uploaded using multipart/form-data.
   * @returns {True}
   */
  setChatPhoto(params = {
    chat_id,
    photo
  }) {
    return this.apiCall(this.token, 'setChatPhoto', params);
  }

  /**
   * Deletes a chat photo.
   * @param {Object} params - Parameters for the API call.
   * @param {string} params.chat_id - Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   * @returns {True} 
   */
  deleteChatPhoto(params = {
    chat_id
  }) {
    return this.apiCall(this.token, 'deleteChatPhoto', params);
  }

  /**
   * Sets the title of a chat.
   * @param {Object} params - Parameters for setting the chat title.
   * @param {string} params.chat_id - Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   * @param {string} params.title - New chat title, 1-255 characters.
   * @returns {True}
   */
  setChatTitle(params = {
    chat_id,
    title
  }) {
    return this.apiCall(this.token, 'setChatTitle', params);
  }

  /**
   * Sets the description of a chat.
   * @param {Object} params - Parameters for setting the chat description.
   * @param {Number} params.chat_id - Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   * @param {String} params.description - New chat description, 0-255 characters.
   * @returns {True}
   */
  setChatDescription(params = {
    chat_id,
    description
  }) {
    return this.apiCall(this.token, 'setChatDescription', params);
  }

  /**
   * Pins a message in a chat.
   * @param {Object} params - Parameters for the API call.
   * @param {Number} params.chat_id - Unique identifier for the target chat.
   * @param {Number} params.message_id - Identifier of a message to pin.
   * @param {Boolean} [params.disable_notification] - Pass true, if it is not necessary to send a notification to all chat members about the new pinned message.
   * @returns {True}
   */
  pinChatMessage(params = {
    chat_id,
    message_id,
    disable_notification
  }) {
    return this.apiCall(this.token, 'pinChatMessage', params);
  }

  /**
   * Unpins a message in a chat.
   * @param {Object} params - Parameters for unpinning a message in a chat.
   * @param {Number} params.chat_id - Unique identifier for the target chat.
   * @param {Number} params.message_id - Identifier of a message to unpin.
   * @returns {True}
   */
  unpinChatMessage(params = {
    chat_id,
    message_id
  }) {
    return this.apiCall(this.token, 'unpinChatMessage', params);
  }

  /**
   * Unpins all messages in a chat
   * @param {Object} params - Parameters for unpinning all messages in a chat
   * @param {Number} params.chat_id - Unique identifier for the target chat
   * @returns {True}
   */
  unpinAllChatMessages(params = {
    chat_id
  }) {
    return this.apiCall(this.token, 'unpinAllChatMessages', params);
  }

  /**
   * Leaves a chat.
   * @param {Object} params - Parameters for the API call.
   * @param {string} params.chat_id - Unique identifier for the target chat.
   * @returns {True}
   */
  leaveChat(params = {
    chat_id
  }) {
    return this.apiCall(this.token, 'leaveChat', params);
  }

  /**
   * Retrieves information about a chat.
   * @param {Object} params - Parameters for the API call.
   * @param {string} params.chat_id - Unique identifier for the target chat.
   * @returns {Chat} - Information about the chat.
   */
  getChat(params = {
    chat_id
  }) {
    return this.Type().Chat(
      this.apiCall(this.token, 'getChat', params)
    );
  }

  /**
   * Retrieves a list of administrators in a chat.
   * @param {Object} params - Parameters for the API call
   * @param {Number} params.chat_id - Unique identifier for the target chat
   * @returns {Type.ChatMember[]} - List of chat members that are administrators
   */
  getChatAdministrators(params = {
    chat_id
  }) {
    return this.apiCall(this.token, 'getChatAdministrators', params).map(function (element) {
      return new Type().ChatMember(element)
    });
  }

  /**
   * Retrieves the number of members in a chat.
   * @param {Object} params - Parameters for the API call
   * @param {string} params.chat_id - Unique identifier for the target chat
   * @returns {Int} - number of members in the chat
   */
  getChatMemberCount(params = {
    chat_id
  }) {
    return this.apiCall(this.token, 'getChatMemberCount', params);
  }

  /**
   * Retrieves information about a member of a chat.
   * @param {Object} params - Parameters for the API call.
   * @param {string} params.chat_id - Unique identifier for the target chat.
   * @param {string} params.user_id - Unique identifier of the target user.
   * @returns {ChatMember} - Information about the chat member.
   */
  getChatMember(params = {
    chat_id,
    user_id
  }) {
    return this.Type().ChatMember(
      this.apiCall(this.token, 'getChatMember', params)
    );
  }

  /**
   * Sets the sticker set for a chat.
   * @param {Object} params - Parameters for setting the sticker set.
   * @param {Number} params.chat_id - Unique identifier for the target chat or username of the target channel.
   * @param {String} params.sticker_set_name - Name of the sticker set to be set as the group sticker set.
   * @returns {True}
   */
  setChatStickerSet(params = {
    chat_id,
    sticker_set_name
  }) {
    return this.apiCall(this.token, 'setChatStickerSet', params);
  }

  /**
   * Deletes the sticker set from a chat.
   * @param {Object} params - Parameters for the API call
   * @param {Number} params.chat_id - Unique identifier for the target chat or username of the target channel
   * @returns {True}
   */
  deleteChatStickerSet(params = {
    chat_id
  }) {
    return this.apiCall(this.token, 'deleteChatStickerSet', params);
  }

  /**
   * Retrieves a list of stickers for a forum topic icon.
   * @returns {Sticker[]} An array of Sticker objects.
   */
  getForumTopicIconStickers() {
    return this.apiCall(this.token, 'getForumTopicIconStickers', params).map(function (element) {
      return new Type().Sticker(element)
    });
  }

  /**
   * Creates a new forum topic in a chat.
   * @param {Object} params - Parameters for creating a new forum topic.
   * @param {Number} params.chat_id - The chat ID of the chat in which to create the forum topic.
   * @param {String} params.name - The name of the forum topic.
   * @param {String} params.icon_color - The color of the forum topic icon.
   * @param {Number} params.icon_custom_emoji_id - The ID of the custom emoji to use as the forum topic icon.
   * @returns {ForumTopic} The newly created forum topic.
   */
  createForumTopic(params = {
    chat_id,
    name,
    icon_color,
    icon_custom_emoji_id
  }) {
    return this.Type().ForumTopic(
      this.apiCall(this.token, 'createForumTopic', params)
    );
  }

  /**
   * Edits a forum topic.
   * @param {Object} params - Parameters for editing the forum topic.
   * @param {Number} params.chat_id - The chat ID of the forum topic.
   * @param {Number} params.message_thread_id - The message thread ID of the forum topic.
   * @param {String} params.name - The new name of the forum topic.
   * @param {Number} params.icon_custom_emoji_id - The new custom emoji ID of the forum topic.
   * @returns {True}
   */
  editForumTopic(params = {
    chat_id,
    message_thread_id,
    name,
    icon_custom_emoji_id
  }) {
    return this.apiCall(this.token, 'editForumTopic', params);
  }

  /**
   * Closes a forum topic in a chat
   * @param {Object} params - Parameters for the API call
   * @param {Number} params.chat_id - The chat ID of the forum topic
   * @param {Number} params.message_thread_id - The message thread ID of the forum topic
   * @returns {True}
   */
  closeForumTopic(params = {
    chat_id,
    message_thread_id
  }) {
    return this.apiCall(this.token, 'closeForumTopic', params);
  }

  /**
   * Reopen a forum topic
   * @param {Object} params - Parameters for the API call
   * @param {Number} params.chat_id - Unique identifier for the target chat
   * @param {Number} params.message_thread_id - Unique identifier for the forum topic
   * @returns {True}
   */
  reopenForumTopic(params = {
    chat_id,
    message_thread_id
  }) {
    return this.apiCall(this.token, 'reopenForumTopic', params);
  }

  /**
   * Deletes a forum topic.
   * @param {Object} params - Parameters for the API call.
   * @param {Number} params.chat_id - Unique identifier for the target chat.
   * @param {Number} params.message_thread_id - Unique identifier for the message thread.
   * @returns {True}
   */
  deleteForumTopic(params = {
    chat_id,
    message_thread_id
  }) {
    return this.apiCall(this.token, 'deleteForumTopic', params);
  }

  /**
   * Unpins all messages in a forum topic.
   * @param {Object} params - Parameters for the API call.
   * @param {string} params.chat_id - Unique identifier for the target chat.
   * @param {string} params.message_thread_id - Unique identifier for the forum topic.
   * @returns {True}
   */
  unpinAllForumTopicMessages(params = {
    chat_id,
    message_thread_id
  }) {
    return this.apiCall(this.token, 'unpinAllForumTopicMessages', params);
  }

  /**
   * Edits the name of a general forum topic.
   * @param {Object} params - Parameters for editing the general forum topic.
   * @param {Number} params.chat_id - Unique identifier for the target chat.
   * @param {String} params.name - New name of the general forum topic.
   * @returns {True}
   */
  editGeneralForumTopic(params = {
    chat_id,
    name
  }) {
    return this.apiCall(this.token, 'editGeneralForumTopic', params);
  }

  /**
   * Closes a general forum topic.
   * @param {Object} params - Parameters for the API call
   * @param {Number} params.chat_id - Unique identifier for the target chat
   * @returns {True}
   */
  closeGeneralForumTopic(params = {
    chat_id
  }) {
    return this.apiCall(this.token, 'closeGeneralForumTopic', params);
  }

  /**
   * Reopens a general forum topic.
   * @param {Object} params - Parameters for the API call.
   * @param {Number} params.chat_id - Unique identifier for the target chat or username of the target channel
   * @returns {True}
   */
  reopenGeneralForumTopic(params = {
    chat_id
  }) {
    return this.apiCall(this.token, 'reopenGeneralForumTopic', params);
  }

  /**
   * Hides a general forum topic from the list of topics in the chat
   * @param {Object} params - Parameters for the API call
   * @param {Number} params.chat_id - Unique identifier for the target chat
   * @returns {True}
   */
  hideGeneralForumTopic(params = {
    chat_id
  }) {
    return this.apiCall(this.token, 'hideGeneralForumTopic', params);
  }

  /**
   * Unhide a general forum topic
   * @param {Object} params - Parameters for the API call
   * @param {Number} params.chat_id - Unique identifier for the target chat
   * @returns {True}
   */
  unhideGeneralForumTopic(params = {
    chat_id
  }) {
    return this.apiCall(this.token, 'unhideGeneralForumTopic', params);
  }

  /**
   * Sends an answer to a callback query sent from the client.
   * @param {Object} params - Parameters for the API call.
   * @param {string} params.callback_query_id - Unique identifier for the query to be answered.
   * @param {string} [params.text] - Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters.
   * @param {boolean} [params.show_alert] - If true, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false.
   * @param {string} [params.url] - URL that will be opened by the user's client. If you have created a Game and accepted the conditions via @Botfather, specify the URL that opens your game – note that this will only work if the query comes from a callback_game button.
   * @param {number} [params.cache_time] - The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0.
   * @returns {True}
   */
  answerCallbackQuery(params = {
    callback_query_id,
    text,
    show_alert,
    url,
    cache_time
  }) {
    return this.apiCall(this.token, 'answerCallbackQuery', params);
  }

  /**
   * Sets the list of the bot's commands.
   * @param {Object} params - Parameters for setting the list of the bot's commands.
   * @param {Array} params.commands - A list of bot commands.
   * @param {BotCommandScope} [params.scope] - Bot commands scope.
   * @param {String} [params.language_code] - Bot commands language code.
   * @returns {True}
   */
  setMyCommands(params = {
    commands,
    scope,
    language_code
  }) {
    if (!!params) {
      return this.apiCall(this.token, 'setMyCommands', params);
    } else {
      throw new Error('Empty setMyCommands params.')
    }
  }

  /**
   * Deletes all commands.
   * @param {Object} params - Parameters for the API call.
   * @param {BotCommandScope} params.scope - The scope of the commands to delete.
   * @param {String} params.language_code - The language code of the commands to delete.
   * @returns {True}
   */
  deleteMyCommands(params = {
    scope,
    language_code
  }) {
    if (!!params) {
      return this.apiCall(this.token, 'deleteMyCommands', params);
    } else {
      throw new Error('Empty deleteMyCommands params.')
    }
  }

  /**
   * Retrieves a list of the current bot's commands.
   * @param {Object} params - Parameters for the request.
   * @param {BotCommandScope} params.scope - Bot scope.
   * @param {String} params.language_code - Bot language code.
   * @return {Array<BotCommand>} - List of commands supported by the bot.
   */
  getMyCommands(params = {
    scope,
    language_code
  }) {
    return this.apiCall(this.token, 'getMyCommands', params).map(function (element) {
      return new Type().BotCommand(element)
    });
  }

  /**
   * Sets the bot's profile description.
   * @param {Object} params - Parameters for setting the user's profile description.
   * @param {string} params.description - The user's profile description.
   * @param {string} params.language_code - The language code of the user's profile description.
   * @returns {True}
   */
  setMyDescription(params = {
    description,
    language_code
  }) {
    return this.apiCall(this.token, 'setMyDescription', params);
  }

  /**
   * Retrieve the description of the bot set by the bot owner.
   * @param {Object} [params] - Parameters for the API call.
   * @param {string} [params.language_code] - Language code for the description.
   * @return {BotDescription} - The description of the bot set by the bot owner.
   */
  getMyDescription(params = {
    language_code
  }) {
    return this.Type().BotDescription(
      this.apiCall(this.token, 'getMyDescription', params)
    );
  }

  /**
   * Sets the bots's short description
   * @param {Object} params - Parameters for setting the user's short description
   * @param {string} params.short_description - The user's short description
   * @param {string} params.language_code - The language code of the user's short description
   * @returns {True}
   */
  setMyShortDescription(params = {
    short_description,
    language_code
  }) {
    return this.apiCall(this.token, 'setMyShortDescription', params);
  }

  /**
   * Retrieve the short description of the bot.
   * @param {Object} [params] - Parameters for the request.
   * @param {string} [params.language_code] - Language code of the short description.
   * @returns {BotShortDescription} - Returns a short description of the bot.
   */
  getMyShortDescription(params = {
    language_code
  }) {
    return this.Type().BotShortDescription(
      this.apiCall(this.token, 'getMyShortDescription', params)
    );
  }

  /**
   * Sets a custom menu button for a chat.
   * @param {Object} params - Parameters for setting a custom menu button.
   * @param {Number} params.chat_id - Unique identifier for the target chat.
   * @param {Object} params.menu_button - The menu button to be set.
   * @returns {True}
   */
  setChatMenuButton(params = {
    chat_id,
    menu_button
  }) {
    return this.apiCall(this.token, 'setChatMenuButton', params);
  }

  /**
   * Retrieves the chat menu button for a given chat.
   * @param {Object} params - Parameters for the API call.
   * @param {string} params.chat_id - Unique identifier for the target chat.
   * @returns {MenuButton} - The chat menu button.
   */
  getChatMenuButton(params = {
    chat_id
  }) {
    return this.Type().MenuButton(
      this.apiCall(this.token, 'getChatMenuButton', params)
    );
  }

  /**
   * Sets the default administrator rights for the bot.
   * @param {Object} params - Parameters for the method.
   * @param {ChatAdministratorRights} params.rights - Rights to set.
   * @param {boolean} params.for_channels - Pass true if the rights are for channels.
   * @returns {True}
   */
  setMyDefaultAdministratorRights(params = {
    rights,
    for_channels
  }) {
    return this.apiCall(this.token, 'setMyDefaultAdministratorRights', params);
  }

  /**
   * Retrieves the default administrator rights for the bot in the specified channels.
   * @param {Object} [params] - Parameters for the API call
   * @param {boolean} [params.for_channels] - Pass true to return the rights for channels only
   * @returns {ChatAdministratorRights} - Default administrator rights for the bot
   */
  getMyDefaultAdministratorRights(params = {
    for_channels
  }) {
    return this.Type().ChatAdministratorRights(
      this.apiCall(this.token, 'getMyDefaultAdministratorRights', params)
    );
  }

  // Updating messages

  /**
   * Edits the text of a message sent by the bot or of an inline message sent via the bot (for inline bots).
   * @param {Object} params - Parameters for editing the message.
   * @param {Number} params.chat_id - Unique identifier for the target chat or username of the target channel.
   * @param {Number} params.message_id - Identifier of the sent message.
   * @param {String} params.inline_message_id - Identifier of the inline message.
   * @param {String} params.text - New text of the message.
   * @param {String} [params.parse_mode] - Mode for parsing entities in the message text.
   * @param {Object[]} [params.entities] - List of special entities that appear in message text, which can be specified instead of parse_mode.
   * @param {Boolean} [params.disable_web_page_preview] - Disables link previews for links in this message.
   * @param {Object} [params.reply_markup] - Additional interface options.
   * @returns {Message|True} - On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
   */
  editMessageText(params = {
    chat_id,
    message_id,
    inline_message_id,
    text,
    parse_mode,
    entities,
    disable_web_page_preview,
    reply_markup
  }) {
    return this.apiCall(this.token, 'editMessageText', params);
  }

  /**
   * Edits the caption of a message sent by the bot.
   * @param {Object} params - Parameters for editing the message caption.
   * @param {Number|String} params.chat_id - Unique identifier for the target chat or username of the target channel.
   * @param {Number} params.message_id - Identifier of the sent message.
   * @param {String} params.inline_message_id - Identifier of the inline message.
   * @param {String} params.caption - New caption of the message.
   * @param {String} [params.parse_mode] - Mode for parsing entities in the message caption.
   * @param {Object[]} [params.caption_entities] - List of special entities that appear in the caption, which can be specified instead of parse_mode.
   * @param {Object} [params.reply_markup] - Additional interface options.
   * @returns {Message|True} - On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
   */
  editMessageCaption(params = {
    chat_id,
    message_id,
    inline_message_id,
    caption,
    parse_mode,
    caption_entities,
    reply_markup
  }) {
    return this.apiCall(this.token, 'editMessageCaption', params);
  }

  /**
   * Edits the media of a message sent by the bot.
   * @param {Object} params - Parameters for editing the message media.
   * @param {Number|String} params.chat_id - Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   * @param {Number} params.message_id - Identifier of the sent message.
   * @param {String} params.inline_message_id - Identifier of the inline message.
   * @param {Object} params.media - A JSON-serialized object for a new media content of the message.
   * @param {Object} params.reply_markup - A JSON-serialized object for a new inline keyboard.
   * @returns {Message|True} - On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
   */
  editMessageMedia(params = {
    chat_id,
    message_id,
    inline_message_id,
    media,
    reply_markup
  }) {
    return this.apiCall(this.token, 'editMessageMedia', params);
  }

  /**
   * Edit a live location message sent via the bot.
   * @param {Object} params - Parameters for editing the live location message.
   * @param {Number} params.chat_id - Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   * @param {Number} params.message_id - Identifier of the sent message.
   * @param {String} params.inline_message_id - Identifier of the inline message.
   * @param {Number} params.latitude - Latitude of new location.
   * @param {Number} params.longitude - Longitude of new location.
   * @param {Number} [params.horizontal_accuracy] - The radius of uncertainty for the location, measured in meters; 0-1500.
   * @param {Number} [params.heading] - Direction in which the user is moving, in degrees; 1-360.
   * @param {Number} [params.proximity_alert_radius] - Maximum distance for proximity alerts about approaching another chat member, in meters; 0-100000.
   * @param {Object} [params.reply_markup] - Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
   * @returns {Message|True} - On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
   */
  editMessageLiveLocation(params = {
    chat_id,
    message_id,
    inline_message_id,
    latitude,
    longitude,
    horizontal_accuracy,
    heading,
    proximity_alert_radius,
    reply_markup
  }) {
    return this.apiCall(this.token, 'editMessageLiveLocation', params);
  }

  /**
   * Stops updating a live location message sent via the bot.
   * @param {Object} params - Parameters for the API call
   * @param {Number} params.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {Number} params.message_id - Identifier of the sent message
   * @param {String} [params.inline_message_id] - Identifier of the inline message
   * @param {Object} [params.reply_markup] - A JSON-serialized object for an inline keyboard
   * @returns {Message|True} - On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
   */
  stopMessageLiveLocation(params = {
    chat_id,
    message_id,
    inline_message_id,
    reply_markup
  }) {
    return this.apiCall(this.token, 'stopMessageLiveLocation', params);
  }

  /**
   * Edits the reply markup of a message sent by the bot.
   * @param {Object} params - Parameters for the API call.
   * @param {Number} params.chat_id - Unique identifier for the target chat.
   * @param {Number} params.message_id - Identifier of the sent message.
   * @param {Number} params.inline_message_id - Identifier of the inline message.
   * @param {Object} params.reply_markup - A JSON-serialized object for an inline keyboard.
   * @returns {Message|True} - On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
   */
  editMessageReplyMarkup(params = {
    chat_id,
    message_id,
    inline_message_id,
    reply_markup
  }) {
    return this.apiCall(this.token, 'editMessageReplyMarkup', params);
  }

  /**
   * Stops a poll in a Telegram chat.
   * @param {Object} params - Parameters for the API call.
   * @param {Number} params.chat_id - Unique identifier for the target chat.
   * @param {Number} params.message_id - Identifier of the original message with the poll.
   * @param {Object} params.reply_markup - Additional interface options.
   * @returns {Poll} - The stopped poll.
   */
  stopPoll(params = {
    chat_id,
    message_id,
    reply_markup
  }) {
    return new Type().Poll(
      this.apiCall(this.token, 'stopPoll', params)
    );
  }


  /**
   * Deletes a message from a chat.
   * @param {Object} params - Parameters for the API call.
   * @param {string} params.chat_id - Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   * @param {string} params.message_id - Unique identifier of the target message.
   * @returns {True}
   */
  deleteMessage(params = {
    chat_id,
    message_id
  }) {
    return this.apiCall(this.token, 'deleteMessage', params);
  }

  // Stickers

  /**
   * Sends a sticker to a chat.
   * @param {Object} params - Parameters for the API call.
   * @param {Number} params.chat_id - Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   * @param {Number} [params.message_thread_id] - Identifier of the message thread the sticker belongs to.
   * @param {String} params.sticker - Sticker to send.
   * @param {String} [params.emoji] - Emoji associated with the sticker.
   * @param {Boolean} [params.disable_notification] - Sends the message silently. Users will receive a notification with no sound.
   * @param {Boolean} [params.protect_content] - Pass True, if the uploaded sticker is protected.
   * @param {Number} [params.reply_to_message_id] - If the message is a reply, ID of the original message.
   * @param {Boolean} [params.allow_sending_without_reply] - Pass True, if the message should be sent even if the specified replied-to message is not found.
   * @param {Object} [params.reply_markup] - Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
   * @returns {Message} - On success, the sent Message is returned.
   */
  sendSticker(params = {
    chat_id,
    message_thread_id,
    sticker,
    emoji,
    disable_notification,
    protect_content,
    reply_to_message_id,
    allow_sending_without_reply,
    reply_markup
  }) {
    return new Type().Message(
      this.apiCall(this.token, 'sendSticker', params)
    );
  }

  /**
   * Retrieves a sticker set
   * @param {Object} params - Parameters for the API call
   * @param {string} params.name - Name of the sticker set
   * @returns {StickerSet} StickerSet object
   */
  getStickerSet(params = {
    name
  }) {
    return new Type().StickerSet(
      this.apiCall(this.token, 'getStickerSet', params)
    );
  }

  /**
   * Retrieve custom emoji stickers
   * @param {Object} [params] - Parameters for the API call
   * @param {Array<String>} [params.custom_emoji_ids] - Array of custom emoji ids
   * @returns {Array<Sticker>} - Array of custom emoji stickers
   */
  getCustomEmojiStickers(params = {
    custom_emoji_ids
  }) {
    return this.apiCall(this.token, 'getCustomEmojiStickers', params).map(function (element) {
      return new Type().Sticker(element)
    });
  }

  /**
   * Uploads a sticker file to the Telegram servers.
   * @param {Object} params - Parameters for the API call.
   * @param {Number} params.user_id - Unique identifier of the target user.
   * @param {File} params.sticker - The sticker to upload.
   * @param {String} params.sticker_format - The format of the sticker.
   * @returns {File} The uploaded sticker file.
   */
  uploadStickerFile(params = {
    user_id,
    sticker,
    sticker_format
  }) {
    return new Type().File(
      this.apiCall(this.token, 'uploadStickerFile', params)
    );
  }

  /**
   * Creates a new sticker set for a user
   * @param {Object} params - Parameters for creating a new sticker set
   * @param {Number} params.user_id - Unique identifier of the target user
   * @param {String} params.name - Short name of the sticker set, to be used in t.me/addstickers/ URLs (e.g., animals)
   * @param {String} params.title - Sticker set title, 1-64 characters
   * @param {Array} params.stickers - List of stickers to be added to the set
   * @param {String} params.sticker_format - File type of the stickers, either "png" or "tgs"
   * @param {String} params.sticker_type - Type of the sticker set, either "image" or "animated"
   * @param {Boolean} params.needs_repainting - Pass True, if a set of mask stickers should be created
   * @returns {True}
   */
  createNewStickerSet(params = {
    user_id,
    name,
    title,
    stickers,
    sticker_format,
    sticker_type,
    needs_repainting
  }) {
    return this.apiCall(this.token, 'createNewStickerSet', params);
  }

  /**
   * Adds a new sticker to a set created by the bot.
   * @param {Object} params - Parameters for the API call.
   * @param {Number} params.user_id - User identifier of sticker set owner.
   * @param {String} params.name - Sticker set name.
   * @param {InputSticker} params.sticker - Sticker object.
   * @returns {True}
   */
  addStickerToSet(params = {
    user_id,
    name,
    sticker
  }) {
    return this.apiCall(this.token, 'addStickerToSet', params);
  }

  /**
   * Sets the position of a sticker in a set created by the bot.
   * @param {Object} params - Parameters for the API call.
   * @param {String} params.sticker - File identifier of the sticker.
   * @param {Number} params.position - New sticker position in the set, zero-based.
   * @returns {True}
   */
  setStickerPositionInSet(params = {
    sticker,
    position
  }) {
    return this.apiCall(this.token, 'setStickerPositionInSet', params);
  }

  /**
   * Deletes a sticker from a set created by the bot.
   * @param {Object} params - Parameters for the API call
   * @param {String} params.sticker - File identifier of the sticker
   * @returns {True}
   */
  deleteStickerFromSet(params = {
    sticker
  }) {
    return this.apiCall(this.token, 'deleteStickerFromSet', params);
  }

  /**
   * Sets the list of emojis that can be used in the sticker set.
   * @param {Object} params - Parameters for the API call.
   * @param {String} params.sticker - File identifier of the sticker set.
   * @param {Array} params.emoji_list - List of emojis that can be used in the sticker set.
   * @returns {True}
   */
  setStickerEmojiList(params = {
    sticker,
    emoji_list
  }) {
    return this.apiCall(this.token, 'setStickerEmojiList', params);
  }

  /**
   * Sets the list of keywords for a sticker.
   * @param {Object} params - Parameters for setting the list of keywords for a sticker.
   * @param {String} params.sticker - File identifier of the sticker.
   * @param {String[]} params.keywords - List of keywords for the sticker.
   * @returns {True}
   */
  setStickerKeywords(params = {
    sticker,
    keywords
  }) {
    return this.apiCall(this.token, 'setStickerKeywords', params);
  }

  /**
   * Sets the position of a mask for a sticker in a sticker set.
   * @param {Object} params - Parameters for the API call.
   * @param {String} params.sticker - File identifier of the sticker.
   * @param {Object} params.mask_position - New position of the mask for the sticker.
   * @returns {True}
   */
  setStickerMaskPosition(params = {
    sticker,
    mask_position
  }) {
    return this.apiCall(this.token, 'setStickerMaskPosition', params);
  }

  /**
   * Sets the title of a sticker set.
   * @param {Object} params - Parameters for API call.
   * @param {string} params.name - The name of the sticker set.
   * @param {string} params.title - The new title of the sticker set.
   * @returns {True}
   */
  setStickerSetTitle(params = {
    name,
    title
  }) {
    return this.apiCall(this.token, 'setStickerSetTitle', params);
  }

  /**
    * Sets the thumbnail of the sticker set
    * @param {Object} params - Sets the thumbnail of the sticker set
    * @param {string} params.name - Name of the sticker set
    * @param {string} params.user_id - Unique identifier of the sticker set owner
    * @param {string} params.thumbnail - Thumbnail for the sticker set, must be up to 128 kilobytes in size and have width and height exactly 100px, and either a PNG or TGS format
   * @returns {True}
   */
  setStickerSetThumbnail(params = {
    name,
    user_id,
    thumbnail
  }) {
    return this.apiCall(this.token, 'setStickerSetThumbnail', params);
  }

  /**
   * Set the thumbnail for a previously created custom emoji sticker set.
   * @param {Object} params - Parameters
   * @param {String} params.name - Name of the custom emoji sticker set
   * @param {String} params.custom_emoji_id - Custom Emoji ID to be set as the thumbnail
   * @returns {True}
   */
  setCustomEmojiStickerSetThumbnail(params = {
    name,
    custom_emoji_id
  }) {
    return this.apiCall(this.token, 'setCustomEmojiStickerSetThumbnail', params);
  }

  /**
   * Makes an API call to delete a sticker set
   * @param {Object} [params] The parameters for the API request 
   * @param {string} params.name The name of the sticker set to delete
   * @returns {True}
   */
  deleteStickerSet(params = {
    name
  }) {
    return this.apiCall(this.token, 'deleteStickerSet', params);
  }

  // Inline mode

  /**
   * Sends results for an inline query to a user.
   * @param {Object} params - The parameters for this request
   * @param {String} params.inline_query_id - Unique identifier for the answered query
   * @param {Array<Object>} params.results - A list of results for the inline query
   * @param {Number} params.cache_time - The maximum amount of time in seconds that the result of the inline query may be cached for
   * @param {Boolean} params.is_personal - Pass `true`, if results may be based on the user's prior query
   * @param {String} params.next_offset - Pass the offset that a client should send in the next query with the same text to receive more results
   * @param {String} params.switch_pm_text - If passed, clients will display a button with specified text that switches the user to a private chat with the bot and sends the bot a start message with the parameter `switch_pm_parameter`
   * @param {String} params.switch_pm_parameter - Deep-linking parameter for the /start message sent to the bot when user presses the switch button
   * @return {Object}
   */
  answerInlineQuery(params = {
    inline_query_id,
    results,
    cache_time,
    is_personal,
    next_offset,
    switch_pm_text,
    switch_pm_parameter
  }) {
    return this.apiCall(this.token, 'answerInlineQuery', params);
  }

  /**
   * An API method for Telegram, used to quickly respond to a web application's query.
   * @param {Object} params - Parameters for answering a web application's query.
   * @param {string} params.web_app_query_id - Unique identifier of the query. 
   * @param {string} params.result - JSON-serialized result of the query.
   * @returns {Object} API response.
   */
  answerWebAppQuery(params = {
    web_app_query_id,
    result
  }) {
    return this.apiCall(this.token, 'answerWebAppQuery', params);
  }

  // Payments

  /**
   * Send an invoice.
   * @param {Object} [params] Parameters for the API method.
   * @param {Number|String} [params.chat_id] Unique identifier for the target chat or username of the target channel (in the format `@channelusername`).
   * @param {Number} [params.message_thread_id] An identifier for the message thread the invoice belongs to.
   * @param {String} [params.title] Product name.
   * @param {String} [params.description] Product description.
   * @param {String} [params.payload] Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes.
   * @param {String} [params.provider_token] Payments provider token, obtained via [Botfather](https://t.me/botfather).
   * @param {String} [params.currency] Three-letter ISO 4217 currency code.
   * @param {Object[]} [params.prices] Price breakdown, a list of objects describing each component of the final price.
   * @param {Object[]} [params.max_tip_amount] A list of possible payment amounts provided by the bot, for practitioners of the [tip button](https://telegram.org/blog/payments#surprising-others-with-tips).
   * @param {Object[]} [params.suggested_tip_amounts] A list of possible payment amounts provided by the bot, for practitioners of the [tip button](https://telegram.org/blog/payments#surprising-others-with-tips).
   * @param {String} [params.start_parameter] Token defining the current invoice, used to reconstruct the invoice later in the customer's dashboard.
   * @param {String} [params.provider_data] JSON-encoded data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.
   * @param {String} [params.photo_url] URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for.
   * @param {Integer} [params.photo_size] Photo size.
   * @param {Integer} [params.photo_width] Photo width.
   * @param {Integer} [params.photo_height] Photo height.
   * @param {Boolean} [params.need_name] Pass `true` if you require the user's full name to complete the order.
   * @param {Boolean} [params.need_phone_number] Pass `true` if you require the user's phone number to complete the order.
   * @param {Boolean} [params.need_email] Pass `true` if you require the user's email address to complete the order.
   * @param {Boolean} [params.need_shipping_address] Pass `true` if you require the user's shipping address to complete the order.
   * @param {Boolean} [params.send_phone_number_to_provider] Pass `true` if user's phone number should be sent to the provider.
   * @param {Boolean} [params.send_email_to_provider] Pass `true` if user's email address should be sent to the provider.
   * @param {Boolean} [params.is_flexible] Pass `true` if the final price depends on the shipping method.
   * @param {Boolean} [params.disable_notification] Sends the message silently. Users will receive a notification with no sound.
   * @param {Boolean} [params.protect_content] Sets [content protection](https://core.telegram.org/bots/api#copyright-warning).
   * @param {Number} [params.reply_to_message_id] If `reply_to_message_id` is not 0, content of the message with the specified ID will be used instead of the caption.
   * @param {Boolean} [params.allow_sending_without_reply] Pass `true`, if the message should be sent even if the specified replied-to message is not found.
   * @param {Object} [params.reply_markup] A [custom keyboard](https://core.telegram.org/bots#keyboards) can be [attached](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) to the message.
   * @return {Object} message object.
   */
  sendInvoice(params = {
    chat_id,
    message_thread_id,
    title,
    description,
    payload,
    provider_token,
    currency,
    prices,
    max_tip_amount,
    suggested_tip_amounts,
    start_parameter,
    provider_data,
    photo_url,
    photo_size,
    photo_width,
    photo_height,
    need_name,
    need_phone_number,
    need_email,
    need_shipping_address,
    send_phone_number_to_provider,
    send_email_to_provider,
    is_flexible,
    disable_notification,
    protect_content,
    reply_to_message_id,
    allow_sending_without_reply,
    reply_markup
  }) {
    return this.apiCall(this.token, 'sendInvoice', params);
  }

  /**
   * Create an invoice.
   * @param {Object} params All of the params for creating an invoice link.
   * @param {string} params.title The title of the invoice that is displayed in the Provider app.
   * @param {string} params.description The description of the invoice that is displayed in the Provider app.
   * @param {string} params.provider_token Token that specifies which Provider should be used for creating the invoice.
   * @param {string} params.currency Currency of the invoice.
   * @param {Array} params.prices The prices of the invoice.
   * @param {int} params.max_tip_amount The maximum amount the user can choose when paying.
   * @param {Array} params.suggested_tip_amounts Suggested amounts the user can choose when paying.
   * @param {Object} params.provider_data Additional Data to send to the provider.
   * @param {string} params.photo_url URL of the photo for the invoice.
   * @param {int} params.photo_size Size of the photo for the invoice.
   * @param {int} params.photo_width Width of the photo for the invoice.
   * @param {int} params.photo_height Height of the photo for the invoice.
   * @param {boolean} params.need_name Should ask the user for their name when paying.
   * @param {boolean} params.need_phone_number Should ask the user for their phone number when paying.
   * @param {boolean} params.need_email Should ask the user for their email address when paying.
   * @param {boolean} params.need_shipping_address Should ask the user for their shipping address when paying.
   * @param {boolean} params.send_phone_number_to_provider Should send the user's phone number to the provider.
   * @param {boolean} params.send_email_to_provider Should send the user's email to the provider.
   * @param {boolean} params.is_flexible Set if the total price depends on the shipping address.
   * @returns {Object} The created invoice link.
   */
  createInvoiceLink(params = {
    title,
    description,
    payload,
    provider_token,
    currency,
    prices,
    max_tip_amount,
    suggested_tip_amounts,
    provider_data,
    photo_url,
    photo_size,
    photo_width,
    photo_height,
    need_name,
    need_phone_number,
    need_email,
    need_shipping_address,
    send_phone_number_to_provider,
    send_email_to_provider,
    is_flexible
  }) {
    return this.apiCall(this.token, 'createInvoiceLink', params);
  }

  /**
   * Answers a shipping query.
   *
   * @param {Object} params - Parameters of the shipping query.
   * @param {String} params.shipping_query_id - Unique identifier for the query to be answered
   * @param {Boolean} params.ok - Specify true if delivery to the specified address is possible
   * @param {Array} params.shipping_options - Required if ok is true. A JSON-serialized array of available shipping options
   * @param {String} params.error_message - Required if ok is false. Error message in human readable form that explains why it is impossible to complete the order
   *
   * @return {Object} The api result
   */
  answerShippingQuery(params = {
    shipping_query_id,
    ok,
    shipping_options,
    error_message
  }) {
    return this.apiCall(this.token, 'answerShippingQuery', params);
  }

  /**
   * This method is used to send a response from bot to pre-checkout query from user.
   * 
   * @param {Object} params
   * @param {String} params.pre_checkout_query_id - Pre-Checkout Query ID
   * @param {Boolean} params.ok - Specify if everything is alright (true) or something went wrong (false).
   * @param {String} [params.error_message] - Error message in human readable into (present if ok is false)
   * @returns {Object}
   */
  answerPreCheckoutQuery(params = {
    pre_checkout_query_id,
    ok,
    error_message
  }) {
    return this.apiCall(this.token, 'answerPreCheckoutQuery', params);
  }

  // Telegram Passport

  /**
   * Sets passport data errors.
   * @param {Object} params - The parameters for the API call. 
   * @param {Number} params.user_id - Telegram user id.
   * @param {Object[]} params.errors - List of errors for data set in Telegram Passport 
   * @returns {Object[]} Returns an array of objects representing errors for data set in Telegram Passport.
   */
  setPassportDataErrors(params = {
    user_id,
    errors
  }) {
    return this.apiCall(this.token, 'setPassportDataErrors', params).map(function (element) {
      return this.Type().PassportElementError(element)
    });
  }

  // Games

  /**
   * @name sendGame
   * @param {Object} params
   * @param {String|Number} params.chat_id Unique identifier for the target chat or username of the target supergroup or channel
   * @param {String|Number} [params.message_thread_id] Identifier of the sent message if known
   * @param {String} params.game_short_name Short name of the game, serves as the unique identifier for the game
   * @param {Boolean} [params.disable_notification=false] Sends the message silently. Users will receive a notification with no sound
   * @param {Boolean} [params.protect_content=false] Pass True, if the game sent should be automatically launched for the user
   * @param {Number} [params.reply_to_message_id] If the message is a reply, ID of the original message
   * @param {Boolean} [params.allow_sending_without_reply=false] Pass True, if the message should be sent even if the specified replied-to message is not found
   * @param {Object} [params.reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user
   * @returns {Object}
   */
  sendGame(params = {
    chat_id,
    message_thread_id,
    game_short_name,
    disable_notification,
    protect_content,
    reply_to_message_id,
    allow_sending_without_reply,
    reply_markup
  }) {
    return this.apiCall(this.token, 'sendGame', params);
  }

  /**
   * Sets the score of the specified user in a game. 
   * On success, True is returned.
   * @param {Object} params 
   * @param {String} params.user_id Unique identifier of the target user
   * @param {Number} params.score New score
   * @param {Boolean} [params.force] Optional. Pass True, if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters 
   * @param {Boolean} [params.disable_edit_message] Pass True, if the game message should not be automatically edited 
   * @param {Number} params.chat_id Optional. Required if inline_message_id is not specified
   * @param {Number} params.message_id Optional. Required if inline_message_id is not specified
   * @param {String} params.inline_message_id Optional. Required if chat_id and message_id are not specified
   * @returns {Boolean}
   */
  setGameScore(params = {
    user_id,
    score,
    force,
    disable_edit_message,
    chat_id,
    message_id,
    inline_message_id
  }) {
    return this.apiCall(this.token, 'setGameScore', params);
  }

  /**
   * Gets data for high score tables. 
   * Will return the score of the specified user and several of their neighbors in a game.
   * 
   * @param {Object} params An object containing user, chat, message, and inline message id parameters.
   * @param {Number} params.user_id Unique identifier of the target user
   * @param {Number} params.chat_id Unique identifier of the target chat 
   * @param {Number} params.message_id Identifier of the sent message
   * @param {Number} params.inline_message_id Identifier of the inline message
   *
   * @returns {Object} The data for high score tables
   */
  getGameHighScores(params = {
    user_id,
    chat_id,
    message_id,
    inline_message_id
  }) {
    return this.apiCall(this.token, 'getGameHighScores', params);
  }
}
