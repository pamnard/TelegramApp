class Stickers { // Stickers
  constructor(token) {
    this.token = token;
  }
  sendSticker(params) {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры sendSticker');
    }
    var response = sendSticker_(this.token, params);
    function sendSticker_(token, data) {
      if (data.chat_id == undefined) {
        throw new Error('sendSticker - Не указан обязательный параметр "chat_id"');
      }
      if (data.sticker == undefined) {
        throw new Error('sendSticker - Не указан обязательный параметр "sticker"');
      }
      return telegramApi_(token, 'sendSticker', data);
    }
    return response;
  }
  getStickerSet(params)  {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры getStickerSet');
    }
    var response = getStickerSet_(this.token, params);
    function getStickerSet_(token, data) {
      if (data.name == undefined) {
        throw new Error('getStickerSet - Не указан обязательный параметр "name"');
      }
      return telegramApi_(token, 'getStickerSet', data);
    }
    return response;
  }
  uploadStickerFile(params)  {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры uploadStickerFile');
    }
    var response = uploadStickerFile_(this.token, params);
    function uploadStickerFile_(token, data) {
      if (data.user_id == undefined) {
        throw new Error('uploadStickerFile - Не указан обязательный параметр "user_id"');
      }
      if (data.png_sticker == undefined) {
        throw new Error('uploadStickerFile - Не указан обязательный параметр "png_sticker"');
      }
      return telegramApi_(token, 'uploadStickerFile', data);
    }
    return response;
  }
  createNewStickerSet(params)  {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры createNewStickerSet');
    }
    var response = createNewStickerSet_(this.token, params);
    function createNewStickerSet_(token, data) {
      if (data.user_id == undefined) {
        throw new Error('createNewStickerSet - Не указан обязательный параметр "user_id"');
      }
      if (data.name == undefined) {
        throw new Error('createNewStickerSet - Не указан обязательный параметр "name"');
      }
      if (data.title == undefined) {
        throw new Error('createNewStickerSet - Не указан обязательный параметр "title"');
      }
      if (data.emojis == undefined) {
        throw new Error('createNewStickerSet - Не указан обязательный параметр "emojis"');
      }
      return telegramApi_(token, 'createNewStickerSet', data);
    }
    return response;
  }
  addStickerToSet(params)  {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры addStickerToSet');
    }
    var response = addStickerToSet_(this.token, params);
    function addStickerToSet_(token, data) {
      if (data.user_id == undefined) {
        throw new Error('addStickerToSet - Не указан обязательный параметр "user_id"');
      }
      if (data.name == undefined) {
        throw new Error('addStickerToSet - Не указан обязательный параметр "name"');
      }
      if (data.emojis == undefined) {
        throw new Error('addStickerToSet - Не указан обязательный параметр "emojis"');
      }
      return telegramApi_(token, 'addStickerToSet', data);
    }
    return response;
  }
  setStickerPositionInSet(params)  {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры setStickerPositionInSet');
    }
    var response = setStickerPositionInSet_(this.token, params);
    function setStickerPositionInSet_(token, data) {
      if (data.sticker == undefined) {
        throw new Error('setStickerPositionInSet - Не указан обязательный параметр "sticker"');
      }
      if (data.position == undefined) {
        throw new Error('setStickerPositionInSet - Не указан обязательный параметр "position"');
      }
      return telegramApi_(token, 'setStickerPositionInSet', data);
    }
    return response;
  }
  setStickerSetThumb(params)  {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры setStickerSetThumb');
    }
    var response = setStickerSetThumb_(this.token, params);
    function setStickerSetThumb_(token, data) {
      if (data.name == undefined) {
        throw new Error('setStickerSetThumb - Не указан обязательный параметр "name"');
      }
      if (data.user_id == undefined) {
        throw new Error('setStickerSetThumb - Не указан обязательный параметр "user_id"');
      }
      return telegramApi_(token, 'setStickerSetThumb', data);
    }
    return response;
  }
  deleteStickerFromSet(params)  {
    if (params == null) {
      throw new Error('Не указаны обязательные параметры deleteStickerFromSet');
    }
    var response = deleteStickerFromSet_(this.token, params);
    function deleteStickerFromSet_(token, data) {
      if (data.sticker == undefined) {
        throw new Error('deleteStickerFromSet - Не указан обязательный параметр "sticker"');
      }
      return telegramApi_(token, 'deleteStickerFromSet', data);
    }
    return response;
  }
}













