class Type {
  constructor() { }

  // Getting updates

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
        return this.small_file_id;
      }
      get small_file_unique_id() {
        return this.small_file_unique_id;
      }
      get big_file_id() {
        return this.big_file_id;
      }
      get big_file_unique_id() {
        return this.big_file_unique_id;
      }
    }
    return new ChatPhoto(params);
  }

  ChatInviteLink(params) { }
  ChatAdministratorRights(params) { }
  ChatMember(params) { }
  ChatMemberOwner(params) { }
  ChatMemberAdministrator(params) { }
  ChatMemberMember(params) { }
  ChatMemberRestricted(params) { }
  ChatMemberLeft(params) { }
  ChatMemberBanned(params) { }
  ChatMemberUpdated(params) { }
  ChatJoinRequest(params) { }
  ChatPermissions(params) { }
  ChatLocation(params) { }
  ForumTopic(params) { }
  BotCommand(params) { }
  BotCommandScope(params) { }
  BotCommandScopeDefault(params) { }
  BotCommandScopeAllPrivateChats(params) { }
  BotCommandScopeAllGroupChats(params) { }
  BotCommandScopeAllChatAdministrators(params) { }
  BotCommandScopeChat(params) { }
  BotCommandScopeChatAdministrators(params) { }
  BotCommandScopeChatMember(params) { }
  BotDescription(params) { }
  BotShortDescription(params) { }
  MenuButton(params) { }
  MenuButtonCommands(params) { }
  MenuButtonWebApp(params) { }
  MenuButtonDefault(params) { }
  ResponseParameters(params) { }
  InputMedia(params) { }
  InputMediaPhoto(params) { }
  InputMediaVideo(params) { }
  InputMediaAnimation(params) { }
  InputMediaAudio(params) { }
  InputMediaDocument(params) { }
  InputFile(params) { }

  // Stickers

  Sticker(params) { }
  StickerSet(params) { }
  MaskPosition(params) { }
  InputSticker(params) { }

  // Inline mode

  InlineQuery(params) { }
  InlineQueryResult(params) { }
  InlineQueryResultCachedAudio(params) { }
  InlineQueryResultCachedDocument(params) { }
  InlineQueryResultCachedGif(params) { }
  InlineQueryResultCachedMpeg4Gif(params) { }
  InlineQueryResultCachedPhoto(params) { }
  InlineQueryResultCachedSticker(params) { }
  InlineQueryResultCachedVideo(params) { }
  InlineQueryResultCachedVoice(params) { }
  InlineQueryResultArticle(params) { }
  InlineQueryResultAudio(params) { }
  InlineQueryResultContact(params) { }
  InlineQueryResultGame(params) { }
  InlineQueryResultDocument(params) { }
  InlineQueryResultGif(params) { }
  InlineQueryResultLocation(params) { }
  InlineQueryResultMpeg4Gif(params) { }
  InlineQueryResultPhoto(params) { }
  InlineQueryResultVenue(params) { }
  InlineQueryResultVideo(params) { }
  InlineQueryResultVoice(params) { }
  InputMessageContent(params) { }
  InputTextMessageContent(params) { }
  InputLocationMessageContent(params) { }
  InputVenueMessageContent(params) { }
  InputContactMessageContent(params) { }
  InputInvoiceMessageContent(params) { }
  ChosenInlineResult(params) { }
  SentWebAppMessage(params) { }

  // Payments

  LabeledPrice(params) { }
  Invoice(params) { }
  ShippingAddress(params) { }
  OrderInfo(params) { }
  ShippingOption(params) { }
  SuccessfulPayment(params) { }
  ShippingQuery(params) { }
  PreCheckoutQuery(params) { }

  // Telegram Passport

  PassportData(params) { }
  PassportFile(params) { }
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
  PassportElementError(params) { }
  PassportElementErrorDataField(params) { }
  PassportElementErrorFrontSide(params) { }
  PassportElementErrorReverseSide(params) { }
  PassportElementErrorSelfie(params) { }
  PassportElementErrorFile(params) { }
  PassportElementErrorFiles(params) { }
  PassportElementErrorTranslationFile(params) { }
  PassportElementErrorTranslationFiles(params) { }
  PassportElementErrorUnspecified(params) { }

  // Games

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
  }
}
