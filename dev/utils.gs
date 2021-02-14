class Utils {
  constructor() { }
  objSize(obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  }
  bytesCount(str) {
    return Utilities.newBlob(str).getBytes().length;
  }
  isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }
}
