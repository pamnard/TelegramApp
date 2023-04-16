class Chat { // Chat
  constructor(token) {
    this.token = token;
  }
  sendChatAction(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры sendChatAction');
    }
    var response = sendChatAction_(this.token, params);
    function sendChatAction_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('sendChatAction - Не указан обязательный параметр "chat_id"');
      }
      if (data.action == undefined) {
        throw new Error('sendChatAction - Не указан обязательный параметр "action"');
      }
      return telegramApi_(token, 'sendChatAction', data);
    }
    return response;
  }
  kickChatMember(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры kickChatMember');
    }
    var response = kickChatMember_(this.token, params);
    function kickChatMember_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('kickChatMember - Не указан обязательный параметр "chat_id"');
      }
      if (data.user_id == undefined) {
        throw new Error('kickChatMember - Не указан обязательный параметр "user_id"');
      }
      return telegramApi_(token, 'kickChatMember', data);
    }
    return response;
  }
  unbanChatMember(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры unbanChatMember');
    }
    var response = unbanChatMember_(this.token, params);
    function unbanChatMember_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('unbanChatMember - Не указан обязательный параметр "chat_id"');
      }
      if (data.user_id == undefined) {
        throw new Error('unbanChatMember - Не указан обязательный параметр "user_id"');
      }
      return telegramApi_(token, 'unbanChatMember', data);
    }
    return response;
  }
  restrictChatMember(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры restrictChatMember');
    }
    var response = restrictChatMember_(this.token, params);
    function restrictChatMember_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('restrictChatMember - Не указан обязательный параметр "chat_id"');
      }
      if (data.user_id == undefined) {
        throw new Error('restrictChatMember - Не указан обязательный параметр "user_id"');
      }
      if (data.permissions == undefined) {
        throw new Error('restrictChatMember - Не указан обязательный параметр "permissions"');
      }
      return telegramApi_(token, 'restrictChatMember', data);
    }
    return response;
  }
  promoteChatMember(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры promoteChatMember');
    }
    var response = promoteChatMember_(this.token, params);
    function promoteChatMember_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('promoteChatMember - Не указан обязательный параметр "chat_id"');
      }
      if (data.user_id == undefined) {
        throw new Error('promoteChatMember - Не указан обязательный параметр "user_id"');
      }
      return telegramApi_(token, 'promoteChatMember', data);
    }
    return response;
  }
  setChatAdministratorCustomTitle(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры setChatAdministratorCustomTitle');
    }
    var response = setChatAdministratorCustomTitle_(this.token, params);
    function setChatAdministratorCustomTitle_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('setChatAdministratorCustomTitle - Не указан обязательный параметр "chat_id"');
      }
      if (data.user_id == undefined) {
        throw new Error('setChatAdministratorCustomTitle - Не указан обязательный параметр "user_id"');
      }
      if (data.custom_title == undefined) {
        throw new Error('setChatAdministratorCustomTitle - Не указан обязательный параметр "custom_title"');
      }
      return telegramApi_(token, 'setChatAdministratorCustomTitle', data);
    }
    return response;
  }
  setChatPermissions(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры setChatPermissions');
    }
    var response = setChatPermissions_(this.token, params);
    function setChatPermissions_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('setChatPermissions - Не указан обязательный параметр "chat_id"');
      }
      if (data.permissions == undefined) {
        throw new Error('setChatPermissions - Не указан обязательный параметр "permissions"');
      }
      return telegramApi_(token, 'setChatPermissions', data);
    }
    return response;
  }
  exportChatInviteLink(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры exportChatInviteLink');
    }
    var response = exportChatInviteLink_(this.token, params);
    function exportChatInviteLink_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('exportChatInviteLink - Не указан обязательный параметр "chat_id"');
      }
      return telegramApi_(token, 'exportChatInviteLink', data);
    }
    return response;
  }
  setChatPhoto(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры setChatPhoto');
    }
    var response = setChatPhoto_(this.token, params);
    function setChatPhoto_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('setChatPhoto - Не указан обязательный параметр "chat_id"');
      }
      if (data.photo == undefined) {
        throw new Error('setChatPhoto - Не указан обязательный параметр "photo"');
      }
      return telegramApi_(token, 'setChatPhoto', data);
    }
    return response;
  }
  deleteChatPhoto(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры deleteChatPhoto');
    }
    var response = deleteChatPhoto_(this.token, params);
    function deleteChatPhoto_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('deleteChatPhoto - Не указан обязательный параметр "chat_id"');
      }
      return telegramApi_(token, 'deleteChatPhoto', data);
    }
    return response;
  }
  setChatTitle(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры setChatTitle');
    }
    var response = setChatTitle_(this.token, params);
    function setChatTitle_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('setChatTitle - Не указан обязательный параметр "chat_id"');
      }
      if (data.title == undefined) {
        throw new Error('setChatTitle - Не указан обязательный параметр "title"');
      }
      return telegramApi_(token, 'setChatTitle', data);
    }
    return response;
  }
  setChatDescription(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры setChatDescription');
    }
    var response = setChatDescription_(this.token, params);
    function setChatDescription_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('setChatDescription - Не указан обязательный параметр "chat_id"');
      }
      if (data.description == undefined) {
        throw new Error('setChatDescription - Не указан обязательный параметр "description"');
      }
      return telegramApi_(token, 'setChatDescription', data);
    }
    return response;
  }
  pinChatMessage(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры pinChatMessage');
    }
    var response = pinChatMessage_(this.token, params);
    function pinChatMessage_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('pinChatMessage - Не указан обязательный параметр "chat_id"');
      }
      if (data.message_id == undefined) {
        throw new Error('pinChatMessage - Не указан обязательный параметр "message_id"');
      }
      return telegramApi_(token, 'pinChatMessage', data);
    }
    return response;
  }
  unpinChatMessage(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры unpinChatMessage');
    }
    var response = unpinChatMessage_(this.token, params);
    function unpinChatMessage_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('unpinChatMessage - Не указан обязательный параметр "chat_id"');
      }
      return telegramApi_(token, 'unpinChatMessage', data);
    }
    return response;
  }
  unpinAllChatMessages(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры unpinAllChatMessages');
    }
    var response = unpinAllChatMessages_(this.token, params);
    function unpinAllChatMessages_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('unpinAllChatMessages - Не указан обязательный параметр "chat_id"');
      }
      return telegramApi_(token, 'unpinAllChatMessages', data);
    }
    return response;
  }
  leaveChat(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры leaveChat');
    }
    var response = leaveChat_(this.token, params);
    function leaveChat_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('leaveChat - Не указан обязательный параметр "chat_id"');
      }
      return telegramApi_(token, 'leaveChat', data);
    }
    return response;
  }
  getChat(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры getChat');
    }
    var response = getChat_(this.token, params);
    function getChat_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('getChat - Не указан обязательный параметр "chat_id"');
      }
      return telegramApi_(token, 'getChat', data);
    }
    return response;
  }
  getChatAdministrators(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры getChatAdministrators');
    }
    var response = getChatAdministrators_(this.token, params);
    function getChatAdministrators_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('getChatAdministrators - Не указан обязательный параметр "chat_id"');
      }
      return telegramApi_(token, 'getChatAdministrators', data);
    }
    return response;
  }
  getChatMembersCount(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры getChatMembersCount');
    }
    var response = getChatMembersCount_(this.token, params);
    function getChatMembersCount_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('getChatMembersCount - Не указан обязательный параметр "chat_id"');
      }
      return telegramApi_(token, 'getChatMembersCount', data);
    }
    return response;
  }
  getChatMember(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры getChatMember');
    }
    var response = getChatMember_(this.token, params);
    function getChatMember_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('getChatMember - Не указан обязательный параметр "chat_id"');
      }
      if (data.user_id == undefined) {
        throw new Error('getChatMember - Не указан обязательный параметр "user_id"');
      }
      return telegramApi_(token, 'getChatMember', data);
    }
    return response;
  }
  setChatStickerSet(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры setChatStickerSet');
    }
    var response = setChatStickerSet_(this.token, params);
    function setChatStickerSet_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('setChatStickerSet - Не указан обязательный параметр "chat_id"');
      }
      if (data.sticker_set_name == undefined) {
        throw new Error('setChatStickerSet - Не указан обязательный параметр "sticker_set_name"');
      }
      return telegramApi_(token, 'setChatStickerSet', data);
    }
    return response;
  }
  deleteChatStickerSet(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры deleteChatStickerSet');
    }
    var response = deleteChatStickerSet_(this.token, params);
    function deleteChatStickerSet_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('deleteChatStickerSet - Не указан обязательный параметр "chat_id"');
      }
      return telegramApi_(token, 'deleteChatStickerSet', data);
    }
    return response;
  }
}













