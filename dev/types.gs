class Type {
  constructor() { }

  // Getting updates

  /**
   * @method Update
   * @param {Object} params - An object containing the parameters for the update
   * @param {Number} params.update_id - The update ID
   * @param {Object} params.message - The message object
   * @param {Object} params.edited_message - The edited message object
   * @param {Object} params.channel_post - The channel post object
   * @param {Object} params.edited_channel_post - The edited channel post object
   * @param {Object} params.inline_query - The inline query object
   * @param {Object} params.chosen_inline_result - The chosen inline result object
   * @param {Object} params.callback_query - The callback query object
   * @param {Object} params.shipping_query - The shipping query object
   * @param {Object} params.pre_checkout_query - The pre checkout query object
   * @param {Object} params.poll - The poll object
   * @param {Object} params.poll_answer - The poll answer object
   * @param {Object} params.my_chat_member - The my chat member object
   * @param {Object} params.chat_member - The chat member object
   * @param {Object} params.chat_join_request - The chat join request object
   * @returns {Update} A new Update object
   */
  Update(params = {
    update_id,
    message,
    edited_message,
    channel_post,
    edited_channel_post,
    inline_query,
    chosen_inline_result,
    callback_query,
    shipping_query,
    pre_checkout_query,
    poll,
    poll_answer,
    my_chat_member,
    chat_member,
    chat_join_request
  }) {
    class Update {
      constructor({
        update_id,
        message,
        edited_message,
        channel_post,
        edited_channel_post,
        inline_query,
        chosen_inline_result,
        callback_query,
        shipping_query,
        pre_checkout_query,
        poll,
        poll_answer,
        my_chat_member,
        chat_member,
        chat_join_request
      }) {
        this.update_id = update_id;
        this.message = message;
        this.edited_message = edited_message;
        this.channel_post = channel_post;
        this.edited_channel_post = edited_channel_post;
        this.inline_query = inline_query;
        this.chosen_inline_result = chosen_inline_result;
        this.callback_query = callback_query;
        this.shipping_query = shipping_query;
        this.pre_checkout_query = pre_checkout_query;
        this.poll = poll;
        this.poll_answer = poll_answer;
        this.my_chat_member = my_chat_member;
        this.chat_member = chat_member;
        this.chat_join_request = chat_join_request;
      }
      get update_id() {
        return this._update_id;
      }
      get message() {
        return new Type().Message(this._message);
      }
      get edited_message() {
        return new Type().Message(this._edited_message);
      }
      get channel_post() {
        return new Type().Message(this._channel_post);
      }
      get edited_channel_post() {
        return new Type().Message(this._edited_channel_post);
      }
      get inline_query() {
        return new Type().InlineQuery(this._inline_query);
      }
      get chosen_inline_result() {
        return new Type().ChosenInlineResult(this._chosen_inline_result);
      }
      get callback_query() {
        return new Type().CallbackQuery(this._callback_query);
      }
      get shipping_query() {
        return new Type().ShippingQuery(this._shipping_query);
      }
      get pre_checkout_query() {
        return new Type().PreCheckoutQuery(this._pre_checkout_query);
      }
      get poll() {
        return new Type().Poll(this._poll);
      }
      get poll_answer() {
        return new Type().PollAnswer(this._poll_answer);
      }
      get my_chat_member() {
        return new Type().ChatMemberUpdated(this._my_chat_member);
      }
      get chat_member() {
        return new Type().ChatMemberUpdated(this._chat_member);
      }
      get chat_join_request() {
        return new Type().ChatJoinRequest(this._chat_join_request);
      }
    }
    return new Update(params);
  }

  /**
   * @method WebhookInfo
   * @param {Object} params - An object containing the parameters for the webhook info
   * @param {String} params.url - The URL of the webhook
   * @param {Boolean} params.has_custom_certificate - Whether the webhook has a custom certificate
   * @param {Number} params.pending_update_count - The number of pending updates
   * @param {String} params.ip_address - The IP address of the webhook
   * @param {Date} params.last_error_date - The date of the last error
   * @param {String} params.last_error_message - The message of the last error
   * @param {Date} params.last_synchronization_error_date - The date of the last synchronization error
   * @param {Number} params.max_connections - The maximum number of connections
   * @param {Array} params.allowed_updates - An array of allowed updates
   * @returns {WebhookInfo} A new WebhookInfo object
   */
  WebhookInfo(params = {
    url,
    has_custom_certificate,
    pending_update_count,
    ip_address,
    last_error_date,
    last_error_message,
    last_synchronization_error_date,
    max_connections,
    allowed_updates
  }) {
    class WebhookInfo {
      constructor({
        url,
        has_custom_certificate,
        pending_update_count,
        ip_address,
        last_error_date,
        last_error_message,
        last_synchronization_error_date,
        max_connections,
        allowed_updates
      }) {
        this.url = url;
        this.has_custom_certificate = has_custom_certificate;
        this.pending_update_count = pending_update_count;
        this.ip_address = ip_address;
        this.last_error_date = last_error_date;
        this.last_error_message = last_error_message;
        this.last_synchronization_error_date = last_synchronization_error_date;
        this.max_connections = max_connections;
        this.allowed_updates = allowed_updates;
      }
      get url() {
        return this._url;
      }
      get has_custom_certificate() {
        return this._has_custom_certificate;
      }
      get pending_update_count() {
        return this._pending_update_count;
      }
      get ip_address() {
        return this._ip_address;
      }
      get last_error_date() {
        return this._last_error_date;
      }
      get last_error_message() {
        return this._last_error_message;
      }
      get last_synchronization_error_date() {
        return this._last_synchronization_error_date;
      }
      get max_connections() {
        return this._max_connections;
      }
      get allowed_updates() {
        return this._allowed_updates;
      }
    }
    return new WebhookInfo(params);
  }

  // Available types

  /**
   * @method User
   * @param {Object} params - An object containing the user's data
   * @param {Number} params.id - The user's ID
   * @param {Boolean} params.is_bot - Whether the user is a bot
   * @param {String} params.first_name - The user's first name
   * @param {String} params.last_name - The user's last name
   * @param {String} params.username - The user's username
   * @param {String} params.language_code - The user's language code
   * @param {Boolean} params.is_premium - Whether the user is a premium user
   * @param {Boolean} params.added_to_attachment_menu - Whether the user has been added to the attachment menu
   * @param {Boolean} params.can_join_groups - Whether the user can join groups
   * @param {Boolean} params.can_read_all_group_messages - Whether the user can read all group messages
   * @param {Boolean} params.supports_inline_queries - Whether the user supports inline queries
   * @returns {User} A new User object
   */
  User(params = {
    id,
    is_bot,
    first_name,
    last_name,
    username,
    language_code,
    is_premium,
    added_to_attachment_menu,
    can_join_groups,
    can_read_all_group_messages,
    supports_inline_queries
  }) {
    class User {
      constructor({
        id,
        is_bot,
        first_name,
        last_name,
        username,
        language_code,
        is_premium,
        added_to_attachment_menu,
        can_join_groups,
        can_read_all_group_messages,
        supports_inline_queries
      }) {
        this.id = id;
        this.is_bot = is_bot;
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.language_code = language_code;
        this.is_premium = is_premium;
        this.added_to_attachment_menu = added_to_attachment_menu;
        this.can_join_groups = can_join_groups;
        this.can_read_all_group_messages = can_read_all_group_messages;
        this.supports_inline_queries = supports_inline_queries;
      }
      get id() {
        return this._id;
      }
      get is_bot() {
        return this._is_bot;
      }
      get first_name() {
        return this._first_name;
      }
      get last_name() {
        return this._last_name;
      }
      get username() {
        return this._username;
      }
      get language_code() {
        return this._language_code;
      }
      get is_premium() {
        return this._is_premium;
      }
      get added_to_attachment_menu() {
        return this._added_to_attachment_menu;
      }
      get can_join_groups() {
        return this._can_join_groups;
      }
      get can_read_all_group_messages() {
        return this._can_read_all_group_messages;
      }
      get supports_inline_queries() {
        return this._supports_inline_queries;
      }
    }
    return new User(params);
  }

  /**
   * @method Chat
   * @param {Object} params - An object containing the parameters for the chat.
   * @param {Number} params.id - The chat's unique identifier.
   * @param {String} params.type - The type of chat.
   * @param {String} params.title - The chat's title.
   * @param {String} params.username - The chat's username.
   * @param {String} params.first_name - The chat's first name.
   * @param {String} params.last_name - The chat's last name.
   * @param {Boolean} params.is_forum - Whether the chat is a forum.
   * @param {Object} params.photo - The chat's photo.
   * @param {Array} params.active_usernames - The chat's active usernames.
   * @param {String} params.emoji_status_custom_emoji_id - The chat's emoji status custom emoji id.
   * @param {String} params.bio - The chat's bio.
   * @param {Boolean} params.has_private_forwards - Whether the chat has private forwards.
   * @param {Boolean} params.has_restricted_voice_and_video_messages - Whether the chat has restricted voice and video messages.
   * @param {Boolean} params.join_to_send_messages - Whether the chat requires users to join in order to send messages.
   * @param {Boolean} params.join_by_request - Whether the chat requires users to join by request.
   * @param {String} params.description - The chat's description.
   * @param {String} params.invite_link - The chat's invite link.
   * @param {Object} params.pinned_message - The chat's pinned message.
   * @param {Object} params.permissions - The chat's permissions.
   * @param {Number} params.slow_mode_delay - The chat's slow mode delay.
   * @param {Number} params.message_auto_delete_time - The chat's message auto delete time.
   * @param {Boolean} params.has_aggressive_anti_spam_enabled - Whether the chat has aggressive anti-spam enabled.
   * @param {Boolean} params.has_hidden_members - Whether the chat has hidden members.
   * @param {Boolean} params.has_protected_content - Whether the chat has protected content.
   * @param {String} params.sticker_set_name - The chat's sticker set name.
   * @param {Boolean} params.can_set_sticker_set - Whether the chat can set a sticker set.
   * @param {Number} params.linked_chat_id - The chat's linked chat id.
   * @param {Object} params.location - The chat's location.
   * @returns {Object} A new chat object.
   */
  Chat(params = {
    id,
    type,
    title,
    username,
    first_name,
    last_name,
    is_forum,
    photo,
    active_usernames,
    emoji_status_custom_emoji_id,
    bio,
    has_private_forwards,
    has_restricted_voice_and_video_messages,
    join_to_send_messages,
    join_by_request,
    description,
    invite_link,
    pinned_message,
    permissions,
    slow_mode_delay,
    message_auto_delete_time,
    has_aggressive_anti_spam_enabled,
    has_hidden_members,
    has_protected_content,
    sticker_set_name,
    can_set_sticker_set,
    linked_chat_id,
    location
  }) {
    class Chat {
      constructor({
        id,
        type,
        title,
        username,
        first_name,
        last_name,
        is_forum,
        photo,
        active_usernames,
        emoji_status_custom_emoji_id,
        bio,
        has_private_forwards,
        has_restricted_voice_and_video_messages,
        join_to_send_messages,
        join_by_request,
        description,
        invite_link,
        pinned_message,
        permissions,
        slow_mode_delay,
        message_auto_delete_time,
        has_aggressive_anti_spam_enabled,
        has_hidden_members,
        has_protected_content,
        sticker_set_name,
        can_set_sticker_set,
        linked_chat_id,
        location
      }) {
        this.id = id;
        this.type = type;
        this.title = title;
        this.username = username;
        this.first_name = first_name;
        this.last_name = last_name;
        this.is_forum = is_forum;
        this.photo = photo;
        this.active_usernames = active_usernames;
        this.emoji_status_custom_emoji_id = emoji_status_custom_emoji_id;
        this.bio = bio;
        this.has_private_forwards = has_private_forwards;
        this.has_restricted_voice_and_video_messages = has_restricted_voice_and_video_messages;
        this.join_to_send_messages = join_to_send_messages;
        this.join_by_request = join_by_request;
        this.description = description;
        this.invite_link = invite_link;
        this.pinned_message = pinned_message;
        this.permissions = permissions;
        this.slow_mode_delay = slow_mode_delay;
        this.message_auto_delete_time = message_auto_delete_time;
        this.has_aggressive_anti_spam_enabled = has_aggressive_anti_spam_enabled;
        this.has_hidden_members = has_hidden_members;
        this.has_protected_content = has_protected_content;
        this.sticker_set_name = sticker_set_name;
        this.can_set_sticker_set = can_set_sticker_set;
        this.linked_chat_id = linked_chat_id;
        this.location = location;
      }
      get id() {
        return this._id;
      }
      get type() {
        return this._type;
      }
      get title() {
        return this._title;
      }
      get username() {
        return this._username;
      }
      get first_name() {
        return this._first_name;
      }
      get last_name() {
        return this._last_name;
      }
      get is_forum() {
        return this._is_forum;
      }
      get photo() {
        return new Type().ChatPhoto(this._photo);
      }
      get active_usernames() {
        return this._active_usernames;
      }
      get bio() {
        return this._bio;
      }
      get has_private_forwards() {
        return this._has_private_forwards;
      }
      get has_restricted_voice_and_video_messages() {
        return this._has_restricted_voice_and_video_messages;
      }
      get join_to_send_messages() {
        return this._join_to_send_messages;
      }
      get join_by_request() {
        return this._join_by_request;
      }
      get description() {
        return this._description;
      }
      get invite_link() {
        return this._invite_link;
      }
      get pinned_message() {
        return new Type().Message(this._pinned_message);
      }
      get permissions() {
        return new Type().ChatPermissions(this._permissions);
      }
      get slow_mode_delay() {
        return this._slow_mode_delay;
      }
      get message_auto_delete_time() {
        return this._message_auto_delete_time;
      }
      get has_aggressive_anti_spam_enabled() {
        return this._has_aggressive_anti_spam_enabled;
      }
      get has_hidden_members() {
        return this._has_hidden_members;
      }
      get has_protected_content() {
        return this._has_protected_content;
      }
      get sticker_set_name() {
        return this._sticker_set_name;
      }
      get can_set_sticker_set() {
        return this._can_set_sticker_set;
      }
      get linked_chat_id() {
        return this._linked_chat_id;
      }
      get location() {
        return new Type().ChatLocation(this._location);
      }
    }
    return new Chat(params);
  }

  Message(params = {
    message_id,
    message_thread_id,
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
    is_topic_message,
    is_automatic_forward,
    reply_to_message,
    via_bot,
    edit_date,
    has_protected_content,
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
    has_media_spoiler,
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
    message_auto_delete_timer_changed,
    migrate_to_chat_id,
    migrate_from_chat_id,
    pinned_message,
    invoice,
    successful_payment,
    user_shared,
    chat_shared,
    connected_website,
    write_access_allowed,
    passport_data,
    proximity_alert_triggered,
    forum_topic_created,
    forum_topic_edited,
    forum_topic_closed,
    forum_topic_reopened,
    general_forum_topic_hidden,
    general_forum_topic_unhidden,
    video_chat_scheduled,
    video_chat_started,
    video_chat_ended,
    video_chat_participants_invited,
    web_app_data,
    reply_markup
  }) {
    class Message {
      constructor({
        message_id,
        message_thread_id,
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
        is_topic_message,
        is_automatic_forward,
        reply_to_message,
        via_bot,
        edit_date,
        has_protected_content,
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
        has_media_spoiler,
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
        message_auto_delete_timer_changed,
        migrate_to_chat_id,
        migrate_from_chat_id,
        pinned_message,
        invoice,
        successful_payment,
        user_shared,
        chat_shared,
        connected_website,
        write_access_allowed,
        passport_data,
        proximity_alert_triggered,
        forum_topic_created,
        forum_topic_edited,
        forum_topic_closed,
        forum_topic_reopened,
        general_forum_topic_hidden,
        general_forum_topic_unhidden,
        video_chat_scheduled,
        video_chat_started,
        video_chat_ended,
        video_chat_participants_invited,
        web_app_data,
        reply_markup
      }) {
        this.message_id = message_id;
        this.message_thread_id = message_thread_id;
        this.from = from;
        this.sender_chat = sender_chat;
        this.date = date;
        this.chat = chat;
        this.forward_from = forward_from;
        this.forward_from_chat = forward_from_chat;
        this.forward_from_message_id = forward_from_message_id;
        this.forward_signature = forward_signature;
        this.forward_sender_name = forward_sender_name;
        this.forward_date = forward_date;
        this.is_topic_message = is_topic_message;
        this.is_automatic_forward = is_automatic_forward;
        this.reply_to_message = reply_to_message;
        this.via_bot = via_bot;
        this.edit_date = edit_date;
        this.has_protected_content = has_protected_content;
        this.media_group_id = media_group_id;
        this.author_signature = author_signature;
        this.text = text;
        this.entities = entities;
        this.animation = animation;
        this.audio = audio;
        this.document = document;
        this.photo = photo;
        this.sticker = sticker;
        this.video = video;
        this.video_note = video_note;
        this.voice = voice;
        this.caption = caption;
        this.caption_entities = caption_entities;
        this.has_media_spoiler = has_media_spoiler;
        this.contact = contact;
        this.dice = dice;
        this.game = game;
        this.poll = poll;
        this.venue = venue;
        this.location = location;
        this.new_chat_members = new_chat_members;
        this.left_chat_member = left_chat_member;
        this.new_chat_title = new_chat_title;
        this.new_chat_photo = new_chat_photo;
        this.delete_chat_photo = delete_chat_photo;
        this.group_chat_created = group_chat_created;
        this.supergroup_chat_created = supergroup_chat_created;
        this.channel_chat_created = channel_chat_created;
        this.message_auto_delete_timer_changed = message_auto_delete_timer_changed;
        this.migrate_to_chat_id = migrate_to_chat_id;
        this.migrate_from_chat_id = migrate_from_chat_id;
        this.pinned_message = pinned_message;
        this.invoice = invoice;
        this.successful_payment = successful_payment;
        this.user_shared = user_shared;
        this.chat_shared = chat_shared;
        this.connected_website = connected_website;
        this.write_access_allowed = write_access_allowed;
        this.passport_data = passport_data;
        this.proximity_alert_triggered = proximity_alert_triggered;
        this.forum_topic_created = forum_topic_created;
        this.forum_topic_edited = forum_topic_edited;
        this.forum_topic_closed = forum_topic_closed;
        this.forum_topic_reopened = forum_topic_reopened;
        this.general_forum_topic_hidden = general_forum_topic_hidden;
        this.general_forum_topic_unhidden = general_forum_topic_unhidden;
        this.video_chat_scheduled = video_chat_scheduled;
        this.video_chat_started = video_chat_started;
        this.video_chat_ended = video_chat_ended;
        this.video_chat_participants_invited = video_chat_participants_invited;
        this.web_app_data = web_app_data;
        this.reply_markup = reply_markup
      }
      get message_id() {
        return this._message_id;
      }
      get message_thread_id() {
        return this._message_thread_id;
      }
      get from() {
        return new Type().User(this._from);
      }
      get sender_chat() {
        return new Type().Chat(this._sender_chat);
      }
      get date() {
        return this._date;
      }
      get chat() {
        return new Type().Chat(this._chat);
      }
      get forward_from() {
        return new Type().User(this._forward_from);
      }
      get forward_from_chat() {
        return new Type().Chat(this._forward_from_chat);
      }
      get forward_from_message_id() {
        return this._forward_from_message_id;
      }
      get forward_signature() {
        return this._forward_signature;
      }
      get forward_sender_name() {
        return this._forward_sender_name;
      }
      get forward_date() {
        return this._forward_date;
      }
      get is_topic_message() {
        return this._is_topic_message;
      }
      get is_automatic_forward() {
        return this._is_automatic_forward;
      }
      get reply_to_message() {
        return new Type().Message(this._reply_to_message);
      }
      get via_bot() {
        return new Type().User(this._via_bot);
      }
      get edit_date() {
        return this._edit_date;
      }
      get has_protected_content() {
        return this._has_protected_content;
      }
      get media_group_id() {
        return this._media_group_id;
      }
      get author_signature() {
        return this._author_signature;
      }
      get text() {
        return this._text;
      }
      get entities() {
        return this._entities.map(function (element) {
          return new Type().MessageEntity(element)
        });
      }
      get animation() {
        return new Type().Animation(this._animation);
      }
      get audio() {
        return new Type().Audio(this._audio);
      }
      get document() {
        return new Type().Document(this._document);
      }
      get photo() {
        return this._photo.map(function (element) {
          return new Type().PhotoSize(element)
        });
      }
      get sticker() {
        return new Type().Sticker(this._sticker);
      }
      get video() {
        return new Type().Video(this._video);
      }
      get video_note() {
        return new Type().VideoNote(this._video_note);
      }
      get voice() {
        return new Type().Voice(this._voice);
      }
      get caption() {
        return this._caption;
      }
      get caption_entities() {
        return this._caption_entities.map(function (element) {
          return new Type().MessageEntity(element);
        });
      }
      get has_media_spoiler() {
        return this._has_media_spoiler;
      }
      get contact() {
        return new Type().Contact(this._contact);
      }
      get dice() {
        return new Type().Dice(this._dice);
      }
      get game() {
        return new Type().Game(this._game);
      }
      get poll() {
        return new Type().Poll(this._poll);
      }
      get venue() {
        return new Type().Venue(this._venue);
      }
      get location() {
        return new Type().Location(this._location);
      }
      get new_chat_members() {
        return this._new_chat_members.map(function (element) {
          return new Type().User(element)
        });
      }
      get left_chat_member() {
        return new Type().User(this._left_chat_member);
      }
      get new_chat_title() {
        return this._new_chat_title;
      }
      get new_chat_photo() {
        return this._new_chat_photo;
      }
      get delete_chat_photo() {
        return this._delete_chat_photo;
      }
      get group_chat_created() {
        return this._group_chat_created;
      }
      get supergroup_chat_created() {
        return this._supergroup_chat_created;
      }
      get channel_chat_created() {
        return this._channel_chat_created;
      }
      get message_auto_delete_timer_changed() {
        return new Type().MessageAutoDeleteTimerChanged(this._message_auto_delete_timer_changed);
      }
      get migrate_to_chat_id() {
        return this._migrate_to_chat_id;
      }
      get migrate_from_chat_id() {
        return this._migrate_from_chat_id;
      }
      get pinned_message() {
        return new Type().Message(this._pinned_message);
      }
      get invoice() {
        return new Type().Invoice(this._invoice);
      }
      get successful_payment() {
        return new Type().SuccessfulPayment(this._successful_payment);
      }
      get user_shared() {
        return new Type().UserShared(this._user_shared);
      }
      get chat_shared() {
        return new Type().ChatShared(this._chat_shared);
      }
      get connected_website() {
        return this._connected_website;
      }
      get write_access_allowed() {
        return new Type().WriteAccessAllowed(this._write_access_allowed);
      }
      get passport_data() {
        return new Type().PassportData(this._passport_data);
      }
      get proximity_alert_triggered() {
        return new Type().ProximityAlertTriggered(this._proximity_alert_triggered);
      }
      get forum_topic_created() {
        return new Type().ForumTopicCreated(this._forum_topic_created);
      }
      get forum_topic_edited() {
        return new Type().ForumTopicEdited(this._forum_topic_edited);
      }
      get forum_topic_closed() {
        return new Type().ForumTopicClosed(this._forum_topic_closed);
      }
      get forum_topic_reopened() {
        return new Type().ForumTopicReopened(this._forum_topic_reopened);
      }
      get general_forum_topic_hidden() {
        return new Type().GeneralForumTopicHidden(this._general_forum_topic_hidden);
      }
      get general_forum_topic_unhidden() {
        return new Type().GeneralForumTopicUnhidden(this._general_forum_topic_unhidden);
      }
      get video_chat_scheduled() {
        return new Type().VideoChatScheduled(this._video_chat_scheduled);
      }
      get video_chat_started() {
        return new Type().VideoChatStarted(this._video_chat_started);
      }
      get video_chat_ended() {
        return new Type().VideoChatEnded(this._video_chat_ended);
      }
      get video_chat_participants_invited() {
        return new Type().VideoChatParticipantsInvited(this._video_chat_participants_invited);
      }
      get web_app_data() {
        return new Type().WebAppData(this._web_app_data);
      }
      get reply_markup() {
        return new Type().InlineKeyboardMarkup(this._reply_markup);
      }
      set message_id(message_id) {
        this.message_id = message_id;
      }
      set message_thread_id(message_thread_id) {
        this.message_thread_id = message_thread_id;
      }
      set from(from) {
        this.from = from;
      }
      set sender_chat(sender_chat) {
        this.sender_chat = sender_chat;
      }
      set date(date) {
        this.date = date;
      }
      set chat(chat) {
        this.chat = chat;
      }
      set forward_from(forward_from) {
        this.forward_from = forward_from;
      }
      set forward_from_chat(forward_from_chat) {
        this.forward_from_chat = forward_from_chat;
      }
      set forward_from_message_id(forward_from_message_id) {
        this.forward_from_message_id = forward_from_message_id;
      }
      set forward_signature(forward_signature) {
        this.forward_signature = forward_signature;
      }
      set forward_sender_name(forward_sender_name) {
        this.forward_sender_name = forward_sender_name;
      }
      set forward_date(forward_date) {
        this.forward_date = forward_date;
      }
      set is_topic_message(is_topic_message) {
        this.is_topic_message = is_topic_message;
      }
      set is_automatic_forward(is_automatic_forward) {
        this.is_automatic_forward = is_automatic_forward;
      }
      set reply_to_message(reply_to_message) {
        this.reply_to_message = reply_to_message;
      }
      set via_bot(via_bot) {
        this.via_bot = via_bot;
      }
      set edit_date(edit_date) {
        this.edit_date = edit_date;
      }
      set has_protected_content(has_protected_content) {
        this.has_protected_content = has_protected_content;
      }
      set media_group_id(media_group_id) {
        this.media_group_id = media_group_id;
      }
      set author_signature(author_signature) {
        this.author_signature = author_signature;
      }
      set text(text) {
        this.text = text;
      }
      set entities(entities) {
        this.entities = entities;
      }
      set animation(animation) {
        this.animation = animation;
      }
      set audio(audio) {
        this.audio = audio;
      }
      set document(document) {
        this.document = document;
      }
      set photo(photo) {
        this.photo = photo;
      }
      set sticker(sticker) {
        this.sticker = sticker;
      }
      set video(video) {
        this.video = video;
      }
      set video_note(video_note) {
        this.video_note = video_note;
      }
      set voice(voice) {
        this.voice = voice;
      }
      set caption(caption) {
        this.caption = caption;
      }
      set caption_entities(caption_entities) {
        this.caption_entities = caption_entities;
      }
      set has_media_spoiler(has_media_spoiler) {
        this.has_media_spoiler = has_media_spoiler;
      }
      set contact(contact) {
        this.contact = contact;
      }
      set dice(dice) {
        this.dice = dice;
      }
      set game(game) {
        this.game = game;
      }
      set poll(poll) {
        this.poll = poll;
      }
      set venue(venue) {
        this.venue = venue;
      }
      set location(location) {
        this.location = location;
      }
      set new_chat_members(new_chat_members) {
        this.new_chat_members = new_chat_members;
      }
      set left_chat_member(left_chat_member) {
        this.left_chat_member = left_chat_member;
      }
      set new_chat_title(new_chat_title) {
        this.new_chat_title = new_chat_title;
      }
      set new_chat_photo(new_chat_photo) {
        this.new_chat_photo = new_chat_photo;
      }
      set delete_chat_photo(delete_chat_photo) {
        this.delete_chat_photo = delete_chat_photo;
      }
      set group_chat_created(group_chat_created) {
        this.group_chat_created = group_chat_created;
      }
      set supergroup_chat_created(supergroup_chat_created) {
        this.supergroup_chat_created = supergroup_chat_created;
      }
      set channel_chat_created(channel_chat_created) {
        this.channel_chat_created = channel_chat_created;
      }
      set message_auto_delete_timer_changed(message_auto_delete_timer_changed) {
        this.message_auto_delete_timer_changed = message_auto_delete_timer_changed;
      }
      set migrate_to_chat_id(migrate_to_chat_id) {
        this.migrate_to_chat_id = migrate_to_chat_id;
      }
      set migrate_from_chat_id(migrate_from_chat_id) {
        this.migrate_from_chat_id = migrate_from_chat_id;
      }
      set pinned_message(pinned_message) {
        this.pinned_message = message_thread_id;
      }
      set invoice(invoice) {
        this.invoice = message_thread_id;
      }
      set successful_payment(successful_payment) {
        this.successful_payment = successful_payment;
      }
      set user_shared(user_shared) {
        this.user_shared = user_shared;
      }
      set chat_shared(chat_shared) {
        this.chat_shared = chat_shared;
      }
      set connected_website(connected_website) {
        this.connected_website = connected_website;
      }
      set write_access_allowed(write_access_allowed) {
        this.write_access_allowed = write_access_allowed;
      }
      set passport_data(passport_data) {
        this.passport_data = passport_data;
      }
      set proximity_alert_triggered(proximity_alert_triggered) {
        this.proximity_alert_triggered = proximity_alert_triggered;
      }
      set forum_topic_created(forum_topic_created) {
        this.forum_topic_created = forum_topic_created;
      }
      set forum_topic_edited(forum_topic_edited) {
        this.forum_topic_edited = forum_topic_edited;
      }
      set forum_topic_closed(forum_topic_closed) {
        this.forum_topic_closed = forum_topic_closed;
      }
      set forum_topic_reopened(forum_topic_reopened) {
        this.forum_topic_reopened = forum_topic_reopened;
      }
      set general_forum_topic_hidden(general_forum_topic_hidden) {
        this.general_forum_topic_hidden = general_forum_topic_hidden;
      }
      set general_forum_topic_unhidden(general_forum_topic_unhidden) {
        this.general_forum_topic_unhidden = general_forum_topic_unhidden;
      }
      set video_chat_scheduled(video_chat_scheduled) {
        this.video_chat_scheduled = video_chat_scheduled;
      }
      set video_chat_started(video_chat_started) {
        this.video_chat_started = video_chat_started;
      }
      set video_chat_ended(video_chat_ended) {
        this.video_chat_ended = video_chat_ended;
      }
      set video_chat_participants_invited(video_chat_participants_invited) {
        this.video_chat_participants_invited = video_chat_participants_invited;
      }
      set web_app_data(web_app_data) {
        this.web_app_data = web_app_data;
      }
      set reply_markup(reply_markup) {
        this.reply_markup = reply_markup;
      }
    }
    return new Message(params);
  }

  /**
   * @method MessageId
   * @param {Object} params
   * @param {Number} params.message_id - The unique identifier for the target message
   * @returns {MessageId}
   */
  MessageId(params = {
    message_id
  }) {
    class MessageId {
      constructor({
        message_id
      }) {
        this.message_id = message_id;
      }
      get() {
        return this._message_id
      }
    }
    return new MessageId(params);
  }

  /**
   * @method MessageEntity
   * @param {Object} params - An object containing the parameters for the MessageEntity
   * @param {String} params.type - The type of the entity
   * @param {Number} params.offset - The offset of the entity
   * @param {Number} params.length - The length of the entity
   * @param {String} params.url - The URL of the entity
   * @param {Object} params.user - The user associated with the entity
   * @param {String} params.language - The language of the entity
   * @param {String} params.custom_emoji_id - The custom emoji id of the entity
   * @returns {MessageEntity} A new MessageEntity object
   */
  MessageEntity(params = {
    type,
    offset,
    length,
    url,
    user,
    language,
    custom_emoji_id
  }) {
    class MessageEntity {
      constructor({
        type,
        offset,
        length,
        url,
        user,
        language,
        custom_emoji_id
      }) {
        this.type = type;
        this.offset = offset;
        this.lengthv = length;
        this.url = url;
        this.user = user;
        this.language = language;
        this.custom_emoji_id = custom_emoji_id;
      }
      get type() {
        return this._type;
      }
      get offset() {
        return this._offset;
      }
      get length() {
        return this._length;
      }
      get url() {
        return this._url;
      }
      get user() {
        return new Type().User(this._user);
      }
      get language() {
        return this._language;
      }
      get custom_emoji_id() {
        return this._custom_emoji_id;
      }
    }
    return new MessageEntity(params);
  }

  /**
   * @method PhotoSize
   * @param {Object} params - An object containing the parameters for the PhotoSize
   * @param {string} params.file_id - Unique identifier for this file
   * @param {string} params.file_unique_id - Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   * @param {number} params.width - Photo width
   * @param {number} params.height - Photo height
   * @param {number} params.file_size - File size
   * @returns {PhotoSize} A new PhotoSize object
   */
  PhotoSize(params = {
    file_id,
    file_unique_id,
    width,
    height,
    file_size
  }) {
    class PhotoSize {
      constructor({
        file_id,
        file_unique_id,
        width,
        height,
        file_size
      }) {
        this.file_id = file_id;
        this.file_unique_id = file_unique_id;
        this.width = width;
        this.height = height;
        this.file_size = file_size;
      }
      get file_id() {
        return this._file_id;
      }
      get file_unique_id() {
        return this._file_unique_id;
      }
      get width() {
        return this._width;
      }
      get height() {
        return this._height;
      }
      get file_size() {
        return this._file_size;
      }
    }
    return new PhotoSize(params);
  }

  /**
   * @method Animation
   * @param {Object} params - Parameters for creating an Animation object
   * @param {String} params.file_id - Unique file identifier
   * @param {String} params.file_unique_id - Unique file identifier
   * @param {Number} params.width - Video width as defined by sender
   * @param {Number} params.height - Video height as defined by sender
   * @param {Number} params.duration - Duration of the video in seconds as defined by sender
   * @param {Object} params.thumbnail - Optional. Animation thumbnail as defined by sender
   * @param {String} params.file_name - Optional. Original animation filename as defined by sender
   * @param {String} params.mime_type - Optional. MIME type of the file as defined by sender
   * @param {Number} params.file_size - Optional. File size
   * @returns {Animation} - Returns an Animation object
   */
  Animation(params = {
    file_id,
    file_unique_id,
    width,
    height,
    duration,
    thumbnail,
    file_name,
    mime_type,
    file_size
  }) {
    class Animation {
      constructor({
        file_id,
        file_unique_id,
        width,
        height,
        duration,
        thumbnail,
        file_name,
        mime_type,
        file_size
      }) {
        this.file_id = file_id;
        this.file_unique_id = file_unique_id;
        this.width = width;
        this.height = height;
        this.duration = duration;
        this.thumbnail = thumbnail;
        this.file_name = file_name;
        this.mime_type = mime_type;
        this.file_size = file_size;
      }
      get file_id() {
        return this._file_id;
      }
      get file_unique_id() {
        return this._file_unique_id;
      }
      get width() {
        return this._width;
      }
      get height() {
        return this._height;
      }
      get duration() {
        return this._duration;
      }
      get thumbnail() {
        return new Type().PhotoSize(this._thumbnail);
      }
      get file_name() {
        return this._file_name;
      }
      get mime_type() {
        return this._mime_type;
      }
      get file_size() {
        return this._file_size;
      }
    }
    return new Animation(params);
  }

  /**
   * @method Audio
   * @param {Object} params - An object containing the parameters for the audio
   * @param {String} params.file_id - Unique identifier for this file
   * @param {String} params.file_unique_id - Unique identifier for this file, which is supposed to be the same over time and for different bots
   * @param {Number} params.duration - Duration of the audio in seconds as defined by sender
   * @param {String} params.performer - Performer of the audio as defined by sender or by audio tags
   * @param {String} params.title - Title of the audio as defined by sender or by audio tags
   * @param {String} params.file_name - Original filename as defined by sender
   * @param {String} params.mime_type - MIME type of the file as defined by sender
   * @param {Number} params.file_size - File size
   * @param {Object} params.thumbnail - Optional. Thumbnail of the album cover to which the music file belongs
   * @returns {Audio} An object containing the audio data
   */
  Audio(params = {
    file_id,
    file_unique_id,
    duration,
    performer,
    title,
    file_name,
    mime_type,
    file_size,
    thumbnail
  }) {
    class Audio {
      constructor({
        file_id,
        file_unique_id,
        duration,
        performer,
        title,
        file_name,
        mime_type,
        file_size,
        thumbnail
      }) {
        this.file_id = file_id;
        this.file_unique_id = file_unique_id;
        this.duration = duration;
        this.performer = performer;
        this.title = title;
        this.file_name = file_name;
        this.mime_type = mime_type;
        this.file_size = file_size;
        this.thumbnail = thumbnail;
      }
      get file_id() {
        return this._file_id;
      }
      get file_unique_id() {
        return this._file_unique_id;
      }
      get duration() {
        return this._duration;
      }
      get performer() {
        return this._performer;
      }
      get title() {
        return this._title;
      }
      get file_name() {
        return this._file_name;
      }
      get mime_type() {
        return this._mime_type;
      }
      get file_size() {
        return this._file_size;
      }
      get thumbnail() {
        return new Type().PhotoSize(this._thumbnail);
      }
    }
    return new Audio(params);
  }

  /**
   * @method Document
   * @param {Object} params - An object containing the parameters for the Document
   * @param {String} params.file_id - The file ID of the document
   * @param {String} params.file_unique_id - The unique ID of the document
   * @param {Object} params.thumbnail - An object containing the thumbnail of the document
   * @param {String} params.file_name - The name of the document
   * @param {String} params.mime_type - The MIME type of the document
   * @param {Number} params.file_size - The size of the document
   * @returns {Document} A new Document object
   */
  Document(params = {
    file_id,
    file_unique_id,
    thumbnail,
    file_name,
    mime_type,
    file_size
  }) {
    class Document {
      constructor({
        file_id,
        file_unique_id,
        thumbnail,
        file_name,
        mime_type,
        file_size
      }) {
        this.file_id = file_id;
        this.file_unique_id = file_unique_id;
        this.thumbnail = thumbnail;
        this.file_name = file_name;
        this.mime_type = mime_type;
        this.file_size = file_size;
      }
      get file_id() {
        return this._file_id;
      }
      get file_unique_id() {
        return this._file_unique_id;
      }
      get thumbnail() {
        return new Type().PhotoSize(this._thumbnail);
      }
      get file_name() {
        return this._file_name;
      }
      get mime_type() {
        return this._mime_type;
      }
      get file_size() {
        return this._file_size;
      }
    }
    return new Document(params);
  }

  /**
   * @method Video
   * @param {Object} params - An object containing the parameters for the video
   * @param {String} params.file_id - Unique identifier for this file
   * @param {String} params.file_unique_id - Unique identifier for this file, which is supposed to be the same over time and for different bots
   * @param {Number} params.width - Video width as defined by sender
   * @param {Number} params.height - Video height as defined by sender
   * @param {Number} params.duration - Duration of the video in seconds as defined by sender
   * @param {Object} params.thumbnail - Optional. Video thumbnail
   * @param {String} params.file_name - Optional. Original filename as defined by sender
   * @param {String} params.mime_type - Optional. MIME type of the file as defined by sender
   * @param {Number} params.file_size - Optional. File size
   * @returns {Video} A new Video object
   */
  Video(params = {
    file_id,
    file_unique_id,
    width,
    height,
    duration,
    thumbnail,
    file_name,
    mime_type,
    file_size
  }) {
    class Video {
      constructor({
        file_id,
        file_unique_id,
        width,
        height,
        duration,
        thumbnail,
        file_name,
        mime_type,
        file_size
      }) {
        this.file_id = file_id;
        this.file_unique_id = file_unique_id;
        this.width = width;
        this.height = height;
        this.duration = duration;
        this.thumbnail = thumbnail;
        this.file_name = file_name;
        this.mime_type = mime_type;
        this.file_size = file_size;
      }
      get file_id() {
        return this._file_id;
      }
      get file_unique_id() {
        return this._file_unique_id;
      }
      get width() {
        return this._width;
      }
      get height() {
        return this._height;
      }
      get duration() {
        return this._duration;
      }
      get thumbnail() {
        return new Type().PhotoSize(this._thumbnail);
      }
      get file_name() {
        return this._file_name;
      }
      get mime_type() {
        return this._mime_type;
      }
      get file_size() {
        return this._file_size;
      }
    }
    return new Video(params);
  }

  /**
   * @method VideoNote
   * @param {Object} params - An object containing the parameters for the VideoNote
   * @param {String} params.file_id - Unique identifier for this file
   * @param {String} params.file_unique_id - Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   * @param {Number} params.length - Video width and height (diameter of the video message) as defined by sender
   * @param {Number} params.duration - Duration of the video in seconds as defined by sender
   * @param {Object} params.thumbnail - Optional. Video thumbnail
   * @param {Number} params.file_size - Optional. File size
   * @returns {VideoNote} A VideoNote object
   */
  VideoNote(params = {
    file_id,
    file_unique_id,
    length,
    duration,
    thumbnail,
    file_size
  }) {
    class VideoNote {
      constructor({
        file_id,
        file_unique_id,
        length,
        duration,
        thumbnail,
        file_size
      }) {
        this.file_id = file_id;
        this.file_unique_id = file_unique_id;
        this.length = length;
        this.duration = duration;
        this.thumbnail = thumbnail;
        this.file_size = file_size;
      }
      get file_id() {
        return this._file_id;
      }
      get file_unique_id() {
        return this._file_unique_id;
      }
      get length() {
        return this._length;
      }
      get duration() {
        return this._duration;
      }
      get thumbnail() {
        return new Type().PhotoSize(this._thumbnail);
      }
      get file_size() {
        return this._file_size;
      }
    }
    return new VideoNote(params);
  }

  /**
   * @method Voice
   * @param {Object} params - An object containing the parameters for the Voice data type.
   * @param {String} params.file_id - Unique identifier for this file.
   * @param {String} params.file_unique_id - Unique identifier for this file, which is supposed to be the same over time and for different bots.
   * @param {Number} params.duration - Duration of the audio in seconds as defined by sender.
   * @param {String} params.mime_type - Optional. MIME type of the file as defined by sender.
   * @param {Number} params.file_size - Optional. File size.
   * @returns {Voice} A new Voice data type object.
   */
  Voice(params = {
    file_id,
    file_unique_id,
    duration,
    mime_type,
    file_size
  }) {
    class Voice {
      constructor({
        file_id,
        file_unique_id,
        duration,
        mime_type,
        file_size
      }) {
        this.file_id = file_id;
        this.file_unique_id = file_unique_id;
        this.duration = duration;
        this.mime_type = mime_type;
        this.file_size = file_size;
      }
      get file_id() {
        return this._file_id;
      }
      get file_unique_id() {
        return this._file_unique_id;
      }
      get duration() {
        return this._duration;
      }
      get mime_type() {
        return this._mime_type;
      }
      get file_size() {
        return this._file_size;
      }
    }
    return new Voice(params);
  }

  /**
  * @method Contact
  * @param {Object} params 
  * @param {Number} params.phone_number - Contact's phone number
  * @param {String} params.first_name - Contact's first name
  * @param {String} params.last_name - Optional. Contact's last name
  * @param {String} params.user_id - Optional. Contact's user identifier in Telegram. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
  * @param {String} params.vcard - Optional. Additional data about the contact in the form of a vCard
  * @returns {Contact} returns an instance of Contact
  */
  Contact(params = {
    phone_number,
    first_name,
    last_name,
    user_id,
    vcard
  }) {
    class Contact {
      constructor({
        phone_number,
        first_name,
        last_name,
        user_id,
        vcard
      }) {
        this.phone_number = phone_number;
        this.first_name = first_name;
        this.last_name = last_name;
        this.user_id = user_id;
        this.vcard = vcard;
      }
      get phone_number() {
        return this._phone_number;
      }
      get first_name() {
        return this._first_name;
      }
      get last_name() {
        return this._last_name;
      }
      get user_id() {
        return this._user_id;
      }
      get vcard() {
        return this._vcard;
      }
    }
    return new Contact(params);
  }

  /**
   * @method Dice
   * @param {Object} params - An object used to create a Dice
   * @param {string} params.emoji - An emoji character
   * @param {number} params.value - A randomly generated number
   * @returns {Dice} A data type with emoji character and a random number
   */
  Dice(params = {
    emoji,
    value
  }) {
    class Dice {
      constructor({
        emoji,
        value
      }) {
        this.emoji = emoji;
        this.value = value;
      }
      get emoji() {
        return this._emoji;
      }
      get value() {
        return this._value;
      }
    }
    return new Dice(params);
  }

  /** 
   * @method PollOption 
   * @param {Object} params - Parameters to construct a new PollOption object 
   * @param {String} params.text - Text of the PollOption object
   * @param {Number} params.voter_count - Voter count of the PollOption object
   * @returns {PollOption} A new object of PollOption 
   */
  PollOption(params = {
    text,
    voter_count
  }) {
    class PollOption {
      constructor({
        text,
        voter_count
      }) {
        this.text = text;
        this.voter_count = voter_count;
      }
      get text() {
        return this._text;
      }
      get voter_count() {
        return this._voter_count;
      }
    }
    return new PollOption(params);
  }

  /**
   * @method PollAnswer
   * @param {Object} params - Parameter object.
   * @param {Number} params.poll_id - The ID of the poll.
   * @param {Object} params.user - A User object that contains data about the user who answered the poll.
   * @param {Number[]} params.option_ids - An array of vote option IDs, chosen by the user. 
   * @return {PollAnswer} An object representing the poll answer.
   */
  PollAnswer(params = {
    poll_id,
    user,
    option_ids
  }) {
    class PollAnswer {
      constructor({
        poll_id,
        user,
        option_ids
      }) {
        this.poll_id = poll_id;
        this.user = user;
        this.option_ids = option_ids;
      }
      get poll_id() {
        return this._poll_id;
      }
      get user() {
        return new Type().User(this._user);
      }
      get option_ids() {
        return this._option_ids;
      }
    }
    return new PollAnswer(params);
  }

  /**
   * @method Poll
   * @param {Object} params - Parameters for creating the Poll object
   * @param {String} params.id - The identifier for the poll
   * @param {String} params.question - The poll question, 1-255 characters
   * @param {Array<Object>} params.options - List of poll options 
   * @param {Number} params.total_voter_count - Number of users that voted in the poll 
   * @param {Boolean} params.is_closed - True, if the poll is closed 
   * @param {Boolean} params.is_anonymous - True, if the poll is anonymous 
   * @param {String} params.type - Type of poll, can be “regular” or “quiz”
   * @param {Boolean} params.allows_multiple_answers - True, if the poll allows multiple answers 
   * @param {String} params.correct_option_id - 0-based identifier of the correct option in a quiz poll 
   * @param {String} params.explanation - Text that is shown when a user chooses an incorrect answer in a quiz poll
   * @param {Array<Object>} params.explanation_entities - Special entities like usernames, URLs, bot commands, etc. that appear in the explanation
   * @param {Number} params.open_period - Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date
   * @param {Number} params.close_date - Point in time (Unix timestamp) when the poll will be automatically closed 
   * @returns {Poll} A new instance of the Poll object
   */
  Poll(params = {
    id,
    question,
    options,
    total_voter_count,
    is_closed,
    is_anonymous,
    type,
    allows_multiple_answers,
    correct_option_id,
    explanation,
    explanation_entities,
    open_period,
    close_date
  }) {
    class Poll {
      constructor({
        id,
        question,
        options,
        total_voter_count,
        is_closed,
        is_anonymous,
        type,
        allows_multiple_answers,
        correct_option_id,
        explanation,
        explanation_entities,
        open_period,
        close_date
      }) {
        this.id = id;
        this.question = question;
        this.options = options;
        this.total_voter_count = total_voter_count;
        this.is_closed = is_closed;
        this.is_anonymous = is_anonymous;
        this.type = type;
        this.allows_multiple_answers = allows_multiple_answers;
        this.correct_option_id = correct_option_id;
        this.explanation = explanation;
        this.explanation_entities = explanation_entities;
        this.open_period = open_period;
        this.close_date = close_date;
      }
      get id() {
        return this._id;
      }
      get question() {
        return this._question;
      }
      get options() {
        return this._options.map(function (element) {
          return new Type().PollOption(element)
        });
      }
      get total_voter_count() {
        return this._total_voter_count;
      }
      get is_closed() {
        return this._is_closed;
      }
      get is_anonymous() {
        return this._is_anonymous;
      }
      get type() {
        return this._type;
      }
      get allows_multiple_answers() {
        return this._allows_multiple_answers;
      }
      get correct_option_id() {
        return this._correct_option_id;
      }
      get explanation() {
        return this._explanation;
      }
      get explanation_entities() {
        return this._explanation_entities.map(function (element) {
          return new Type().MessageEntity(element)
        });
      }
      get open_period() {
        return this._open_period;
      }
      get close_date() {
        return this._close_date;
      }
    }
    return new Poll(params);
  }

  /**
   * @method Location 
   * @param {Object} params 
   * @param {number} params.longitude - Longitude as defined by sender
   * @param {number} params.latitude - Latitude as defined by sender
   * @param {number} params.horizontal_accuracy - Optional. The radius of uncertainty for the location, measured in meters; 0-1500
   * @param {number} params.live_period - Optional. Time relative to the message sending date, during which the location can be updated; in seconds. For active live locations only.
   * @param {number} params.heading - Optional. The direction in which user is moving, in degrees; 1-360. For active live locations only.
   * @param {number} params.proximity_alert_radius - Optional. The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only.
   * @returns {Location}
   */
  Location(params = {
    longitude,
    latitude,
    horizontal_accuracy,
    live_period,
    heading,
    proximity_alert_radius
  }) {
    class Location {
      constructor({
        longitude,
        latitude,
        horizontal_accuracy,
        live_period,
        heading,
        proximity_alert_radius
      }) {
        this.longitude = longitude;
        this.longitude = latitude;
        this.longitude = horizontal_accuracy;
        this.longitude = live_period;
        this.longitude = heading;
        this.longitude = proximity_alert_radius;
      }
      get longitude() {
        return this._longitude;
      }
      get latitude() {
        return this._latitude;
      }
      get horizontal_accuracy() {
        return this._horizontal_accuracy;
      }
      get live_period() {
        return this._live_period;
      }
      get heading() {
        return this._heading;
      }
      get proximity_alert_radius() {
        return this._proximity_alert_radius;
      }
    }
    return new Location(params);
  }

  /**
   * @method Venue
   * @param {Object} params - An object containing the parameters for the Venue data type.
   * @param {Object} params.location - The location of the venue.
   * @param {String} params.title - The title of the venue.
   * @param {String} params.address - The address of the venue.
   * @param {String} params.foursquare_id - The foursquare ID of the venue.
   * @param {String} params.foursquare_type - The foursquare type of the venue.
   * @param {String} params.google_place_id - The Google Place ID of the venue.
   * @param {String} params.google_place_type - The Google Place type of the venue.
   * @returns {Object} A new Venue data type object.
   */
  Venue(params = {
    location,
    title,
    address,
    foursquare_id,
    foursquare_type,
    google_place_id,
    google_place_type
  }) {
    class Venue {
      constructor({
        location,
        title,
        address,
        foursquare_id,
        foursquare_type,
        google_place_id,
        google_place_type
      }) {
        this.location = location;
        this.title = title;
        this.address = address;
        this.foursquare_id = foursquare_id;
        this.foursquare_type = foursquare_type;
        this.google_place_id = google_place_id;
        this.google_place_type = google_place_type;
      }
      get location() {
        return new Type().Location(this._location);
      }
      get title() {
        return this._title;
      }
      get address() {
        return this._address;
      }
      get foursquare_id() {
        return this._foursquare_id;
      }
      get foursquare_type() {
        return this._foursquare_type;
      }
      get google_place_id() {
        return this._google_place_id;
      }
      get google_place_type() {
        return this._google_place_type;
      }
    }
    return new Venue(params);
  }

  /**
   * @method WebAppData
   * @param {object} params - An object of parameters.
   * @param {string} params.data - Data Value.
   * @param {string} params.button_text - Data button text.
   * @returns {WebAppData} - WebAppData object.
   */
  WebAppData(params = {
    data,
    button_text
  }) {
    class WebAppData {
      constructor({
        data,
        button_text
      }) {
        this.data = data;
        this.button_text = button_text;
      }
      get data() {
        return this._data;
      }
      get button_text() {
        return this._button_text;
      }
    }
    return new WebAppData(params);
  }

  /**
   * @method ProximityAlertTriggered
   * @param {object} params An object containing the traveler, watcher and distance.
   * @param {object} params.traveler A traveler object.
   * @param {object} params.watcher A watcher object.
   * @param {number} params.distance The distance between the traveler and watcher.
   * @returns {ProximityAlertTriggered} A ProximityAlertTriggered object.
   */
  ProximityAlertTriggered(params = {
    traveler,
    watcher,
    distance
  }) {
    class ProximityAlertTriggered {
      constructor({
        traveler,
        watcher,
        distance
      }) {
        this.traveler = traveler;
        this.watcher = watcher;
        this.distance = distance;
      }
      get traveler() {
        return new Type().User(this._traveler);
      }
      get watcher() {
        return new Type().User(this._watcher);
      }
      get distance() {
        return this._distance;
      }
    }
    return new ProximityAlertTriggered(params);
  }

  /**
   * @method MessageAutoDeleteTimerChanged
   * @param {Object} params
   * @param {number} params.message_auto_delete_time - time in seconds when telegram bot will delete a message
   * @return {MessageAutoDeleteTimerChanged} object with the message auto delete time
   */
  MessageAutoDeleteTimerChanged(params = {
    message_auto_delete_time
  }) {
    class MessageAutoDeleteTimerChanged {
      constructor({
        message_auto_delete_time
      }) {
        this.message_auto_delete_time = message_auto_delete_time;
      }
      get message_auto_delete_time() {
        return this._message_auto_delete_time;
      }
    }
    return new MessageAutoDeleteTimerChanged(params);
  }

  /**
   * @method ForumTopicCreated
   * @param {Object} params
   * @param {string} params.name - Name of the topic
   * @param {string} params.icon_color - Color of the topic icon in RGB format
   * @param {string} params.icon_custom_emoji_id - Optional. Unique identifier of the custom emoji shown as the topic icon
   * @return {ForumTopicCreated}
   */
  ForumTopicCreated(params = {
    name,
    icon_color,
    icon_custom_emoji_id
  }) {
    class ForumTopicCreated {
      constructor({
        name,
        icon_color,
        icon_custom_emoji_id
      }) {
        this.name = name;
        this.icon_color = icon_color;
        this.icon_custom_emoji_id = icon_custom_emoji_id;
      }
      get name() {
        return this._name;
      }
      get icon_color() {
        return this._icon_color;
      }
      get icon_custom_emoji_id() {
        return this._icon_custom_emoji_id;
      }
    }
    return new ForumTopicCreated(params);
  }

  /**
   * @method ForumTopicClosed
   * @param {Object} params 
   * @returns {ForumTopicClosed}
   */
  ForumTopicClosed(params) {
    class ForumTopicClosed {
      constructor(params) {
        this.params = params;
      }
      get params() {
        return this.params;
      }
    }
    return new ForumTopicClosed(params);
  }

  /**
   * @method ForumTopicEdited
   * @param {Object} params
   * @param {String} params.name - The name of the edited topic
   * @param {String} params.icon_custom_emoji_id - The custom emoji id, if any
   * @returns {ForumTopicEdited} instance of ForumTopicEdited
   */
  ForumTopicEdited(params = {
    name,
    icon_custom_emoji_id
  }) {
    class ForumTopicEdited {
      constructor({
        name,
        icon_custom_emoji_id
      }) {
        this.name = name;
        this.icon_custom_emoji_id = icon_custom_emoji_id;
      }
      get name() {
        return this._name;
      }
      get icon_custom_emoji_id() {
        return this._icon_custom_emoji_id;
      }
    }
    return new ForumTopicEdited(params);
  }

  /**
   * @method ForumTopicReopened
   * @param {Object} params
   * @return {ForumTopicReopened} - Object of ForumTopicReopened
  */
  ForumTopicReopened(params) {
    class ForumTopicReopened {
      constructor(params) {
        this.params = params;
      }
      get params() {
        return this.params;
      }
    }
    return new ForumTopicReopened(params);
  }

  /**
   * @method GeneralForumTopicHidden
   * @param {object} params
   * @returns {GeneralForumTopicHidden}
   */
  GeneralForumTopicHidden(params) {
    class GeneralForumTopicHidden {
      constructor(params) {
        this.params = params;
      }
      get params() {
        return this.params;
      }
    }
    return new GeneralForumTopicHidden(params);
  }

  /**
   * @method GeneralForumTopicUnhidden
   * @param {object} params
   * @returns {GeneralForumTopicUnhidden}
   */
  GeneralForumTopicUnhidden(params) {
    class GeneralForumTopicUnhidden {
      constructor(params) {
        this.params = params;
      }
      get params() {
        return this.params;
      }
    }
    return new GeneralForumTopicUnhidden(params);
  }

  /**
   * @method UserShared
   * @param {object} params - The parameters
   * @param {number} params.request_id - The request ID
   * @param {number} params.user_id - The user ID
   * @returns {UserShared} The new data type as an object
   */
  UserShared(params = {
    request_id,
    user_id
  }) {
    class UserShared {
      constructor({
        request_id,
        user_id
      }) {
        this.request_id = request_id;
        this.user_id = user_id;
      }
      get request_id() {
        return this._request_id;
      }
      get user_id() {
        return this._user_id;
      }
    }
    return new UserShared(params);
  }

  /**
   * @method ChatShared
   * @param {Object} params - Object containing request_id and chat_id
   * @param {string} params.request_id - Request id 
   * @param {string} params.chat_id - Chat id 
   * @returns {ChatShared}
   */
  ChatShared(params = {
    request_id,
    chat_id
  }) {
    class ChatShared {
      constructor({
        request_id,
        chat_id
      }) {
        this.request_id = request_id;
        this.chat_id = chat_id;
      }
      get request_id() {
        return this._request_id;
      }
      get chat_id() {
        return this._chat_id;
      }
    }
    return new ChatShared(params);
  }

  /** 
  * @method WriteAccessAllowed
  * @param {Object} params - The parameters used to create the WriteAccessAllowed instance
  * @returns {WriteAccessAllowed}
  */
  WriteAccessAllowed(params) {
    class WriteAccessAllowed {
      constructor(params) {
        this.params = params;
      }
      get params() {
        return this.params;
      }
    }
    return new WriteAccessAllowed(params);
  }

  /**
   * @method VideoChatScheduled
   * @param {Object} params
   * @param {Date} params.start_date Start date of the Video Chat
   * @return {VideoChatScheduled}
   */
  VideoChatScheduled(params = {
    start_date
  }) {
    class VideoChatScheduled {
      constructor({
        start_date
      }) {
        this.start_date = start_date;
      }
      get start_date() {
        return this._start_date;
      }
    }
    return new VideoChatScheduled(params);
  }

  /**
   * @method VideoChatStarted
   * @param {Object} params
   * @returns {VideoChatStarted} A video chat started object.
   */
  VideoChatStarted(params) {
    class VideoChatStarted {
      constructor(params) {
        this.params = params;
      }
      get params() {
        return this.params;
      }
    }
    return new VideoChatStarted(params);
  }

  /**
   * @method VideoChatEnded
   * @param {Object} params - An object containing the video chat details
   * @param {number} params.duration - Duration of the video chat in seconds
   * @returns {VideoChatEnded}
   */
  VideoChatEnded(params = {
    duration
  }) {
    class VideoChatEnded {
      constructor({
        duration
      }) {
        this.duration = duration;
      }
      get duration() {
        return this._duration;
      }
    }
    return new VideoChatEnded(params);
  }

  /**
   * @method VideoChatParticipantsInvited
   * @param {Object} params
   * @param {Array.<Type.User>} params.users - a list of type User objects
   * @returns {VideoChatParticipantsInvited} - new VideoChatParticipantsInvited object return
   */
  VideoChatParticipantsInvited(params = {
    users
  }) {
    class VideoChatParticipantsInvited {
      constructor({
        users
      }) {
        this.users = users;
      }
      get users() {
        return this._users.map(function (element) {
          return new Type().User(element)
        });
      }
    }
    return new VideoChatParticipantsInvited(params);
  }

  /**
   * @method UserProfilePhotos
   * @param {object} params Parameter object which has `total_count` and `photos`
   * @param {number} params.total_count Total count of photos
   * @param {PhotoSize[][]} params.photos List of photo sizes in different sizes
   * @returns {UserProfilePhotos} Returns an UserProfilePhoto instance
   */
  UserProfilePhotos(params = {
    total_count,
    photos
  }) {
    class UserProfilePhotos {
      constructor({
        total_count,
        photos
      }) {
        this.total_count = total_count;
        this.photos = photos;
      }
      get total_count() {
        return this._total_count;
      }
      get photos() {
        return this._photos, map(function (element_1) {
          return element_1.map(function (element_2) {
            return new Type().PhotoSize(element_2);
          })
        });
      }
    }
    return new UserProfilePhotos(params);
  }

  /**
   * @method File
   * @description This method creates a new File object
   * @param {object} params - Parameters for creating the File object
   * @param {string} params.file_id - The unique identifier of the file
   * @param {string} params.file_unique_id - The unique ID of the file
   * @param {number} params.file_size - The size of the file
   * @param {string} params.file_path - The path of the file
   * @returns {File} A File object
   */
  File(params = {
    file_id,
    file_unique_id,
    file_size,
    file_path
  }) {
    class File {
      constructor({
        file_id,
        file_unique_id,
        file_size,
        file_path
      }) {
        this.file_id = file_id;
        this.file_unique_id = file_unique_id;
        this.file_size = file_size;
        this.file_path = file_path;
      }
      get file_id() {
        return this._file_id;
      }
      get file_unique_id() {
        return this._file_unique_id;
      }
      get file_size() {
        return this._file_size;
      }
      get file_path() {
        return this._file_path;
      }
    }
    return new File(params);
  }

  /**
   * @method WebAppInfo
   * @param {Object} params
   * @param {String} params.url - An HTTPS URL of a Web App to be opened with additional data as specified in Initializing Web Apps
   * @return {WebAppInfo}
   */
  WebAppInfo(params = {
    url
  }) {
    class WebAppInfo {
      constructor({
        url
      }) {
        this.url = url;
      }
      get url() {
        return this._url;
      }
    }
    return new WebAppInfo(params);
  }

  /**
   * @method ReplyKeyboardMarkup
   * @param {Object} params An object of the specified parameters 
   * @param {Array} params.keyboard Array of Array of KeyboardButton objects representing the keyboard
   * @param {Boolean} params.is_persistent Optional Whether the reply keyboard will remain active after first use
   * @param {Boolean} params.resize_keyboard Optional Whether the keyboard must be resized to fit all the buttons
   * @param {Boolean} params.one_time_keyboard Optional Requests clients to hide the keyboard as soon as it's been used
   * @param {String} params.input_field_placeholder Optional The text that appears in the input field
   * @param {Boolean} params.selective Optional Use this parameter selectively
   * @returns {ReplyKeyboardMarkup} Returns an object representing a ReplyKeyboardMarkup object
   */
  ReplyKeyboardMarkup(params = {
    keyboard,
    is_persistent,
    resize_keyboard,
    one_time_keyboard,
    input_field_placeholder,
    selective
  }) {
    class ReplyKeyboardMarkup {
      constructor({
        keyboard,
        is_persistent,
        resize_keyboard,
        one_time_keyboard,
        input_field_placeholder,
        selective
      }) {
        this.keyboard = keyboard;
        this.is_persistent = is_persistent;
        this.resize_keyboard = resize_keyboard;
        this.one_time_keyboard = one_time_keyboard;
        this.input_field_placeholder = input_field_placeholder;
        this.selective = selective;
      }
      get keyboard() {
        return this.keyboard.map(function (element_1) {
          return element_1.map(function (element_2) {
            return new Type().KeyboardButton(element_2);
          })
        });
      }
      get is_persistent() {
        return this.is_persistent;
      }
      get resize_keyboard() {
        return this.resize_keyboard;
      }
      get one_time_keyboard() {
        return this.one_time_keyboard;
      }
      get input_field_placeholder() {
        return this.input_field_placeholder;
      }
      get selective() {
        return this.selective;
      }
    }
    return new ReplyKeyboardMarkup(params);
  }

  /**
   * @method KeyboardButton
   * @param {Object} params 
   * @param {String} params.text - Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed
   * @param {KeyboardButtonRequestUser} params.request_user - Optional. If specified, pressing the button will open a list of suitable users. Tapping on any user will send their identifier to the bot in a “user_shared” service message. Available in private chats only.
   * @param {KeyboardButtonRequestChat} params.request_chat - Optional. If specified, pressing the button will open a list of suitable chats. Tapping on a chat will send its identifier to the bot in a “chat_shared” service message. Available in private chats only.
   * @param {Boolean} params.request_contact - Optional. If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only.
   * @param {Boolean} params.request_location - Optional. If True, the user's current location will be sent when the button is pressed. Available in private chats only.
   * @param {KeyboardButtonPollType} params.request_poll - Optional. If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only.
   * @param {WebAppInfo} params.web_app - Optional. If specified, the described Web App will be launched when the button is pressed. The Web App will be able to send a “web_app_data” service message. Available in private chats only.
   * @returns {KeyboardButton}
   */
  KeyboardButton(params = {
    text,
    request_user,
    request_chat,
    request_contact,
    request_location,
    request_poll,
    web_app
  }) {
    class KeyboardButton {
      constructor({
        text,
        request_user,
        request_chat,
        request_contact,
        request_location,
        request_poll,
        web_app
      }) {
        this.text = text;
        this.request_user = request_user;
        this.request_chat = request_chat;
        this.request_contact = request_contact;
        this.request_location = request_location;
        this.request_poll = request_poll;
        this.web_app = web_app;
      }
      get text() {
        return this._text;
      }
      get request_user() {
        return new Type().KeyboardButtonRequestUser(this._request_user);
      }
      get request_chat() {
        return new Type().KeyboardButtonRequestChat(this._request_chat);
      }
      get request_contact() {
        return this._request_contact;
      }
      get request_location() {
        return this._request_location;
      }
      get request_poll() {
        return new Type().KeyboardButtonPollType(this._request_poll);
      }
      get web_app() {
        return new Type().WebAppInfo(this._web_app);
      }
    }
    return new KeyboardButton(params);
  }

  /**
   * @method KeyboardButtonRequestUser  
   * @param {Object} params - An object containing three properties. 
   * @param {String} params.request_id - A unique identifier of the request you can use to travel back to the bot.  
   * @param {Boolean} params.user_is_bot - Describes if a user is bot or not.
   * @param {Boolean} params.user_is_premium - Describes if a user is a premium subscriber or not.
   * @returns {KeyboardButtonRequestUser}
   */
  KeyboardButtonRequestUser(params = {
    request_id,
    user_is_bot,
    user_is_premium
  }) {
    class KeyboardButtonRequestUser {
      constructor({
        request_id,
        user_is_bot,
        user_is_premium
      }) {
        this.request_id = request_id;
        this.user_is_bot = user_is_bot;
        this.user_is_premium = user_is_premium;
      }
      get request_id() {
        return this._request_id;
      }
      get user_is_bot() {
        return this._user_is_bot;
      }
      get user_is_premium() {
        return this._user_is_premium;
      }
    }
    return new KeyboardButtonRequestUser(params);
  }

  /**
   * Returns a KeyboardButtonRequestChat object with parameters for Telegram bot API
   * @method KeyboardButtonRequestChat
   * @param {Object} params - An object of parameters
   * @param {Number} params.request_id - Id of the request
   * @param {Boolean} params.chat_is_channel - Is chat a channel
   * @param {Boolean} params.chat_is_forum - Is chat a forum
   * @param {Boolean} params.chat_has_username - Does chat have a username
   * @param {Boolean} params.chat_is_created - Is chat created
   * @param {Object} params.user_administrator_rights - Chat administrator rights of the user
   * @param {Object} params.bot_administrator_rights - Chat administrator rights of the bot
   * @param {Boolean} params.bot_is_member - Is bot a member of the chat
   * @returns {KeyboardButtonRequestChat} - A KeyboardButtonRequestChat object
   */
  KeyboardButtonRequestChat(params = {
    request_id,
    chat_is_channel,
    chat_is_forum,
    chat_has_username,
    chat_is_created,
    user_administrator_rights,
    bot_administrator_rights,
    bot_is_member
  }) {
    class KeyboardButtonRequestChat {
      constructor({
        request_id,
        chat_is_channel,
        chat_is_forum,
        chat_has_username,
        chat_is_created,
        user_administrator_rights,
        bot_administrator_rights,
        bot_is_member
      }) {
        this.request_id = request_id;
        this.chat_is_channel = chat_is_channel;
        this.chat_is_forum = chat_is_forum;
        this.chat_has_username = chat_has_username;
        this.chat_is_created = chat_is_created;
        this.user_administrator_rights = user_administrator_rights;
        this.bot_administrator_rights = bot_administrator_rights;
        this.bot_is_member = bot_is_member;
      }
      get request_id() {
        return this.request_id;
      }
      get chat_is_channel() {
        return this.chat_is_channel;
      }
      get chat_is_forum() {
        return this.chat_is_forum;
      }
      get chat_has_username() {
        return this.chat_has_username;
      }
      get chat_is_created() {
        return this.chat_is_created;
      }
      get user_administrator_rights() {
        return new Type().ChatAdministratorRights(this.user_administrator_rights);
      }
      get bot_administrator_rights() {
        return new Type().ChatAdministratorRights(this.bot_administrator_rights);
      }
      get bot_is_member() {
        return this.bot_is_member;
      }
    }
    return new KeyboardButtonRequestChat(params);
  }

  /**
   * @method KeyboardButtonPollType
   * @param {Object} params 
   * @param {String} params.type - Parameter specifying the type of a button used to create the poll 
   * @returns {KeyboardButtonPollType}
   */
  KeyboardButtonPollType(params = {
    type
  }) {
    class KeyboardButtonPollType {
      constructor({
        type
      }) {
        this.type = type;
      }
      get type() {
        return this._type;
      }
    }
    return new KeyboardButtonPollType(params);
  }

  /**
   * @method ReplyKeyboardRemove
   * @param {Object} params - The parameters for the ReplyKeyboardRemove object
   * @param {boolean} params.remove_keyboard - Requests clients to remove the custom keyboard
   * @param {boolean} params.selective - Use this parameter if you want to remove the keyboard for specific users only
   * @returns {ReplyKeyboardRemove} A ReplyKeyboardRemove object
   */
  ReplyKeyboardRemove(params = {
    remove_keyboard,
    selective
  }) {
    class ReplyKeyboardRemove {
      constructor({
        remove_keyboard,
        selective
      }) {
        this.remove_keyboard = remove_keyboard;
        this.selective = selective;
      }
      get remove_keyboard() {
        return this._remove_keyboard;
      }
      get selective() {
        return this._selective;
      }
    }
    return new ReplyKeyboardRemove(params);
  }

  /**
   * @method InlineKeyboardMarkup
   * @param {Object} params - The parameters for the InlineKeyboardMarkup
   * @param {Array} params.inline_keyboard - An array of arrays of InlineKeyboardButton objects
   * @returns {InlineKeyboardMarkup} An InlineKeyboardMarkup object
   */
  InlineKeyboardMarkup(params = {
    inline_keyboard
  }) {
    class InlineKeyboardMarkup {
      constructor({
        inline_keyboard
      }) {
        this.inline_keyboard = inline_keyboard;
      }
      get inline_keyboard() {
        return this._inline_keyboard.map(function (element_1) {
          return element_1.map(function (element_2) {
            return new Type().InlineKeyboardButton(element_2);
          });
        });
      }
    }
    return new InlineKeyboardMarkup(params);
  }

  /**
   * @method InlineKeyboardButton
   * @param {Object} params - An object containing the parameters for the inline keyboard button
   * @param {String} params.text - Label text on the button
   * @param {String} params.url - HTTP or tg:// url to be opened when button is pressed
   * @param {String} params.callback_data - Data to be sent in a callback query to the bot when button is pressed, 1-64 bytes
   * @param {Object} params.web_app - A WebAppInfo object for a web page that will be opened via a button
   * @param {Object} params.login_url - A LoginUrl object for a web page that will be opened via a button
   * @param {String} params.switch_inline_query - If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot‘s username and the specified inline query in the input field. Can be empty, in which case just the bot’s username will be inserted.
   * @param {String} params.switch_inline_query_current_chat - If set, pressing the button will insert the bot‘s username and the specified inline query in the current chat's input field. Can be empty, in which case just the bot’s username will be inserted.
   * @param {Object} params.callback_game - Description of the game that will be launched when the user presses the button
   * @param {Boolean} params.pay - Specify True, to send a Pay button
   * @returns {InlineKeyboardButton} An InlineKeyboardButton object
   */
  InlineKeyboardButton(params = {
    text,
    url,
    callback_data,
    web_app,
    login_url,
    switch_inline_query,
    switch_inline_query_current_chat,
    callback_game,
    pay
  }) {
    class InlineKeyboardButton {
      constructor({
        text,
        url,
        callback_data,
        web_app,
        login_url,
        switch_inline_query,
        switch_inline_query_current_chat,
        callback_game,
        pay
      }) {
        this.text = text;
        this.url = url;
        this.callback_data = callback_data;
        this.web_app = web_app;
        this.login_url = login_url;
        this.switch_inline_query = switch_inline_query;
        this.switch_inline_query_current_chat = switch_inline_query_current_chat;
        this.callback_game = callback_game;
        this.pay = pay;
      }
      get text() {
        return this._text;
      }
      get url() {
        return this._url;
      }
      get callback_data() {
        return this._callback_data;
      }
      get web_app() {
        return new Type().WebAppInfo(this._web_app);
      }
      get login_url() {
        return new Type().LoginUrl(this._login_url);
      }
      get switch_inline_query() {
        return this._switch_inline_query;
      }
      get switch_inline_query_current_chat() {
        return this._switch_inline_query_current_chat;
      }
      get callback_game() {
        return new Type().CallbackGame(this._callback_game);
      }
      get pay() {
        return this._pay;
      }
    }
    return new InlineKeyboardButton(params);
  }

  /**
   * @method LoginUrl
   * @param {Object} params - The parameters for the LoginUrl object
   * @param {String} params.url - The URL of the login page
   * @param {String} params.forward_text - The text to be displayed on the login page
   * @param {String} params.bot_username - The username of the bot
   * @param {Boolean} params.request_write_access - Whether or not to request write access
   * @returns {LoginUrl} - A new LoginUrl object
   */
  LoginUrl(params = {
    url,
    forward_text,
    bot_username,
    request_write_access
  }) {
    class LoginUrl {
      constructor({
        url,
        forward_text,
        bot_username,
        request_write_access
      }) {
        this.url = url;
        this.forward_text = forward_text;
        this.bot_username = bot_username;
        this.request_write_access = request_write_access;
      }
      get url() {
        return this._url;
      }
      get forward_text() {
        return this._forward_text;
      }
      get bot_username() {
        return this._bot_username;
      }
      get request_write_access() {
        return this._request_write_access;
      }
    }
    return new LoginUrl(params);
  }

  /**
   * @method CallbackQuery
   * @param {Object} params - An object containing the parameters for the CallbackQuery
   * @param {String} params.id - Unique identifier for this query
   * @param {Object} params.from - Sender
   * @param {Object} params.message - Message with the callback button that originated the query
   * @param {String} params.inline_message_id - Identifier of the message sent via the bot in inline mode, that originated the query
   * @param {String} params.chat_instance - Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent
   * @param {String} params.data - Data associated with the callback button
   * @param {String} params.game_short_name - Short name of a Game to be returned, serves as the unique identifier for the game
   * @returns {CallbackQuery}  - An object containing the parameters for the CallbackQuery
   */
  CallbackQuery(params = {
    id,
    from,
    message,
    inline_message_id,
    chat_instance,
    data,
    game_short_name
  }) {
    class CallbackQuery {
      constructor({
        id,
        from,
        message,
        inline_message_id,
        chat_instance,
        data,
        game_short_name
      }) {
        this.id = id;
        this.from = from;
        this.message = message;
        this.inline_message_id = inline_message_id;
        this.chat_instance = chat_instance;
        this.data = data;
        this.game_short_name = game_short_name;
      }
      get id() {
        return this._id;
      }
      get from() {
        return new Type().User(this._from);
      }
      get message() {
        return new Type().Message(this._message);
      }
      get inline_message_id() {
        return this._inline_message_id;
      }
      get chat_instance() {
        return this._chat_instance;
      }
      get data() {
        return this._data;
      }
      get game_short_name() {
        return this._game_short_name;
      }
    }
    return new CallbackQuery(params);
  }

  /**
   * @method ForceReply
   * @param {Object} params - An object containing the parameters for the ForceReply.
   * @param {boolean} params.force_reply - Shows reply interface to the user, as if they manually selected the bot's message and tapped 'Reply'.
   * @param {string} params.input_field_placeholder - Optional. Placeholder text of the form.
   * @param {boolean} params.selective - Optional. Use this parameter if you want to force reply from specific users only.
   * @returns {ForceReply} - Returns an instance of the ForceReply class.
   */
  ForceReply(params = {
    force_reply,
    input_field_placeholder,
    selective
  }) {
    class ForceReply {
      constructor({
        force_reply,
        input_field_placeholder,
        selective
      }) {
        this.force_reply = force_reply;
        this.input_field_placeholder = input_field_placeholder;
        this.selective = selective;
      }
      get force_reply() {
        return this._force_reply;
      }
      get input_field_placeholder() {
        return this._input_field_placeholder;
      }
      get selective() {
        return this._selective;
      }
    }
    return new ForceReply(params);
  }

  /**
   * @method ChatPhoto
   * @param {Object} params - An object containing the parameters for the chat photo.
   * @param {String} params.small_file_id - The file_id of the small version of the photo.
   * @param {String} params.small_file_unique_id - The unique_id of the small version of the photo.
   * @param {String} params.big_file_id - The file_id of the big version of the photo.
   * @param {String} params.big_file_unique_id - The unique_id of the big version of the photo.
   * @returns {ChatPhoto} - An object containing the chat photo information.
   */
  ChatPhoto(params = {
    small_file_id,
    small_file_unique_id,
    big_file_id,
    big_file_unique_id
  }) {
    class ChatPhoto {
      constructor({
        small_file_id,
        small_file_unique_id,
        big_file_id,
        big_file_unique_id
      }) {
        this.small_file_id = small_file_id;
        this.small_file_unique_id = small_file_unique_id;
        this.big_file_id = big_file_id;
        this.big_file_unique_id = big_file_unique_id;
      }
      get small_file_id() {
        return this._small_file_id;
      }
      get small_file_unique_id() {
        return this._small_file_unique_id;
      }
      get big_file_id() {
        return this._big_file_id;
      }
      get big_file_unique_id() {
        return this._big_file_unique_id;
      }
    }
    return new ChatPhoto(params);
  }

  /**
   * @method ChatInviteLink
   * @param {Object} params - An object containing the parameters for the ChatInviteLink
   * @param {String} params.invite_link - The invite link of the chat
   * @param {User} params.creator - The creator of the chat
   * @param {Boolean} params.creates_join_request - Whether the chat creates join requests
   * @param {Boolean} params.is_primary - Whether the chat is primary
   * @param {Boolean} params.is_revoked - Whether the chat is revoked
   * @param {String} params.name - The name of the chat
   * @param {Date} params.expire_date - The expiration date of the chat
   * @param {Number} params.member_limit - The member limit of the chat
   * @param {Number} params.pending_join_request_count - The number of pending join requests
   * @returns {ChatInviteLink} A new ChatInviteLink object
   */
  ChatInviteLink(params = {
    invite_link,
    creator,
    creates_join_request,
    is_primary,
    is_revoked,
    name,
    expire_date,
    member_limit,
    pending_join_request_count
  }) {
    class ChatInviteLink {
      constructor({
        invite_link,
        creator,
        creates_join_request,
        is_primary,
        is_revoked,
        name,
        expire_date,
        member_limit,
        pending_join_request_count
      }) {
        this.invite_link = invite_link;
        this.creator = creator;
        this.big_creates_join_requestile_id = creates_join_request;
        this.is_primary = is_primary;
        this.is_revoked = is_revoked;
        this.name = name;
        this.expire_date = expire_date;
        this.member_limit = member_limit;
        this.pending_join_request_count = pending_join_request_count;
      }
      get invite_link() {
        return this._invite_link;
      }
      get creator() {
        return new Type().User(this._creator);
      }
      get big_creates_join_requestile_id() {
        return this._big_creates_join_requestile_id;
      }
      get is_primary() {
        return this._is_primary;
      }
      get is_revoked() {
        return this._is_revoked;
      }
      get name() {
        return this._name;
      }
      get expire_date() {
        return this._expire_date;
      }
      get member_limit() {
        return this._member_limit;
      }
      get pending_join_request_count() {
        return this._pending_join_request_count;
      }
    }
    return new ChatInviteLink(params);
  }

  /**
   * @method ChatAdministratorRights
   * @param {Object} params - An object containing the parameters for the ChatAdministratorRights
   * @param {boolean} params.is_anonymous - Indicates if the administrator is anonymous
   * @param {boolean} params.can_manage_chat - Indicates if the administrator can manage the chat
   * @param {boolean} params.can_delete_messages - Indicates if the administrator can delete messages
   * @param {boolean} params.can_manage_video_chats - Indicates if the administrator can manage video chats
   * @param {boolean} params.can_restrict_members - Indicates if the administrator can restrict members
   * @param {boolean} params.can_promote_members - Indicates if the administrator can promote members
   * @param {boolean} params.can_change_info - Indicates if the administrator can change info
   * @param {boolean} params.can_invite_users - Indicates if the administrator can invite users
   * @param {boolean} params.can_post_messages - Indicates if the administrator can post messages
   * @param {boolean} params.can_edit_messages - Indicates if the administrator can edit messages
   * @param {boolean} params.can_pin_messages - Indicates if the administrator can pin messages
   * @param {boolean} params.can_manage_topics - Indicates if the administrator can manage topics
   * @returns {ChatAdministratorRights} An object containing the ChatAdministratorRights
   */
  ChatAdministratorRights(params = {
    is_anonymous,
    can_manage_chat,
    can_delete_messages,
    can_manage_video_chats,
    can_restrict_members,
    can_promote_members,
    can_change_info,
    can_invite_users,
    can_post_messages,
    can_edit_messages,
    can_pin_messages,
    can_manage_topics
  }) {
    class ChatAdministratorRights {
      constructor({
        is_anonymous,
        can_manage_chat,
        can_delete_messages,
        can_manage_video_chats,
        can_restrict_members,
        can_promote_members,
        can_change_info,
        can_invite_users,
        can_post_messages,
        can_edit_messages,
        can_pin_messages,
        can_manage_topics
      }) {
        this.is_anonymous = is_anonymous;
        this.can_manage_chat = can_manage_chat;
        this.can_delete_messages = can_delete_messages;
        this.can_manage_video_chats = can_manage_video_chats;
        this.can_restrict_members = can_restrict_members;
        this.can_promote_members = can_promote_members;
        this.can_change_info = can_change_info;
        this.can_invite_users = can_invite_users;
        this.can_post_messages = can_post_messages;
        this.can_edit_messages = can_edit_messages;
        this.can_pin_messages = can_pin_messages;
        this.can_manage_topics = can_manage_topics;
      }
      get is_anonymous() {
        return this._is_anonymous;
      }
      get can_manage_chat() {
        return this._can_manage_chat;
      }
      get can_delete_messages() {
        return this._can_delete_messages;
      }
      get can_manage_video_chats() {
        return this._can_manage_video_chats;
      }
      get can_restrict_members() {
        return this._can_restrict_members;
      }
      get can_promote_members() {
        return this._can_promote_members;
      }
      get can_change_info() {
        return this._can_change_info;
      }
      get can_invite_users() {
        return this._can_invite_users;
      }
      get can_post_messages() {
        return this._can_post_messages;
      }
      get can_edit_messages() {
        return this._can_edit_messages;
      }
      get can_pin_messages() {
        return this._can_pin_messages;
      }
      get can_manage_topics() {
        return this._can_manage_topics;
      }
    }
    return new ChatAdministratorRights(params);
  }

  ChatMember(params = {
    // TODO -----------------------------------------------------------------------------------------------------------------
  }) { }

  /**
   * @method ChatMemberOwner
   * @param {Object} params - An object containing the parameters for the ChatMemberOwner
   * @param {String} params.status - The status of the user in the chat
   * @param {User} params.user - An object containing the user's information
   * @param {Boolean} params.is_anonymous - Whether the user is anonymous or not
   * @param {String} params.custom_title - The custom title of the user
   * @returns {ChatMemberOwner} A new ChatMemberOwner object
   */
  ChatMemberOwner(params = {
    status,
    user,
    is_anonymous,
    custom_title
  }) {
    class ChatMemberOwner {
      constructor({
        status,
        user,
        is_anonymous,
        custom_title
      }) {
        this.status = status;
        this.user = user;
        this.is_anonymous = is_anonymous;
        this.custom_title = custom_title;
      }
      get status() {
        return this._status;
      }
      get user() {
        return new Type().User(this._user);
      }
      get is_anonymous() {
        return this._is_anonymous;
      }
      get custom_title() {
        return this._custom_title;
      }
    }
    return new ChatMemberOwner(params);
  }

  /**
   * @method ChatMemberAdministrator
   * @param {Object} params - An object containing the parameters for the ChatMemberAdministrator
   * @param {String} params.status - The status of the user in the chat
   * @param {User} params.user - The user object
   * @param {Boolean} params.can_be_edited - Whether the user can be edited
   * @param {Boolean} params.is_anonymous - Whether the user is anonymous
   * @param {Boolean} params.can_manage_chat - Whether the user can manage the chat
   * @param {Boolean} params.can_delete_messages - Whether the user can delete messages
   * @param {Boolean} params.can_manage_video_chats - Whether the user can manage video chats
   * @param {Boolean} params.can_restrict_members - Whether the user can restrict members
   * @param {Boolean} params.can_promote_members - Whether the user can promote members
   * @param {Boolean} params.can_change_info - Whether the user can change info
   * @param {Boolean} params.can_invite_users - Whether the user can invite users
   * @param {Boolean} params.can_post_messages - Whether the user can post messages
   * @param {Boolean} params.can_edit_messages - Whether the user can edit messages
   * @param {Boolean} params.can_pin_messages - Whether the user can pin messages
   * @param {Boolean} params.can_manage_topics - Whether the user can manage topics
   * @param {String} params.custom_title - The custom title of the user
   * @returns {ChatMemberAdministrator} A new ChatMemberAdministrator object
   */
  ChatMemberAdministrator(params = {
    status,
    user,
    can_be_edited,
    is_anonymous,
    can_manage_chat,
    can_delete_messages,
    can_manage_video_chats,
    can_restrict_members,
    can_promote_members,
    can_change_info,
    can_invite_users,
    can_post_messages,
    can_edit_messages,
    can_pin_messages,
    can_manage_topics,
    custom_title
  }) {
    class ChatMemberAdministrator {
      constructor({
        status,
        user,
        can_be_edited,
        is_anonymous,
        can_manage_chat,
        can_delete_messages,
        can_manage_video_chats,
        can_restrict_members,
        can_promote_members,
        can_change_info,
        can_invite_users,
        can_post_messages,
        can_edit_messages,
        can_pin_messages,
        can_manage_topics,
        custom_title
      }) {
        this.status = status;
        this.user = user;
        this.can_be_edited = can_be_edited;
        this.is_anonymous = is_anonymous;
        this.can_manage_chat = can_manage_chat;
        this.can_delete_messages = can_delete_messages;
        this.can_manage_video_chats = can_manage_video_chats;
        this.can_restrict_members = can_restrict_members;
        this.can_promote_members = can_promote_members;
        this.can_change_info = can_change_info;
        this.can_invite_users = can_invite_users;
        this.can_post_messages = can_post_messages;
        this.can_edit_messages = can_edit_messages;
        this.can_pin_messages = can_pin_messages;
        this.can_manage_topics = can_manage_topics;
        this.custom_title = custom_title;
      }
      get status() {
        return this._status;
      }
      get user() {
        return new Type().User(this._user);
      }
      get can_be_edited() {
        return this._can_be_edited;
      }
      get is_anonymous() {
        return this._is_anonymous;
      }
      get can_manage_chat() {
        return this._can_manage_chat;
      }
      get can_delete_messages() {
        return this._can_delete_messages;
      }
      get can_manage_video_chats() {
        return this._can_manage_video_chats;
      }
      get can_restrict_members() {
        return this._can_restrict_members;
      }
      get can_promote_members() {
        return this._can_promote_members;
      }
      get can_change_info() {
        return this._can_change_info;
      }
      get can_invite_users() {
        return this._can_invite_users;
      }
      get can_post_messages() {
        return this._can_post_messages;
      }
      get can_edit_messages() {
        return this._can_edit_messages;
      }
      get can_pin_messages() {
        return this._can_pin_messages;
      }
      get can_manage_topics() {
        return this._can_manage_topics;
      }
      get custom_title() {
        return this._custom_title;
      }
    }
    return new ChatMemberAdministrator(params);
  }

  /**
   * @method ChatMemberMember
   * @param {Object} params
   * @param {String} params.status - The member's status in the chat, always “member”
   * @param {User} params.user - Information about the user
   * @returns {ChatMemberMember}
   */
  ChatMemberMember(params = {
    status,
    user
  }) {
    class ChatMemberMember {
      constructor({
        status,
        user
      }) {
        this.status = status;
        this.user = user;
      }
      get status() {
        return this._status;
      }
      get user() {
        return new Type().User(this._user);
      }
    }
    return new ChatMemberMember(params);
  }

  /**
   * @method ChatMemberRestricted
   * @param {Object} params - An object containing the parameters for the ChatMemberRestricted data type
   * @param {String} params.status - The status of the chat member
   * @param {User} params.user - The user object of the chat member
   * @param {Boolean} params.is_member - Whether the user is a member of the chat
   * @param {Boolean} params.can_send_messages - Whether the user can send messages
   * @param {Boolean} params.can_send_audios - Whether the user can send audios
   * @param {Boolean} params.can_send_documents - Whether the user can send documents
   * @param {Boolean} params.can_send_photos - Whether the user can send photos
   * @param {Boolean} params.can_send_videos - Whether the user can send videos
   * @param {Boolean} params.can_send_video_notes - Whether the user can send video notes
   * @param {Boolean} params.can_send_voice_notes - Whether the user can send voice notes
   * @param {Boolean} params.can_send_polls - Whether the user can send polls
   * @param {Boolean} params.can_send_other_messages - Whether the user can send other messages
   * @param {Boolean} params.can_add_web_page_previews - Whether the user can add web page previews
   * @param {Boolean} params.can_change_info - Whether the user can change info
   * @param {Boolean} params.can_invite_users - Whether the user can invite users
   * @param {Boolean} params.can_pin_messages - Whether the user can pin messages
   * @param {Boolean} params.can_manage_topics - Whether the user can manage topics
   * @param {Number} params.until_date - The date until which the user is restricted
   * @returns {ChatMemberRestricted} A new ChatMemberRestricted data type object
   */
  ChatMemberRestricted(params = {
    status,
    user,
    is_member,
    can_send_messages,
    can_send_audios,
    can_send_documents,
    can_send_photos,
    can_send_videos,
    can_send_video_notes,
    can_send_voice_notes,
    can_send_polls,
    can_send_other_messages,
    can_add_web_page_previews,
    can_change_info,
    can_invite_users,
    can_pin_messages,
    can_manage_topics,
    until_date
  }) {
    class ChatMemberRestricted {
      constructor({
        status,
        user,
        is_member,
        can_send_messages,
        can_send_audios,
        can_send_documents,
        can_send_photos,
        can_send_videos,
        can_send_video_notes,
        can_send_voice_notes,
        can_send_polls,
        can_send_other_messages,
        can_add_web_page_previews,
        can_change_info,
        can_invite_users,
        can_pin_messages,
        can_manage_topics,
        until_date
      }) {
        this.status = status;
        this.user = user;
        this.is_member = is_member;
        this.can_send_messages = can_send_messages;
        this.can_send_audios = can_send_audios;
        this.can_send_documents = can_send_documents;
        this.can_send_photos = can_send_photos;
        this.can_send_videos = can_send_videos;
        this.can_send_video_notes = can_send_video_notes;
        this.can_send_voice_notes = can_send_voice_notes;
        this.can_send_polls = can_send_polls;
        this.can_send_other_messages = can_send_other_messages;
        this.can_add_web_page_previews = can_add_web_page_previews;
        this.can_change_info = can_change_info;
        this.can_invite_users = can_invite_users;
        this.can_pin_messages = can_pin_messages;
        this.can_manage_topics = can_manage_topics;
        this.until_date = until_date;
      }
      get status() {
        return this._status;
      }
      get user() {
        return new Type().User(this._user);
      }
      get is_member() {
        return this._is_member;
      }
      get can_send_messages() {
        return this._can_send_messages;
      }
      get can_send_audios() {
        return this._can_send_audios;
      }
      get can_send_documents() {
        return this._can_send_documents;
      }
      get can_send_photos() {
        return this._can_send_photos;
      }
      get can_send_videos() {
        return this._can_send_videos;
      }
      get can_send_video_notes() {
        return this._can_send_video_notes;
      }
      get can_send_voice_notes() {
        return this._can_send_voice_notes;
      }
      get can_send_polls() {
        return this._can_send_polls;
      }
      get can_send_other_messages() {
        return this._can_send_other_messages;
      }
      get can_add_web_page_previews() {
        return this._can_add_web_page_previews;
      }
      get can_change_info() {
        return this._can_change_info;
      }
      get can_invite_users() {
        return this._can_invite_users;
      }
      get can_pin_messages() {
        return this._can_pin_messages;
      }
      get can_manage_topics() {
        return this._can_manage_topics;
      }
      get until_date() {
        return this._until_date;
      }
    }
    return new ChatMemberRestricted(params);
  }

  /**
   * @method ChatMemberLeft
   * @param {Object} params
   * @param {String} params.status - The member's status in the chat, always “left”
   * @param {User} params.user - Information about the user
   * @returns {ChatMemberLeft}
   */
  ChatMemberLeft(params = {
    status,
    user
  }) {
    class ChatMemberLeft {
      constructor({
        status,
        user
      }) {
        this.status = status;
        this.user = user;
      }
      get status() {
        return this._status;
      }
      get user() {
        return new Type().User(this._user);
      }
    }
    return new ChatMemberLeft(params);
  }

  /**
   * @method ChatMemberBanned
   * @param {Object} params - An object containing the parameters for the ChatMemberBanned data type
   * @param {String} params.status - The status of the user in the chat
   * @param {Object} params.user - The user object
   * @param {Number} params.until_date - The date until which the user is banned
   * @returns {ChatMemberBanned}
   */
  ChatMemberBanned(params = {
    status,
    user,
    until_date
  }) {
    class ChatMemberBanned {
      constructor({
        status,
        user,
        until_date
      }) {
        this.status = status;
        this.user = user;
        this.until_date = until_date;
      }
      get status() {
        return this._status;
      }
      get user() {
        return new Type().User(this._user);
      }
      get until_date() {
        return this._until_date;
      }
    }
    return new ChatMemberBanned(params);
  }

  /**
   * @method ChatMemberUpdated
   * @param {Object} params - An object containing the parameters for the chat member update
   * @param {Object} params.chat - The chat object
   * @param {Object} params.from - The user object of the user who initiated the update
   * @param {Date} params.date - The date of the update
   * @param {Object} params.old_chat_member - The old chat member object
   * @param {Object} params.new_chat_member - The new chat member object
   * @param {String} params.invite_link - The invite link for the chat
   * @returns {ChatMemberUpdated} A new ChatMemberUpdated object
   */
  ChatMemberUpdated(params = {
    chat,
    from,
    date,
    old_chat_member,
    new_chat_member,
    invite_link
  }) {
    class ChatMemberUpdated {
      constructor({
        chat,
        from,
        date,
        old_chat_member,
        new_chat_member,
        invite_link
      }) {
        this.chat = chat;
        this.from = from;
        this.date = date;
        this.old_chat_member = old_chat_member;
        this.new_chat_member = new_chat_member;
        this.invite_link = invite_link;
      }
      get chat() {
        return new Type().Chat(this._chat);
      }
      get from() {
        return new Type().User(this._from);
      }
      get date() {
        return this._date;
      }
      get old_chat_member() {
        return new Type().ChatMember(this._old_chat_member);
      }
      get new_chat_member() {
        return new Type().ChatMember(this._new_chat_member);
      }
      get invite_link() {
        return new Type().ChatInviteLink(this._invite_link);
      }
    }
    return new ChatMemberUpdated(params);
  }

  /**
   * @method ChatJoinRequest
   * @param {Object} params - An object containing the parameters for the ChatJoinRequest
   * @param {Chat} params.chat - The chat object
   * @param {User} params.from - The user object
   * @param {Number} params.user_chat_id - The user chat id
   * @param {Date} params.date - The date of the request
   * @param {String} params.bio - The user bio
   * @param {ChatInviteLink	} params.invite_link - The invite link
   * @returns {ChatJoinRequest} - A new ChatJoinRequest object
   */
  ChatJoinRequest(params = {
    chat,
    from,
    user_chat_id,
    date,
    bio,
    invite_link
  }) {
    class ChatJoinRequest {
      constructor({
        chat,
        from,
        user_chat_id,
        date,
        bio,
        invite_link
      }) {
        this.chat = chat;
        this.from = from;
        this.user_chat_id = user_chat_id;
        this.date = date;
        this.bio = bio;
        this.invite_link = invite_link;
      }
      get chat() {
        return new Type().Chat(this._chat);
      }
      get from() {
        return new Type().User(this._from);
      }
      get user_chat_id() {
        return this._user_chat_id;
      }
      get date() {
        return this._date;
      }
      get bio() {
        return this._bio;
      }
      get invite_link() {
        return new Type().ChatInviteLink(this._invite_link);
      }
    }
    return new ChatJoinRequest(params);
  }

  /**
   * @method ChatPermissions
   * @param {Object} params - An object containing the parameters for the chat permissions
   * @param {boolean} params.can_send_messages - Whether the user can send messages
   * @param {boolean} params.can_send_audios - Whether the user can send audios
   * @param {boolean} params.can_send_documents - Whether the user can send documents
   * @param {boolean} params.can_send_photos - Whether the user can send photos
   * @param {boolean} params.can_send_videos - Whether the user can send videos
   * @param {boolean} params.can_send_video_notes - Whether the user can send video notes
   * @param {boolean} params.can_send_voice_notes - Whether the user can send voice notes
   * @param {boolean} params.can_send_polls - Whether the user can send polls
   * @param {boolean} params.can_send_other_messages - Whether the user can send other messages
   * @param {boolean} params.can_add_web_page_previews - Whether the user can add web page previews
   * @param {boolean} params.can_change_info - Whether the user can change info
   * @param {boolean} params.can_invite_users - Whether the user can invite users
   * @param {boolean} params.can_pin_messages - Whether the user can pin messages
   * @param {boolean} params.can_manage_topics - Whether the user can manage topics
   * @returns {ChatPermissions} - An object containing the chat permissions
   */
  ChatPermissions(params = {
    can_send_messages,
    can_send_audios,
    can_send_documents,
    can_send_photos,
    can_send_videos,
    can_send_video_notes,
    can_send_voice_notes,
    can_send_polls,
    can_send_other_messages,
    can_add_web_page_previews,
    can_change_info,
    can_invite_users,
    can_pin_messages,
    can_manage_topics
  }) {
    class ChatPermissions {
      constructor({
        can_send_messages,
        can_send_audios,
        can_send_documents,
        can_send_photos,
        can_send_videos,
        can_send_video_notes,
        can_send_voice_notes,
        can_send_polls,
        can_send_other_messages,
        can_add_web_page_previews,
        can_change_info,
        can_invite_users,
        can_pin_messages,
        can_manage_topics
      }) {
        this.can_send_messages = can_send_messages;
        this.can_send_audios = can_send_audios;
        this.can_send_documents = can_send_documents;
        this.can_send_photos = can_send_photos;
        this.can_send_videos = can_send_videos;
        this.can_send_video_notes = can_send_video_notes;
        this.can_send_voice_notes = can_send_voice_notes;
        this.can_send_polls = can_send_polls;
        this.can_send_other_messages = can_send_other_messages;
        this.can_add_web_page_previews = can_add_web_page_previews;
        this.can_change_info = can_change_info;
        this.can_invite_users = can_invite_users;
        this.can_pin_messages = can_pin_messages;
        this.can_manage_topics = can_manage_topics;
      }
      get can_send_messages() {
        return this._can_send_messages;
      }
      get can_send_audios() {
        return this._can_send_audios;
      }
      get can_send_documents() {
        return this._can_send_documents;
      }
      get can_send_photos() {
        return this._can_send_photos;
      }
      get can_send_videos() {
        return this._can_send_videos;
      }
      get can_send_video_notes() {
        return this._can_send_video_notes;
      }
      get can_send_voice_notes() {
        return this._can_send_voice_notes;
      }
      get can_send_polls() {
        return this._can_send_polls;
      }
      get can_send_other_messages() {
        return this._can_send_other_messages;
      }
      get can_add_web_page_previews() {
        return this._can_add_web_page_previews;
      }
      get can_change_info() {
        return this._can_change_info;
      }
      get can_invite_users() {
        return this._can_invite_users;
      }
      get can_pin_messages() {
        return this._can_pin_messages;
      }
      get can_manage_topics() {
        return this._can_manage_topics;
      }
    }
    return new ChatPermissions(params);
  }

  /**
   * @method ChatLocation
   * @param {Object} params - The parameters of the ChatLocation
   * @param {Location} params.location - The location of the ChatLocation
   * @param {String} params.address - The address of the ChatLocation
   * @returns {ChatLocation} - A new ChatLocation object
   */
  ChatLocation(params = {
    location,
    address
  }) {
    class ChatLocation {
      constructor({
        location,
        address
      }) {
        this.location = location;
        this.address = address;
      }
      get location() {
        return new Type().Location(this._location);
      }
      get address() {
        return this._address;
      }
    }
    return new ChatLocation(params);
  }

  /**
   * @method ForumTopic
   * @param {Object} params - An object containing the parameters for the ForumTopic
   * @param {string} params.message_thread_id - The ID of the message thread
   * @param {string} params.name - The name of the forum topic
   * @param {string} params.icon_color - The color of the forum topic icon
   * @param {string} params.icon_custom_emoji_id - The ID of the custom emoji for the forum topic icon
   * @returns {ForumTopic} A new ForumTopic object
   */
  ForumTopic(params = {
    message_thread_id,
    name,
    icon_color,
    icon_custom_emoji_id
  }) {
    class ForumTopic {
      constructor({
        message_thread_id,
        name,
        icon_color,
        icon_custom_emoji_id
      }) {
        this.message_thread_id = message_thread_id;
        this.name = name;
        this.icon_color = icon_color;
        this.icon_custom_emoji_id = icon_custom_emoji_id;
      }
      get message_thread_id() {
        return this._message_thread_id;
      }
      get name() {
        return this._name;
      }
      get icon_color() {
        return this._icon_color;
      }
      get icon_custom_emoji_id() {
        return this._icon_custom_emoji_id;
      }
    }
    return new ForumTopic(params);
  }

  /**
   * @method BotCommand
   * @param {Object} params - The parameters for the BotCommand
   * @param {String} params.command - The command for the BotCommand
   * @param {String} params.description - The description for the BotCommand
   * @returns {BotCommand} - A new BotCommand object
   */
  BotCommand(params = {
    command,
    description
  }) {
    class BotCommand {
      constructor({
        command,
        description
      }) {
        this.command = command;
        this.description = description;
      }
      get command() {
        return this._command;
      }
      get description() {
        return this._description;
      }
    }
    return new BotCommand(params);
  }

  BotCommandScope(params = {
    // TODO -----------------------------------------------------------------------------------------------------------------
  }) { }

  /**
   * @method BotCommandScopeDefault
   * @param {Object} params
   * @param {String} params.type - Scope type, must be default
   * @returns {BotCommandScopeDefault}
   */
  BotCommandScopeDefault(params = {
    type
  }) {
    class BotCommandScopeDefault {
      constructor({
        type
      }) {
        this.type = type;
      }
      get type() {
        return this._type;
      }
    }
    return new BotCommandScopeDefault(params);
  }

  /**
   * @method BotCommandScopeAllPrivateChats
   * @param {Object} params
   * @param {String} params.type - Scope type, must be all_private_chats
   * @returns {BotCommandScopeAllPrivateChats}
   */
  BotCommandScopeAllPrivateChats(params = {
    type
  }) {
    class BotCommandScopeAllPrivateChats {
      constructor({
        type
      }) {
        this.type = type;
      }
      get type() {
        return this._type;
      }
    }
    return new BotCommandScopeAllPrivateChats(params);
  }

  /**
   * @method BotCommandScopeAllGroupChats
   * @param {Object} params
   * @param {String} params.type - Scope type, must be all_chat_administrators
   * @returns {BotCommandScopeAllGroupChats}
   */
  BotCommandScopeAllGroupChats(params = {
    type
  }) {
    class BotCommandScopeAllGroupChats {
      constructor({
        type
      }) {
        this.type = type;
      }
      get type() {
        return this._type;
      }
    }
    return new BotCommandScopeAllGroupChats(params);
  }

  /**
   * @method BotCommandScopeAllChatAdministrators
   * @param {Object} params
   * @param {String} params.type - Scope type, must be chat_administrators
   * @param {Number} params.chat_id - Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   * @returns {BotCommandScopeAllChatAdministrators}
   */
  BotCommandScopeAllChatAdministrators(params = {
    type,
    chat_id
  }) {
    class BotCommandScopeAllChatAdministrators {
      constructor({
        type,
        chat_id
      }) {
        this.type = type;
        this.chat_id = chat_id;
      }
      get type() {
        return this._type;
      }
      get chat_id() {
        return this._chat_id;
      }
    }
    return new BotCommandScopeAllChatAdministrators(params);
  }

  /**
   * @method BotCommandScopeChat
   * @param {Object} params - An object containing the type and chat_id of the bot command scope chat
   * @param {String} params.type - The type of the bot command scope chat
   * @param {Number} params.chat_id - The chat id of the bot command scope chat
   * @returns {BotCommandScopeChat} - A new BotCommandScopeChat object
   */
  BotCommandScopeChat(params = {
    type,
    chat_id
  }) {
    class BotCommandScopeChat {
      constructor({
        type,
        chat_id
      }) {
        this.type = type;
        this.chat_id = chat_id;
      }
      get type() {
        return this._type;
      }
      get chat_id() {
        return this._chat_id;
      }
    }
    return new BotCommandScopeChat(params);
  }

  /**
   * @method BotCommandScopeChatAdministrators
   * @param {Object} params
   * @param {String} params.type - Scope type, must be chat_administrators
   * @param {Number} params.chat_id - Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   * @returns {BotCommandScopeChatAdministrators}
   */
  BotCommandScopeChatAdministrators(params = {
    type,
    chat_id
  }) {
    class BotCommandScopeChatAdministrators {
      constructor({
        type,
        chat_id
      }) {
        this.type = type;
        this.chat_id = chat_id;
      }
      get type() {
        return this._type;
      }
      get chat_id() {
        return this._chat_id;
      }
    }
    return new BotCommandScopeChatAdministrators(params);
  }

  /**
   * @method BotCommandScopeChatMember
   * @param {Object} params - An object containing the parameters for the BotCommandScopeChatMember
   * @param {String} params.type - Scope type, must be chat_member
   * @param {Number} params.chat_id - Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   * @param {Number} params.user_id - Unique identifier of the target user
   * @returns {BotCommandScopeChatMember} A new BotCommandScopeChatMember object
   */
  BotCommandScopeChatMember(params = {
    type,
    chat_id,
    user_id
  }) {
    class BotCommandScopeChatMember {
      constructor({
        type,
        chat_id,
        user_id
      }) {
        this.type = type;
        this.chat_id = chat_id;
        this.user_id = user_id;
      }
      get type() {
        return this._type;
      }
      get chat_id() {
        return this._chat_id;
      }
      get user_id() {
        return this._user_id;
      }
    }
    return new BotCommandScopeChatMember(params);
  }

  /**
   * @method BotDescription
   * @param {Object} params - The parameters for the BotDescription
   * @param {String} params.description - The description of the bot
   * @returns {BotDescription} - A new BotDescription object
   */
  BotDescription(params = {
    description
  }) {
    class BotDescription {
      constructor({
        description
      }) {
        this.description = description;
      }
      get description() {
        return this._description;
      }
    }
    return new BotDescription(params);
  }

  /**
   * @method BotShortDescription
   * @param {Object} params - The parameters for the BotShortDescription
   * @param {String} params.short_description - The bot's short description
   * @returns {BotShortDescription}
   */
  BotShortDescription(params = {
    short_description
  }) {
    class BotShortDescription {
      constructor({
        short_description
      }) {
        this.short_description = short_description;
      }
      get short_description() {
        return this._short_description;
      }
    }
    return new BotShortDescription(params);
  }

  MenuButton(params = {
    // TODO -----------------------------------------------------------------------------------------------------------------
  }) { }

  /**
   * @method MenuButtonCommands
   * @param {Object} params
   * @param {String} params.type - Type of the button, must be commands
   * @returns {MenuButtonCommands}
   */
  MenuButtonCommands(params = {
    type
  }) {
    class MenuButtonCommands {
      constructor({
        type
      }) {
        this.type = type;
      }
      get type() {
        return this._type;
      }
    }
    return new MenuButtonCommands(params);
  }

  /**
   * @method MenuButtonWebApp
   * @param {Object} params - The parameters for the MenuButtonWebApp
   * @param {String} params.type - The type of the button
   * @param {String} params.text - The text of the button
   * @param {WebAppInfo} params.web_app - The web app of the button
   * @returns {MenuButtonWebApp} - A new MenuButtonWebApp object
   */
  MenuButtonWebApp(params = {
    type,
    text,
    web_app
  }) {
    class MenuButtonWebApp {
      constructor({
        type,
        text,
        web_app
      }) {
        this.type = type;
        this.text = text;
        this.web_app = web_app;
      }
      get type() {
        return this._type;
      }
      get text() {
        return this._text;
      }
      get web_app() {
        return new Type().WebAppInfo(this._web_app);
      }
    }
    return new MenuButtonWebApp(params);
  }

  /**
   * @method MenuButtonDefault
   * @param {Object} params
   * @param {String} params.type - Type of the button, must be default
   * @returns {MenuButtonDefault}
   */
  MenuButtonDefault(params = {
    type
  }) {
    class MenuButtonDefault {
      constructor({
        type
      }) {
        this.type = type;
      }
      get type() {
        return this._type;
      }
    }
    return new MenuButtonDefault(params);
  }

  /**
   * @method ResponseParameters
   * @param {Object} params - Parameters for the response
   * @param {Number} params.migrate_to_chat_id - The chat id to migrate to
   * @param {Number} params.retry_after - The time to wait before retrying
   * @returns {ResponseParameters} - A new ResponseParameters object
   */
  ResponseParameters(params = {
    migrate_to_chat_id,
    retry_after
  }) {
    class ResponseParameters {
      constructor({
        migrate_to_chat_id,
        retry_after
      }) {
        this.migrate_to_chat_id = migrate_to_chat_id;
        this.retry_after = retry_after;
      }
      get migrate_to_chat_id() {
        return this._migrate_to_chat_id;
      }
      get retry_after() {
        return this._retry_after;
      }
    }
    return new ResponseParameters(params);
  }

  InputMedia(params = {
    // TODO -----------------------------------------------------------------------------------------------------------------
  }) { }

  /**
   * @method InputMediaPhoto
   * @param {Object} params - An object containing the parameters for the InputMediaPhoto
   * @param {String} params.type - The type of the media
   * @param {String} params.media - The media file to send
   * @param {String} params.caption - The caption of the media
   * @param {String} params.parse_mode - The parse mode of the caption
   * @param {Array} params.caption_entities - An array of caption entities
   * @param {Boolean} params.has_spoiler - Whether the media contains a spoiler
   * @returns {InputMediaPhoto} - An object containing the parameters for the InputMediaPhoto
   */
  InputMediaPhoto(params = {
    type,
    media,
    caption,
    parse_mode,
    caption_entities,
    has_spoiler
  }) {
    class InputMediaPhoto {
      constructor({
        type,
        media,
        caption,
        parse_mode,
        caption_entities,
        has_spoiler
      }) {
        this.type = type;
        this.media = media;
        this.caption = caption;
        this.parse_mode = parse_mode;
        this.caption_entities = caption_entities;
        this.has_spoiler = has_spoiler;
      }
      get type() {
        return this._type;
      }
      get media() {
        return this._media;
      }
      get caption() {
        return this._caption;
      }
      get parse_mode() {
        return this._parse_mode;
      }
      get caption_entities() {
        return this._caption_entities.map(element => {
          return new Type().MessageEntity(element);
        });
      }
      get has_spoiler() {
        return this._has_spoiler;
      }
    }
    return new InputMediaPhoto(params);
  }

  /**
   * @method InputMediaVideo
   * @param {Object} params - An object containing the parameters for the InputMediaVideo
   * @param {String} params.type - The type of the media
   * @param {String} params.media - File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name
   * @param {InputFile|String} params.thumbnail - Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side
   * @param {String} params.caption - Optional. Caption of the video to be sent, 0-1024 characters
   * @param {String} params.parse_mode - Optional. Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption
   * @param {Object} params.caption_entities - Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   * @param {Number} params.width - Optional. Video width
   * @param {Number} params.height - Optional. Video height
   * @param {Number} params.duration - Optional. Video duration
   * @param {Boolean} params.supports_streaming - Optional. Pass True, if the uploaded video is suitable for streaming
   * @param {Boolean} params.has_spoiler - Optional. Pass True, if the uploaded video contains a spoiler
   * @returns {InputMediaVideo} An object containing the parameters for the InputMediaVideo
   */
  InputMediaVideo(params = {
    type,
    media,
    thumbnail,
    caption,
    parse_mode,
    caption_entities,
    width,
    height,
    duration,
    supports_streaming,
    has_spoiler
  }) {
    class InputMediaVideo {
      constructor({
        type,
        media,
        thumbnail,
        caption,
        parse_mode,
        caption_entities,
        width,
        height,
        duration,
        supports_streaming,
        has_spoiler
      }) {
        this.type = type;
        this.media = media;
        this.thumbnail = thumbnail;
        this.caption = caption;
        this.parse_mode = parse_mode;
        this.caption_entities = caption_entities;
        this.width = width;
        this.height = height;
        this.duration = duration;
        this.supports_streaming = supports_streaming;
        this.has_spoiler = has_spoiler;
      }
      get type() {
        return this._type;
      }
      get media() {
        return this._media;
      }
      get thumbnail() {
        return this._thumbnail;
      }
      get caption() {
        return this._caption;
      }
      get parse_mode() {
        return this._parse_mode;
      }
      get caption_entities() {
        return this._caption_entities.map(element => {
          return new Type().MessageEntity(element);
        });
      }
      get width() {
        return this._width;
      }
      get height() {
        return this._height;
      }
      get duration() {
        return this._duration;
      }
      get supports_streaming() {
        return this._supports_streaming;
      }
      get has_spoiler() {
        return this._has_spoiler;
      }
    }
    return new InputMediaVideo(params);
  }

  /**
   * @method InputMediaAnimation
   * @param {Object} params - An object containing the parameters for the InputMediaAnimation
   * @param {String} params.type - The type of the media
   * @param {String} params.media - File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name
   * @param {InputFile|String} params.thumbnail - Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side
   * @param {String} params.caption - Optional. Caption of the animation to be sent, 0-1024 characters
   * @param {String} params.parse_mode - Optional. Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption
   * @param {Object[]} params.caption_entities - Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   * @param {Number} params.width - Optional. Animation width
   * @param {Number} params.height - Optional. Animation height
   * @param {Number} params.duration - Optional. Animation duration
   * @param {Boolean} params.has_spoiler - Optional. Pass True, if the uploaded animation is suitable for sensitive content
   * @returns {InputMediaAnimation} An object containing the parameters for the InputMediaAnimation
   */
  InputMediaAnimation(params = {
    type,
    media,
    thumbnail,
    caption,
    parse_mode,
    caption_entities,
    width,
    height,
    duration,
    has_spoiler
  }) {
    class InputMediaAnimation {
      constructor({
        type,
        media,
        thumbnail,
        caption,
        parse_mode,
        caption_entities,
        width,
        height,
        duration,
        has_spoiler
      }) {
        this.type = type;
        this.media = media;
        this.thumbnail = thumbnail;
        this.caption = caption;
        this.parse_mode = parse_mode;
        this.caption_entities = caption_entities;
        this.width = width;
        this.height = height;
        this.duration = duration;
        this.has_spoiler = has_spoiler;
      }
      get type() {
        return this._type;
      }
      get media() {
        return this._media;
      }
      get thumbnail() {
        return this._thumbnail;
      }
      get caption() {
        return this._caption;
      }
      get parse_mode() {
        return this._parse_mode;
      }
      get caption_entities() {
        return this._caption_entities.map(element => {
          return new Type().MessageEntity(element);
        });
      }
      get width() {
        return this._width;
      }
      get height() {
        return this._height;
      }
      get duration() {
        return this._duration;
      }
      get has_spoiler() {
        return this._has_spoiler;
      }
    }
    return new InputMediaAnimation(params);
  }

  /**
   * @method InputMediaAudio
   * @param {Object} params - An object containing the parameters for the InputMediaAudio
   * @param {String} params.type - The type of the media
   * @param {String} params.media - File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name
   * @param {InputFile|String} params.thumbnail - Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data
   * @param {String} params.caption - Optional. Caption of the audio to be sent, 0-1024 characters
   * @param {String} params.parse_mode - Optional. Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption
   * @param {Object[]} params.caption_entities - Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   * @param {Number} params.duration - Optional. Duration of the audio in seconds
   * @param {String} params.performer - Optional. Performer of the audio
   * @param {String} params.title - Optional. Title of the audio
   * @returns {InputMediaAudio} An object containing the parameters for the InputMediaAudio
   */
  InputMediaAudio(params = {
    type,
    media,
    thumbnail,
    caption,
    parse_mode,
    caption_entities,
    duration,
    performer,
    title
  }) {
    class InputMediaAudio {
      constructor({
        type,
        media,
        thumbnail,
        caption,
        parse_mode,
        caption_entities,
        duration,
        performer,
        title
      }) {
        this.type = type;
        this.media = media;
        this.thumbnail = thumbnail;
        this.caption = caption;
        this.parse_mode = parse_mode;
        this.caption_entities = caption_entities;
        this.duration = duration;
        this.performer = performer;
        this.title = title;
      }
      get type() {
        return this._type;
      }
      get media() {
        return this._media;
      }
      get thumbnail() {
        return this._thumbnail;
      }
      get caption() {
        return this._caption;
      }
      get parse_mode() {
        return this._parse_mode;
      }
      get caption_entities() {
        return this._caption_entities.map(element => {
          return new Type().MessageEntity(element);
        });
      }
      get duration() {
        return this._duration;
      }
      get performer() {
        return this._performer;
      }
      get title() {
        return this._title;
      }
    }
    return new InputMediaAudio(params);
  }

  /**
   * @method InputMediaDocument
   * @param {Object} params - An object containing the parameters for the InputMediaDocument
   * @param {String} params.type - The type of the media
   * @param {String} params.media - The file ID of the media
   * @param {InputFile|String} params.thumbnail - The file ID of the thumbnail
   * @param {String} params.caption - The caption of the media
   * @param {String} params.parse_mode - The parse mode of the caption
   * @param {Object} params.caption_entities - The caption entities of the caption
   * @param {Boolean} params.disable_content_type_detection - Whether to disable content type detection
   * @returns {InputMediaDocument} An object containing the parameters for the InputMediaDocument
   */
  InputMediaDocument(params = {
    type,
    media,
    thumbnail,
    caption,
    parse_mode,
    caption_entities,
    disable_content_type_detection
  }) {
    class InputMediaDocument {
      constructor({
        type,
        media,
        thumbnail,
        caption,
        parse_mode,
        caption_entities,
        disable_content_type_detection
      }) {
        this.type = type;
        this.media = media;
        this.thumbnail = thumbnail;
        this.caption = caption;
        this.parse_mode = parse_mode;
        this.caption_entities = caption_entities;
        this.disable_content_type_detection = disable_content_type_detection;
      }
      get type() {
        return this._type;
      }
      get media() {
        return this._media;
      }
      get thumbnail() {
        return this._thumbnail;
      }
      get caption() {
        return this._caption;
      }
      get parse_mode() {
        return this._parse_mode;
      }
      get caption_entities() {
        return this._caption_entities.map(element => {
          return new Type().MessageEntity(element);
        });
      }
      get disable_content_type_detection() {
        return this._disable_content_type_detection;
      }
    }
    return new InputMediaDocument(params);
  }

  InputFile(params = {
    // TODO -----------------------------------------------------------------------------------------------------------------
  }) { }

  // Stickers

  /**
   * @method Sticker
   * @param {Object} params - An object containing the parameters for the sticker
   * @param {String} params.file_id - The unique identifier for this file
   * @param {String} params.file_unique_id - The unique identifier for this file
   * @param {String} params.type - The type of the file (usually 'sticker')
   * @param {Number} params.width - The width of the sticker
   * @param {Number} params.height - The height of the sticker
   * @param {Boolean} params.is_animated - Whether the sticker is animated
   * @param {Boolean} params.is_video - Whether the sticker is a video
   * @param {PhotoSize} params.thumbnail - An object containing the thumbnail of the sticker
   * @param {String} params.emoji - The emoji associated with the sticker
   * @param {String} params.set_name - The name of the sticker set
   * @param {File} params.premium_animation - Whether the sticker has premium animation
   * @param {MaskPosition} params.mask_position - An object containing the position of the mask
   * @param {String} params.custom_emoji_id - The unique identifier for the custom emoji
   * @param {Boolean} params.needs_repainting - Whether the sticker needs repainting
   * @param {Number} params.file_size - The size of the file
   * @returns {Sticker} A new Sticker object
   */
  Sticker(params = {
    file_id,
    file_unique_id,
    type,
    width,
    height,
    is_animated,
    is_video,
    thumbnail,
    emoji,
    set_name,
    premium_animation,
    mask_position,
    custom_emoji_id,
    needs_repainting,
    file_size
  }) {
    class Sticker {
      constructor({
        file_id,
        file_unique_id,
        type,
        width,
        height,
        is_animated,
        is_video,
        thumbnail,
        emoji,
        set_name,
        premium_animation,
        mask_position,
        custom_emoji_id,
        needs_repainting,
        file_size
      }) {
        this.file_id = file_id;
        this.file_unique_id = file_unique_id;
        this.type = type;
        this.width = width;
        this.height = height;
        this.is_animated = is_animated;
        this.is_video = is_video;
        this.thumbnail = thumbnail;
        this.emoji = emoji;
        this.set_name = set_name;
        this.premium_animation = premium_animation;
        this.mask_position = mask_position;
        this.custom_emoji_id = custom_emoji_id;
        this.needs_repainting = needs_repainting;
        this.file_size = file_size;
      }
      get file_id() {
        return this._file_id;
      }
      get file_unique_id() {
        return this._file_unique_id;
      }
      get type() {
        return this._type;
      }
      get width() {
        return this._width;
      }
      get height() {
        return this._height;
      }
      get is_animated() {
        return this._is_animated;
      }
      get is_video() {
        return this._is_video;
      }
      get thumbnail() {
        return new Type().PhotoSize(this._thumbnail);
      }
      get emoji() {
        return this._emoji;
      }
      get set_name() {
        return this._set_name;
      }
      get premium_animation() {
        return new Type().File(this._premium_animation);
      }
      get mask_position() {
        return new Type().MaskPosition(this._mask_position);
      }
      get custom_emoji_id() {
        return this._custom_emoji_id;
      }
      get needs_repainting() {
        return this._needs_repainting;
      }
      get file_size() {
        return this._file_size;
      }
    }
    return new Sticker(params);
  }

  /**
   * @method StickerSet
   * @param {Object} params - An object containing the parameters for the StickerSet
   * @param {String} params.name - The name of the StickerSet
   * @param {String} params.title - The title of the StickerSet
   * @param {String} params.sticker_type - The type of the StickerSet
   * @param {Boolean} params.is_animated - Whether the StickerSet is animated
   * @param {Boolean} params.is_video - Whether the StickerSet is a video
   * @param {Array} params.stickers - An array of stickers in the StickerSet
   * @param {Object} params.thumbnail - An object containing the thumbnail of the StickerSet
   * @returns {StickerSet} A new StickerSet object
   */
  StickerSet(params = {
    name,
    title,
    sticker_type,
    is_animated,
    is_video,
    stickers,
    thumbnail
  }) {
    class StickerSet {
      constructor({
        name,
        title,
        sticker_type,
        is_animated,
        is_video,
        stickers,
        thumbnail
      }) {
        this.name = name;
        this.title = title;
        this.sticker_type = sticker_type;
        this.is_animated = is_animated;
        this.is_video = is_video;
        this.stickers = stickers;
        this.thumbnail = thumbnail;
      }
      get name() {
        return this._name;
      }
      get title() {
        return this._title;
      }
      get sticker_type() {
        return this._sticker_type;
      }
      get is_animated() {
        return this._is_animated;
      }
      get is_video() {
        return this._is_video;
      }
      get stickers() {
        return this._stickers.map(element => {
          return new Type().Sticker(element);
        });
      }
      get thumbnail() {
        return new Type().PhotoSize(this._thumbnail);
      }
    }
    return new StickerSet(params);
  }

  /**
   * @method MaskPosition
   * @param {Object} params - An object containing the parameters for the MaskPosition
   * @param {String} params.point - The part of the face relative to which the mask should be placed
   * @param {Number} params.x_shift - Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position
   * @param {Number} params.y_shift - Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position
   * @param {Number} params.scale - Mask scaling coefficient. For example, 2.0 means double size
   * @returns {MaskPosition} A new MaskPosition object
   */
  MaskPosition(params = {
    point,
    x_shift,
    y_shift,
    scale
  }) {
    class MaskPosition {
      constructor({
        point,
        x_shift,
        y_shift,
        scale
      }) {
        this.point = point;
        this.x_shift = x_shift;
        this.y_shift = y_shift;
        this.scale = scale;
      }
      get point() {
        return this._point;
      }
      get x_shift() {
        return this._x_shift;
      }
      get y_shift() {
        return this._y_shift;
      }
      get scale() {
        return this._scale;
      }
    }
    return new MaskPosition(params);
  }

  /**
   * @method InputSticker
   * @param {Object} params - An object containing the parameters for the InputSticker
   * @param {InputFile|String} params.sticker - The sticker object
   * @param {Array} params.emoji_list - An array of emoji strings
   * @param {MaskPosition} params.mask_position - The position of the mask
   * @param {Array} params.keywords - An array of keywords
   * @returns {InputSticker} An object containing the parameters for the InputSticker
   */
  InputSticker(params = {
    sticker,
    emoji_list,
    mask_position,
    keywords
  }) {
    class InputSticker {
      constructor({
        sticker,
        emoji_list,
        mask_position,
        keywords
      }) {
        this.sticker = sticker;
        this.emoji_list = emoji_list;
        this.mask_position = mask_position;
        this.keywords = keywords;
      }
      get sticker() {
        return this._sticker;
      }
      get emoji_list() {
        return this._emoji_list.map(element => {
          return element
        });
      }
      get mask_position() {
        return new Type().MaskPosition(this._mask_position);
      }
      get keywords() {
        return this._keywords.map(element => {
          return element
        });
      }
    }
    return new InputSticker(params);
  }

  // Inline mode

  InlineQuery(params = {}) { }
  
  InlineQueryResult(params = {}) { }

  InlineQueryResultCachedAudio(params = {}) { }

  InlineQueryResultCachedDocument(params = {}) { }

  InlineQueryResultCachedGif(params = {}) { }

  InlineQueryResultCachedMpeg4Gif(params = {}) { }

  InlineQueryResultCachedPhoto(params = {}) { }

  InlineQueryResultCachedSticker(params = {}) { }

  InlineQueryResultCachedVideo(params = {}) { }

  InlineQueryResultCachedVoice(params = {}) { }

  InlineQueryResultArticle(params = {}) { }

  InlineQueryResultAudio(params = {}) { }

  InlineQueryResultContact(params = {}) { }

  InlineQueryResultGame(params = {}) { }

  InlineQueryResultDocument(params = {}) { }

  InlineQueryResultGif(params = {}) { }

  InlineQueryResultLocation(params = {}) { }

  InlineQueryResultMpeg4Gif(params = {}) { }

  InlineQueryResultPhoto(params = {}) { }

  InlineQueryResultVenue(params = {}) { }

  InlineQueryResultVideo(params = {}) { }

  InlineQueryResultVoice(params = {}) { }

  InputMessageContent(params = {}) { }

  InputTextMessageContent(params = {}) { }

  InputLocationMessageContent(params = {}) { }

  InputVenueMessageContent(params = {}) { }

  InputContactMessageContent(params = {}) { }

  InputInvoiceMessageContent(params = {}) { }

  ChosenInlineResult(params = {}) { }

  SentWebAppMessage(params = {}) { }

  // Payments

  LabeledPrice(params = {}) { }
  Invoice(params = {}) { }
  ShippingAddress(params = {}) { }
  OrderInfo(params = {}) { }
  ShippingOption(params = {}) { }
  SuccessfulPayment(params = {}) { }
  ShippingQuery(params = {}) { }
  PreCheckoutQuery(params = {}) { }

  // Telegram Passport

  PassportData(params = {}) { }
  PassportFile(params = {}) { }

  /**
   * @method EncryptedPassportElement
   * @param {Object} params - An object containing the parameters for the EncryptedPassportElement
   * @param {String} params.type - The type of the element
   * @param {String} params.data - The data of the element
   * @param {String} params.phone_number - The phone number of the element
   * @param {String} params.email - The email of the element
   * @param {Array} params.files - An array of PassportFile objects
   * @param {Object} params.front_side - A PassportFile object
   * @param {Object} params.reverse_side - A PassportFile object
   * @param {Object} params.selfie - A PassportFile object
   * @param {Array} params.translation - An array of PassportFile objects
   * @param {String} params.hash - The hash of the element
   * @returns {EncryptedPassportElement} An object containing the EncryptedPassportElement data
   */
  EncryptedPassportElement(params = {
    type,
    data,
    phone_number,
    email,
    files,
    front_side,
    reverse_side,
    selfie,
    translation,
    hash
  }) {
    class EncryptedPassportElement {
      constructor({
        type,
        data,
        phone_number,
        email,
        files,
        front_side,
        reverse_side,
        selfie,
        translation,
        hash
      }) {
        this.type = type;
        this.data = data;
        this.phone_number = phone_number;
        this.email = email;
        this.files = files;
        this.front_side = front_side;
        this.reverse_side = reverse_side;
        this.selfie = selfie;
        this.translation = translation;
        this.hash = hash;
      }
      get type() {
        return this._type;
      }
      get data() {
        return this._data;
      }
      get phone_number() {
        return this._phone_number;
      }
      get email() {
        return this._email;
      }
      get files() {
        return this._files.map(function (element) {
          return new Type().PassportFile(element)
        });
      }
      get front_side() {
        return new Type().PassportFile(this._front_side);
      }
      get reverse_side() {
        return new Type().PassportFile(this._reverse_side);
      }
      get selfie() {
        return new Type().PassportFile(this._selfie);
      }
      get translation() {
        return this._translation.map(function (element) {
          return new Type().PassportFile(element)
        });
      }
      get hash() {
        return this._hash;
      }
    }
    return new EncryptedPassportElement(params);
  }

  /**
   * @method EncryptedCredentials
   * @param {Object} params - The parameters for the EncryptedCredentials object
   * @param {String} params.data - The data of the EncryptedCredentials object
   * @param {String} params.hash - The hash of the EncryptedCredentials object
   * @param {String} params.secret - The secret of the EncryptedCredentials object
   * @returns {EncryptedCredentials} - An EncryptedCredentials object
   */
  EncryptedCredentials(params = {
    data,
    hash,
    secret
  }) {
    class EncryptedCredentials {
      constructor({
        data,
        hash,
        secret
      }) {
        this.data = data;
        this.hash = hash;
        this.secret = secret;
      }
      get data() {
        return this._data;
      }
      get hash() {
        return this._hash;
      }
      get secret() {
        return this._secret;
      }
    }
    return new EncryptedCredentials(params);
  }

  PassportElementError(params = {}) { }
  PassportElementErrorDataField(params = {}) { }
  PassportElementErrorFrontSide(params = {}) { }
  PassportElementErrorReverseSide(params = {}) { }
  PassportElementErrorSelfie(params = {}) { }
  PassportElementErrorFile(params = {}) { }
  PassportElementErrorFiles(params = {}) { }

  /**
   * @method PassportElementErrorTranslationFile
   * @param {Object} params
   * @param {String} params.source - Error source, must be translation_files
   * @param {String} params.type - Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
   * @param {String} params.file_hash - Base64-encoded file hash
   * @param {String} params.message - Error message
   * @returns {PassportElementErrorTranslationFile}
   */
  PassportElementErrorTranslationFile(params = {
    source,
    type,
    file_hash,
    message
  }) {
    class PassportElementErrorTranslationFile {
      constructor({
        source,
        type,
        file_hash,
        message
      }) {
        this.source = source;
        this.type = type;
        this.file_hash = file_hash;
        this.message = message;
      }
      get source() {
        return this._source;
      }
      get type() {
        return this._type;
      }
      get file_hash() {
        return this._file_hash;
      }
      get message() {
        return this._message;
      }
    }
    return new PassportElementErrorTranslationFile(params);
  }

  /**
   * @method PassportElementErrorTranslationFiles
   * @param {Object} params
   * @param {String} params.source - Error source, must be translation_files
   * @param {String} params.type - Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
   * @param {Array} params.file_hashes - List of base64-encoded file hashes
   * @param {String} params.message - Error message
   * @returns {PassportElementErrorTranslationFiles}
   */
  PassportElementErrorTranslationFiles(params = {
    source,
    type,
    file_hashes,
    message
  }) {
    class PassportElementErrorTranslationFiles {
      constructor({
        source,
        type,
        file_hashes,
        message
      }) {
        this.source = source;
        this.type = type;
        this.file_hashes = file_hashes;
        this.message = message;
      }
      get source() {
        return this._source;
      }
      get type() {
        return this._type;
      }
      get file_hashes() {
        return this._file_hashes;
      }
      get message() {
        return this._message;
      }
    }
    return new PassportElementErrorTranslationFiles(params);
  }

  /**
   * @method PassportElementErrorUnspecified
   * @param {Object} params
   * @param {String} params.source - Error source, must be unspecified
   * @param {String} params.type - Type of element of the user's Telegram Passport which has the issue
   * @param {String} params.element_hash - Base64-encoded element hash
   * @param {String} params.message - Error message
   * @returns {PassportElementErrorUnspecified}
   */
  PassportElementErrorUnspecified(params = {
    source,
    type,
    element_hash,
    message
  }) {
    class PassportElementErrorUnspecified {
      constructor({
        source,
        type,
        element_hash,
        message
      }) {
        this.source = source;
        this.type = type;
        this.element_hash = element_hash;
        this.message = message;
      }
      get source() {
        return this._source;
      }
      get type() {
        return this._type;
      }
      get element_hash() {
        return this._element_hash;
      }
      get message() {
        return this._message;
      }
    }
    return new PassportElementErrorUnspecified(params);
  }

  // Games

  /**
   * @method Game
   * @param {Object} params - An object containing the parameters for the game.
   * @param {string} params.title - The title of the game.
   * @param {string} params.description - The description of the game.
   * @param {Object[]} params.photo - An array of photo objects.
   * @param {string} params.text - The text of the game.
   * @param {Object[]} params.text_entities - An array of message entity objects.
   * @param {Object} params.animation - An animation object.
   * @returns {Game} A new Game object.
   */
  Game(params = {
    title,
    description,
    photo,
    text,
    text_entities,
    animation
  }) {
    class Game {
      constructor({
        title,
        description,
        photo,
        text,
        text_entities,
        animation
      }) {
        this.title = title;
        this.description = description;
        this.photo = photo;
        this.text = text;
        this.text_entities = text_entities;
        this.animation = animation;
      }
      get title() {
        return this._title;
      }
      get description() {
        return this._description;
      }
      get photo() {
        return this._photo.map(function (element) {
          return new Type().PhotoSize(element)
        });
      }
      get text() {
        return this._text;
      }
      get text_entities() {
        return this._text_entities.map(function (element) {
          return new Type().MessageEntity(element)
        });
      }
      get animation() {
        return new Type().Animation(this._animation);
      }
    }
    return new Game(params);
  }

  /**
   * @method CallbackGame
   * @param {Object} params - The parameters of the game
   * @returns {CallbackGame} - A new CallbackGame object
   */
  CallbackGame(params) {
    class CallbackGame {
      constructor(params) {
        this.params = params;
      }
      get params() {
        return this._params;
      }
    }
    return new CallbackGame(params);
  }

  /**
   * @method GameHighScore
   * @param {Object} params - The parameters for the GameHighScore object
   * @param {Number} params.position - The position of the user in the game
   * @param {Object} params.user - The user object
   * @param {Number} params.score - The score of the user
   * @returns {GameHighScore} - A new GameHighScore object
   */
  GameHighScore(params = {
    position,
    user,
    score
  }) {
    class GameHighScore {
      constructor({
        position,
        user,
        score
      }) {
        this.position = position;
        this.user = user;
        this.score = score;
      }
      get position() {
        return this._position;
      }
      get user() {
        return new Type().User(this._user);
      }
      get score() {
        return this._score;
      }
    }
    return new GameHighScore(params);
  }
}
