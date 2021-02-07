class Message { // Message
  constructor(token) {
    this.token = token;
  }
  sendMessage(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры sendMessage');
    }
    var response = sendMessage_(this.token, params);
    function sendMessage_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('sendMessage - Не указан обязательный параметр "chat_id"');
      }
      if (data.text == undefined) {
        throw new Error('sendMessage - Не указан обязательный параметр "text"');
      }
      return telegramApi_(token, 'sendMessage', data);
    }
    return response;
  }
  forwardMessage(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры forwardMessage');
    }
    var response = forwardMessage_(this.token, params);
    function forwardMessage_(token, params) {
      if (params.chat_id == undefined) {
        throw new Error('forwardMessage - Не указан обязательный параметр "chat_id"');
      }
      if (params.from_chat_id == undefined) {
        throw new Error('forwardMessage - Не указан обязательный параметр "from_chat_id"');
      }
      if (params.message_id == undefined) {
        throw new Error('forwardMessage - Не указан обязательный параметр "message_id"');
      }
      var data = {
        chat_id: params.chat_id,
        from_chat_id: params.from_chat_id,
        message_id: params.message_id,
      };
      if (!!params.disable_notification) {
        data.disable_notification = params.disable_notification;
      }
      return telegramApi_(token, 'forwardMessage', data);
    }
    return response;
  }
  copyMessage(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры copyMessage');
    }
    var response = copyMessage_(this.token, params);
    function copyMessage_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('copyMessage - Не указан обязательный параметр "chat_id"');
      }
      if (data.from_chat_id == undefined) {
        throw new Error('copyMessage - Не указан обязательный параметр "from_chat_id"');
      }
      if (data.message_id == undefined) {
        throw new Error('copyMessage - Не указан обязательный параметр "message_id"');
      }
      return telegramApi_(token, 'copyMessage', data);
    }
    return response;
  }
  editMessageLiveLocation(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры editMessageLiveLocation');
    }
    var response = editMessageLiveLocation_(this.token, params);
    function editMessageLiveLocation_(token, data) {
      if (data.latitude == undefined) {
        throw new Error('editMessageLiveLocation - Не указан обязательный параметр "latitude"');
      }
      if (data.longitude == undefined) {
        throw new Error('editMessageLiveLocation - Не указан обязательный параметр "longitude"');
      }
      return telegramApi_(token, 'editMessageLiveLocation', data);
    }
    return response;
  }
  stopMessageLiveLocation(params) {
    var response = editMessageLiveLocation_(this.token, params);
    function editMessageLiveLocation_(token, data) {
      if (data != null) {
        return telegramApi_(token, 'editMessageLiveLocation', data);
      } else {
        return telegramApi_(token, 'editMessageLiveLocation');
      }
    }
    return response;
  }
}



