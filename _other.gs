class Other { // Other
  constructor(token) {
    this.token = token;
  }
  getUpdates() {
    var data = getUpdates_(this.token);
    function getUpdates_(token) {
      return telegramApi_(token, 'getUpdates');
    }
    return data;
  }
  sendPhoto(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры sendPhoto');
    }
    var response = sendPhoto_(this.token, params);
    function sendPhoto_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('sendPhoto - Не указан обязательный параметр "chat_id"');
      }
      if (data.photo == undefined) {
        throw new Error('sendPhoto - Не указан обязательный параметр "photo"');
      }
      return telegramApi_(token, 'sendPhoto', data);
    }
    return response;
  }
  sendAudio(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры sendAudio');
    }
    var response = sendAudio_(this.token, params);
    function sendAudio_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('sendAudio - Не указан обязательный параметр "chat_id"');
      }
      if (data.audio == undefined) {
        throw new Error('sendAudio - Не указан обязательный параметр "audio"');
      }
      return telegramApi_(token, 'sendAudio', data);
    }
    return response;
  }
  sendDocument(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры sendDocument');
    }
    var response = sendDocument_(this.token, params);
    function sendDocument_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('sendDocument - Не указан обязательный параметр "chat_id"');
      }
      if (data.document == undefined) {
        throw new Error('sendDocument - Не указан обязательный параметр "document"');
      }
      return telegramApi_(token, 'sendDocument', data);
    }
    return response;
  }
  sendVideo(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры sendVideo');
    }
    var response = sendVideo_(this.token, params);
    function sendVideo_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('sendVideo - Не указан обязательный параметр "chat_id"');
      }
      if (data.video == undefined) {
        throw new Error('sendVideo - Не указан обязательный параметр "video"');
      }
      return telegramApi_(token, 'sendVideo', data);
    }
    return response;
  }
  sendAnimation(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры sendAnimation');
    }
    var response = sendAnimation_(this.token, params);
    function sendAnimation_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('sendAnimation - Не указан обязательный параметр "chat_id"');
      }
      if (data.animation == undefined) {
        throw new Error('sendAnimation - Не указан обязательный параметр "animation"');
      }
      return telegramApi_(token, 'sendAnimation', data);
    }
    return response;
  }
  sendVoice(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры sendVoice');
    }
    var response = sendVoice_(this.token, params);
    function sendVoice_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('sendVoice - Не указан обязательный параметр "chat_id"');
      }
      if (data.voice == undefined) {
        throw new Error('sendVoice - Не указан обязательный параметр "voice"');
      }
      return telegramApi_(token, 'sendVoice', data);
    }
    return response;
  }
  sendVideoNote(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры sendVideoNote');
    }
    var response = sendVideoNote_(this.token, params);
    function sendVideoNote_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('sendVideoNote - Не указан обязательный параметр "chat_id"');
      }
      if (data.video_note == undefined) {
        throw new Error('sendVideoNote - Не указан обязательный параметр "video_note"');
      }
      return telegramApi_(token, 'sendVideoNote', data);
    }
    return response;
  }
  sendMediaGroup(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры sendMediaGroup');
    }
    var response = sendMediaGroup_(this.token, params);
    function sendMediaGroup_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('sendMediaGroup - Не указан обязательный параметр "chat_id"');
      }
      if (data.media == undefined) {
        throw new Error('sendMediaGroup - Не указан обязательный параметр "media"');
      }
      return telegramApi_(token, 'sendMediaGroup', data);
    }
    return response;
  }
  sendLocation(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры sendLocation');
    }
    var response = sendLocation_(this.token, params);
    function sendLocation_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('sendLocation - Не указан обязательный параметр "chat_id"');
      }
      if (data.latitude == undefined) {
        throw new Error('sendLocation - Не указан обязательный параметр "latitude"');
      }
      if (data.longitude == undefined) {
        throw new Error('sendLocation - Не указан обязательный параметр "longitude"');
      }
      return telegramApi_(token, 'sendLocation', data);
    }
    return response;
  }
  sendVenue(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры sendVenue');
    }
    var response = sendVenue_(this.token, params);
    function sendVenue_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('sendVenue - Не указан обязательный параметр "chat_id"');
      }
      if (data.latitude == undefined) {
        throw new Error('sendVenue - Не указан обязательный параметр "latitude"');
      }
      if (data.longitude == undefined) {
        throw new Error('sendVenue - Не указан обязательный параметр "longitude"');
      }
      if (data.title == undefined) {
        throw new Error('sendVenue - Не указан обязательный параметр "title"');
      }
      if (data.address == undefined) {
        throw new Error('sendVenue - Не указан обязательный параметр "address"');
      }
      return telegramApi_(token, 'sendVenue', data);
    }
    return response;
  }
  sendContact(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры sendContact');
    }
    var response = sendContact_(this.token, params);
    function sendContact_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('sendContact - Не указан обязательный параметр "chat_id"');
      }
      if (data.phone_number == undefined) {
        throw new Error('sendContact - Не указан обязательный параметр "phone_number"');
      }
      if (data.first_name == undefined) {
        throw new Error('sendContact - Не указан обязательный параметр "first_name"');
      }
      return telegramApi_(token, 'sendContact', data);
    }
    return response;
  }
  sendPoll(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры sendPoll');
    }
    var response = sendPoll_(this.token, params);
    function sendPoll_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('sendPoll - Не указан обязательный параметр "chat_id"');
      }
      if (data.question == undefined) {
        throw new Error('sendPoll - Не указан обязательный параметр "question"');
      }
      if (data.options == undefined) {
        throw new Error('sendPoll - Не указан обязательный параметр "options"');
      }
      return telegramApi_(token, 'sendPoll', data);
    }
    return response;
  }
  sendDice(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры sendDice');
    }
    var response = sendDice_(this.token, params);
    function sendDice_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('sendDice - Не указан обязательный параметр "chat_id"');
      }
      return telegramApi_(token, 'sendDice', data);
    }
    return response;
  }
  getUserProfilePhotos(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры getUserProfilePhotos');
    }
    var response = getUserProfilePhotos_(this.token, params);
    function getUserProfilePhotos_(token, data) {
      if (data.user_id == undefined) {
        throw new Error('getUserProfilePhotos - Не указан обязательный параметр "user_id"');
      }
      return telegramApi_(token, 'getUserProfilePhotos', data);
    }
    return response;
  }
  getFile(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры getFile');
    }
    var response = getFile_(this.token, params);
    function getFile_(token, data) {
      if (data.file_id == undefined) {
        throw new Error('getFile - Не указан обязательный параметр "file_id"');
      }
      return telegramApi_(token, 'getFile', data);
    }
    return response;
  }
  answerCallbackQuery(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры answerCallbackQuery');
    }
    var response = answerCallbackQuery_(this.token, params);
    function answerCallbackQuery_(token, data) {
      if (data.callback_query_id == undefined) {
        throw new Error('answerCallbackQuery - Не указан обязательный параметр "callback_query_id"');
      }
      return telegramApi_(token, 'answerCallbackQuery', data);
    }
    return response;
  }
  setMyCommands(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры setMyCommands');
    }
    var response = setMyCommands_(this.token, params);
    function setMyCommands_(token, data) {
      if (data.commands == undefined) {
        throw new Error('setMyCommands - Не указан обязательный параметр "commands"');
      }
      return telegramApi_(token, 'setMyCommands', data);
    }
    return response;
  }
  getMyCommands() {
    var response = getMyCommands_(this.token);
    function getMyCommands_(token) {
      return telegramApi_(token, 'getMyCommands');
    }
    return response;
  }
  getMe() {
    var response = getMe_(this.token);
    function getMe_(token) {
      return telegramApi_(token, 'getMe');
    }
    return response;
  }
  logOut() {
    var response = logOut_(this.token);
    function logOut_(token) {
      return telegramApi_(token, 'logOut');
    }
    return response;
  }
  close() {
    var response = close_(this.token);
    function close_(token) {
      return telegramApi_(token, 'close');
    }
    return response;
  }
}






