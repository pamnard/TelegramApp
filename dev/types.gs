class Type {
  constructor() { }
  User(params) {
    return new class User {
      constructor() { }
      create({ id, is_bot, first_name, last_name, username, language_code, can_join_groups, can_read_all_group_messages, supports_inline_queries }) {
        return true
      }
    }
  }
  Chat(params) {
    class Chat {
      constructor(chat) {
        this.chat = chat;
      }
      create({ 
        id,
        type, title,
        username,
        first_name,
        last_name,
        photo,
        bio,
        description,
        invite_link,
        pinned_message,
        permissions,
        slow_mode_delay,
        sticker_set_name,
        can_set_sticker_set,
        linked_chat_id,
        location
      }) {
        return true
      }
    }
    return new Chat(params);
  }
  Message(params) {
    class Message {
      constructor(data) {
        this.data = data;
      }
      create({
        message_id,
        from,
        sender_chat,
        date,
        chat,
        forward_from,
        forward_from_chat,
        forward_from_message_id,
        forward_signature,
        forward_sender_name,
        forward_date,
        reply_to_message,
        via_bot,
        edit_date,
        media_group_id,
        author_signature,
        text,
        entities,
        animation,
        audio,
        document,
        photo,
        sticker,
        video,
        video_note,
        voice,
        caption,
        caption_entities,
        contact,
        dice,
        game,
        poll,
        venue,
        location,
        new_chat_members,
        left_chat_member,
        new_chat_title,
        new_chat_photo,
        delete_chat_photo,
        group_chat_created,
        supergroup_chat_created,
        channel_chat_created,
        migrate_to_chat_id,
        migrate_from_chat_id,
        pinned_message,
        invoice,
        successful_payment,
        connected_website,
        passport_data,
        proximity_alert_triggered,
        reply_markup
      }) {
        return true
      }
      getMessageId() {
        return new Type().MessageId(this.data.message_id)
      }
      getChat() {
        return new Type().Chat(this.data.chat)
      }
      getText() {
        return this.data.text
      }
      getEntities() {
        var arr = this.data.entities;
        for (var i = 0; i < arr.length; i++) {
          arr[i] = new Type().MessageEntity(arr[i]);
        }
        return arr
      }
    }
    return new Message(params);
  }
  MessageId(params) {
    return new class MessageId {
      constructor(message_id) {
        this.message_id = message_id;
      }
      get() {
        return this.message_id
      }
    }
  }
  MessageEntity(params) {
    return new class MessageEntity {
      constructor(entity) {
        this.entity = entity;
      }
      create({ type, offset, length, url, user, language }) {
        return {
          type: type,
          offset: offset,
          length: length,
          url: url,
          user: user,
          language: language
        }
      }
      getType() {
        return this.entity.type
      }
      getOffset() {
        return this.entity.offset
      }
      getLength() {
        return this.entity.length
      }
      getUrl() {
        return this.entity.url
      }
      getUser() {
        return this.entity.user
      }
      getLanguage() {
        return this.entity.language
      }
    }
  }
  PhotoSize(params) {
    return new class PhotoSize {
      constructor() { }
      create({ file_id, file_unique_id, width, height, file_size }) {
        return true
      }
    }
  }
  Animation(params) {
    return new class Animation {
      constructor() { }
      create({ file_id, file_unique_id, width, height, duration, thumb, file_name, mime_type, file_size }) {
        return true
      }
    }
  }
  Audio(params) {
    return new class Audio {
      constructor() { }
      create({ file_id, file_unique_id, duration, performer, title, file_name, mime_type, file_size, thumb }) {
        return true
      }
    }
  }
  Document(params) {
    return new class Document {
      constructor() { }
      create({ file_id, file_unique_id, thumb, file_name, mime_type, file_size }) {
        return true
      }
    }
  }
  Video(params) {
    return new class Video {
      constructor() { }
      create({ file_id, file_unique_id, width, height, duration, thumb, file_name, mime_type, file_size }) {
        return true
      }
    }
  }
  VideoNote(params) { }
  Voice(params) { }
  Contact(params) { }
  Dice(params) { }
  PollOption(params) { }
  PollAnswer(params) { }
  Poll(params) { }
  Location(params) { }
  Venue(params) { }
  ProximityAlertTriggered(params) { }
  UserProfilePhotos(params) { }
  File(params) { }
  ReplyKeyboardMarkup(params) {
    return new class ReplyKeyboardMarkup {
      constructor() { }
      create({ keyboard, resize_keyboard, one_time_keyboard, selective }) {
        if (keyboard == null) {
          throw new Error('ReplyKeyboardMarkup - "keyboard" not set.');
        }
        if (new Utils().isArray(keyboard)) {
          for (var i = 0; i < keyboard.length; i++) {
            if (new Utils().isArray(keyboard[i])) {
              for (var y = 0; y < keyboard[i]; y++) {
                keyboard[i][y] = new Type().KeyboardButton().create(keyboard[i][y]);
              }
            } else {
              throw new Error(`ReplyKeyboardMarkup - "keyboard[${i}]" is not array.`);
            }
          }
        } else {
          throw new Error('ReplyKeyboardMarkup - "keyboard" is not array.');
        }
        return {
          keyboard: keyboard,
          resize_keyboard: resize_keyboard,
          one_time_keyboard: one_time_keyboard,
          selective: selective
        }
      }
    }
  }
  KeyboardButton(params) {
    return new class ReplyKeyboardMarkup {
      constructor() { }
      create({ text, request_contact, request_location, request_poll }) {
        return {
          text: text,
          request_contact: request_contact,
          request_location: request_location,
          request_poll: request_poll
        }
      }
    }
  }
  KeyboardButtonPollType(params) { }
  ReplyKeyboardRemove(params) { }
  InlineKeyboardMarkup(params) {
    class InlineKeyboardMarkup {
      constructor(data) { 
        this.data = data;
      }
      create(arr) {
        if (new Utils().isArray(arr)) {
          var newArr = [];
          for (var i = 0; i < arr.length; i++) {
            var innerArr = this.createInlineKeyboardMarkupLine(arr[i]);
            if (new Utils().isArray(arr)) {
              if (innerArr[0].pay) {
                newArr.unshift(innerArr);
              } else {
                newArr[newArr.length] = innerArr;
              }
            } else {
              throw new Error(`InlineKeyboardMarkup - "arr[${i}]" is not array.`);
            }
          }
          if (newArr.length > 100) {
            throw new Error('InlineKeyboardMarkup - 100 buttons maximum');
          }
          return {
            "inline_keyboard": newArr
          }
        } else {
          throw new Error('InlineKeyboardMarkup - "arr" is not array.');
        }
      }
      createInlineKeyboardMarkupLine(arr) {
        if (new Utils().isArray(arr)) {
          if (arr.length <= 8) {
            var newArr = [];
            for (var i = 0; i < arr.length; i++) {
              var obj = new Type().InlineKeyboardButton().create(arr[i]);
              if (obj.pay) {
                newArr.unshift(obj);
              } else {
                newArr[newArr.length] = obj;
              }
            }
            return newArr
          } else {
            throw new Error('InlineKeyboardMarkup - 8 buttons in a row maximum');
          }
        } else {
          throw new Error('InlineKeyboardMarkup - "arr" is not array.');
        }
      }
    }
    return new InlineKeyboardMarkup(params);
  }
  InlineKeyboardButton(params) {
    class InlineKeyboardButton {
      constructor() { }
      create({ text, url, login_url, callback_data, switch_inline_query, switch_inline_query_current_chat, callback_game, pay }) {
        if (text == undefined) {
          throw new Error('InlineKeyboardButton - "text" not set.');
        }
        return {
          text: text,
          url: url,
          login_url: login_url,
          callback_data: callback_data,
          switch_inline_query: switch_inline_query,
          switch_inline_query_current_chat: switch_inline_query_current_chat,
          callback_game: callback_game,
          pay: pay
        }
      }
    }
    return new InlineKeyboardButton(params);
  }
  LoginUrl(params) {
    return new class LoginUrl {
      constructor() { }
      create({ url, forward_text, bot_username, request_write_access }) {
        if (url == null) {
          throw new Error('LoginUrl - "url" not set.');
        }
        return {
          url: url,
          forward_text: forward_text,
          bot_username: bot_username,
          request_write_access: request_write_access
        }
      }
    }
  }
  CallbackQuery(params) { }
  ForceReply(params) { }
  ChatPhoto(params) {
    return new class ChatPhoto {
      constructor() { }
      create({ small_file_id, small_file_unique_id, big_file_id, big_file_unique_id }) {
        return true
      }
    }
  }
  ChatMember(params) { }
  ChatPermissions(params) {
    return new class ChatPermissions {
      constructor() { }
      create({ can_send_messages, can_send_media_messages, can_send_polls, can_send_other_messages, can_add_web_page_previews, can_change_info, can_invite_users, can_pin_messages }) {
        return true
      }
    }
  }
  ChatLocation(params) {
    return new class ChatLocation {
      constructor() { }
      create({ location, address }) {
        return true
      }
    }
  }
  BotCommand(params) {
    return new class BotCommand {
      constructor() { }
      create({ command, description }) {
        return true
      }
    }
  }
  ResponseParameters(params) { }
  InputMedia(params) { }
  InputMediaPhoto(params) { }
  InputMediaVideo(params) { }
  InputMediaAnimation(params) { }
  InputMediaAudio(params) { }
  InputMediaDocument(params) { }
  InputFile(params) { }
  Update(params) {
    class Update {
      constructor(data) {
        this.data = data;
      }
      get() {
        return {
          update_id: this.data.update_id,
          message: this.data.message,
          edited_message: this.data.edited_message,
          channel_post: this.data.channel_post,
          edited_channel_post: this.data.edited_channel_post,
          inline_query: this.data.inline_query,
          chosen_inline_result: this.data.chosen_inline_result,
          callback_query: this.data.callback_query,
          shipping_query: this.data.shipping_query,
          pre_checkout_query: this.data.pre_checkout_query,
          poll: this.data.poll,
          poll_answer: this.data.poll_answer
        }
      }
      getMessage() {
        return new Type().Message(this.data.message);
      }
      getUpdateId() {
        return this.data.update_id;
      }
    }
    return new Update(params);
  }
}
