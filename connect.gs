function telegramApi_(token, method, data) {
  if (!!method) {
    var url = `https://api.telegram.org/bot${token}/${method}`;
    var options = {
      muteHttpExceptions: true,
      method: 'POST',
      contentType: 'application/json'
    };
    if (data != null) {
      options.payload = JSON.stringify(data);
    }
    var response = UrlFetchApp.fetch(url, options);
    return JSON.parse(response);
  } else {
    throw new Error('telegramApi_() - Не указан method');
  }
}